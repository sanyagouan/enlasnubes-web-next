'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookies_accepted')) {
      const t = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(t)
    }
  }, [])

  const save = (v: string) => {
    localStorage.setItem('cookies_accepted', v)
    document.cookie = `cookies_accepted=${v};path=/;max-age=${365 * 24 * 60 * 60};SameSite=Lax`
    setVisible(false)
  }

  if (!visible) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} transition={{ type: 'spring', damping: 25, stiffness: 300 }} className="fixed bottom-0 left-0 right-0 z-[80] p-4">
          <div className="max-w-2xl mx-auto glass-dark rounded-2xl p-5 shadow-2xl border border-white/5">
            <p className="text-sm text-cream/50 font-body leading-relaxed">
              Utilizamos cookies técnicas para el funcionamiento del sitio. No usamos cookies de análisis ni publicidad.{' '}
              <Link href="/politica-cookies" className="underline text-gold/60 hover:text-gold">Más info</Link>
            </p>
            <div className="mt-3 flex gap-3">
              <button onClick={() => save('accepted')} className="btn-primary text-xs px-5 py-2">Aceptar</button>
              <button onClick={() => save('rejected')} className="btn-secondary text-xs px-5 py-2" style={{ color: '#FEFCF9', borderColor: 'rgba(254,252,249,0.2)' }}>Rechazar</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
