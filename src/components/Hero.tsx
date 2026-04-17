'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const cv = canvasRef.current
    const hero = heroRef.current
    if (!cv || !hero) return

    const gl = cv.getContext('webgl') || cv.getContext('experimental-webgl') as WebGLRenderingContext | null

    if (!gl) {
      hero.style.background = 'linear-gradient(160deg, #0d2055, #2a5fa8, #a0c8f0)'
      return
    }

    /* ═══════════════════════════════════════════════════════════════
       CLOUD HERO — Worley + FBM Noise Texture · WebGL
       (Exacto código de la web actual)
       ═══════════════════════════════════════════════════════════════ */

    const sz = 256
    let seed = 98765

    function rng() {
      seed = Math.imul(seed ^ seed >>> 13, seed | 1)
      seed ^= seed >>> 7
      return (seed >>> 0) / 0xFFFFFFFF
    }

    function makePoints(n: number, scale: number) {
      return Array.from({ length: n }, () => [rng() * sz * scale, rng() * sz * scale])
    }
    const pts1 = makePoints(10, 1)
    const pts2 = makePoints(22, 1)

    function worley(x: number, y: number, pts: number[][], radius: number) {
      let d1 = 1e9
      for (const [px, py] of pts) {
        for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
          const wx = px + dx * sz, wy = py + dy * sz
          const d = Math.sqrt((x - wx) * (x - wx) + (y - wy) * (y - wy))
          if (d < d1) d1 = d
        }
      }
      const norm = Math.max(0, 1 - d1 / radius)
      return norm * norm
    }

    function hash(ix: number, iy: number) {
      let n = Math.imul(ix * 374761393 + iy * 668265263, 1013904223)
      n ^= n >>> 13; n = Math.imul(n, 1664525) + 1013904223
      return ((n ^ n >>> 14) >>> 0) / 0xFFFFFFFF
    }

    function vn(x: number, y: number) {
      const ix = Math.floor(x), iy = Math.floor(y)
      let fx = x - ix, fy = y - iy
      fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy)
      const a = hash(ix, iy), b = hash(ix + 1, iy), c = hash(ix, iy + 1), d = hash(ix + 1, iy + 1)
      return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy
    }

    function fbm(x: number, y: number) {
      let v = 0, amp = 0.5, ox = x, oy = y
      for (let i = 0; i < 5; i++) {
        v += vn(ox, oy) * amp
        const nx = (ox - oy) * 1.414 * 1.002 + 3.71
        const ny = (ox + oy) * 1.414 * 1.002 + 1.93
        ox = nx * 2.01; oy = ny * 2.01; amp *= 0.5
      }
      return v
    }

    const raw = new Float32Array(sz * sz)
    let mn = 1e9, mx = -1e9
    const r1 = sz * 0.34, r2 = sz * 0.16

    for (let y = 0; y < sz; y++) {
      for (let x = 0; x < sz; x++) {
        const w1 = worley(x, y, pts1, r1)
        const w2 = worley(x, y, pts2, r2) * 0.5
        const f = fbm(x / sz * 5, y / sz * 5)
        const v = w1 * 0.52 + w2 * 0.18 + f * 0.30
        raw[y * sz + x] = v
        if (v < mn) mn = v; if (v > mx) mx = v
      }
    }

    const data = new Uint8Array(sz * sz)
    const range = mx - mn
    for (let i = 0; i < sz * sz; i++)
      data[i] = Math.round(Math.max(0, Math.min(1, (raw[i] - mn) / range)) * 255)

    // Create WebGL texture
    const tex = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, tex)
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, sz, sz, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, data)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT)

    // Compile shaders
    function compileShader(type: number, src: string) {
      const sh = gl!.createShader(type)!
      gl!.shaderSource(sh, src); gl!.compileShader(sh)
      return sh
    }

    const VS = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`

    const FS = `precision mediump float;
uniform float T;
uniform vec2 R;
uniform vec2 M;
uniform sampler2D N;

float fbmT(vec2 uv){
  float v=0.,a=.5;
  for(int i=0;i<4;i++){
    v+=texture2D(N,uv).r*a;
    uv=uv*2.01+vec2(.37,.71);
    a*=.5;
  }
  return v;
}

