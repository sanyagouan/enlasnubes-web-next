'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Cookie, X, Settings } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('cookies_accepted')
    if (!saved) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const savePreference = (value: string) => {
    localStorage.setItem('cookies_accepted', value)
    document.cookie = `cookies_accepted=${value};path=/;max-age=${365 * 24 * 60 * 60};SameSite=Lax`
    setVisible(false)
  }

  if (!visible) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[80] p-4 sm:p-6"
        >
          <div className="max-w-3xl mx-auto glass-dark rounded-2xl p-5 sm:p-6 shadow-2xl border border-white/5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                <Cookie size={20} className="text-gold" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-cream text-base">Política de Cookies</h3>
                <p className="mt-2 text-sm text-cream/40 font-body leading-relaxed">
                  Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y recursos externos (Google Fonts, Font Awesome). No usamos cookies de análisis ni publicidad. Puedes{' '}
                  <Link href="/politica-cookies" className="underline text-gold/60 hover:text-gold transition-colors">leer más aquí</Link>.
                </p>

                {showSettings && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="mt-4 overflow-hidden">
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-3">
                      <div className="flex items-center justify-between">
                        <div><p className="text-sm font-body font-medium text-cream/70">Cookies técnicas</p><p className="text-xs text-cream/30 font-body mt-0.5">Necesarias para el funcionamiento</p></div>
                        <div className="w-10 h-6 rounded-full bg-gold/30 flex items-center justify-end px-0.5"><div className="w-5 h-5 rounded-full bg-gold" /></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div><p className="text-sm font-body font-medium text-cream/70">Google Fonts / Font Awesome</p><p className="text-xs text-cream/30 font-body mt-0.5">Carga de tipografías e iconos</p></div>
                        <div className="w-10 h-6 rounded-full bg-gold/30 flex items-center justify-end px-0.5"><div className="w-5 h-5 rounded-full bg-gold" /></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div><p className="text-sm font-body font-medium text-cream/70">Cookies de análisis</p><p className="text-xs text-cream/30 font-body mt-0.5">No utilizadas en este sitio</p></div>
                        <div className="w-10 h-6 rounded-full bg-white/10 flex items-center justify-start px-0.5"><div className="w-5 h-5 rounded-full bg-white/20" /></div>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <button onClick={() => savePreference('accepted')} className="btn-primary text-xs px-6 py-2.5 flex-1 sm:flex-none">Aceptar cookies necesarias</button>
                  <button onClick={() => savePreference('rejected')} className="btn-secondary text-xs px-6 py-2.5 flex-1 sm:flex-none">Rechazar todas</button>
                  <button onClick={() => setShowSettings(!showSettings)} className="flex items-center justify-center gap-2 text-xs text-cream/30 hover:text-cream/50 transition-colors px-4 py-2.5">
                    <Settings size={14} /> Configurar
                  </button>
                </div>
              </div>
              <button onClick={() => savePreference('rejected')} className="p-1.5 text-cream/20 hover:text-cream/40 transition-colors shrink-0" aria-label="Cerrar">
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