float density(vec2 uv, float spd){
  vec2 d=uv+vec2(T*spd,0.);
  d+=vec2(sin(d.y*3.)*.02,cos(d.x*2.)*.01);
  float f=fbmT(d*.5);
  return smoothstep(.38,.72,f);
}

void main(){
  vec2 uv=gl_FragCoord.xy/R;
  float c=density(uv*vec2(1.5,1.),.012);
  float c2=density(uv*vec2(1.2,1.)+vec2(.5,.3),.008);
  c=max(c,c2*.7);

  vec3 skyT=vec3(.15,.25,.55);
  vec3 skyB=vec3(.45,.65,.85);
  vec3 sky=mix(skyT,skyB,uv.y);

  vec3 sunPos=vec2(.7,.8);
  float sd=length(uv-sunPos);
  vec3 sun=vec3(1.,.85,.5)*exp(-sd*4.)*.6;

  vec3 horizon=mix(vec3(.8,.7,.5),vec3(.6,.5,.4),uv.y)*exp(-abs(uv.y-.4)*6.)*.4;

  vec3 col=sky+sun+horizon;

  vec3 cloud=vec3(.95,.93,.88);
  col=mix(col,cloud,c*.85);
  col*=1.-exp(-c*2.)*.3;

  float vig=1.-length((uv-.5)*vec2(1.,.6))*.5;
  col*=vig;
  col=pow(col,vec3(.95));

  gl_FragColor=vec4(col,1.);
}`

    const vs = compileShader(gl.VERTEX_SHADER, VS)
    const fs = compileShader(gl.FRAGMENT_SHADER, FS)
    const prog = gl.createProgram()!
    gl.attachShader(prog, vs); gl.attachShader(prog, fs)
    gl.linkProgram(prog); gl.useProgram(prog)

    // Full-screen quad
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    const pLoc = gl.getAttribLocation(prog, 'p')
    gl.enableVertexAttribArray(pLoc)
    gl.vertexAttribPointer(pLoc, 2, gl.FLOAT, false, 0, 0)

    // Uniforms
    const tLoc = gl.getUniformLocation(prog, 'T')
    const rLoc = gl.getUniformLocation(prog, 'R')
    const mLoc = gl.getUniformLocation(prog, 'M')
    const nLoc = gl.getUniformLocation(prog, 'N')

    gl.activeTexture(gl.TEXTURE0)
    gl.bindTexture(gl.TEXTURE_2D, tex)
    gl.uniform1i(nLoc, 0)

    let time = 0
    let animId = 0
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function resize() {
      if (!cv || !hero || !gl) return
      cv.width = hero.clientWidth * window.devicePixelRatio
      cv.height = hero.clientHeight * window.devicePixelRatio
      gl.viewport(0, 0, cv.width, cv.height)
      gl.uniform2f(rLoc, cv.width, cv.height)
    }

    resize()
    window.addEventListener('resize', resize)

    function frame() {
      if (!gl) return
      if (!prefersReduced) time += 0.003
      gl.uniform1f(tLoc, time)
      gl.uniform2f(mLoc, 0, 0)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      animId = requestAnimationFrame(frame)
    }

    frame()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas id="sky-canvas" ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Content overlay */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-white/50 font-body font-medium mb-6">
            Cocina Fusión · Logroño
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
        >
          En Las{' '}
          <span className="italic" style={{
            background: 'linear-gradient(135deg, #D4A843, #E8C36A, #D4A843)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Nubes
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-heading text-lg sm:text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto"
        >
          Cocina fusión en pleno centro de Logroño
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contacto" className="btn-primary text-sm px-8 py-4 rounded-xl">
            <i className="fas fa-calendar-alt mr-2" />
            Reservar Mesa
          </a>
          <a href="#carta" className="btn-secondary text-sm px-8 py-4 rounded-xl"
            style={{ color: '#FEFCF9', borderColor: 'rgba(254,252,249,0.3)' }}>
            <i className="fas fa-utensils mr-2" />
            Ver Carta
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/30"
          >
            <i className="fas fa-chevron-down text-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
