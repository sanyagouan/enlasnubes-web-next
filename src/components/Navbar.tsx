'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Carta', href: '#carta' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Opiniones', href: '#opiniones' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brown-dark/95 backdrop-blur-md shadow-warm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-section mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-cream">
            En Las <span className="italic text-gold">Nubes</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream/70 hover:text-gold transition-colors font-body"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+34941578451"
            className="text-sm font-body font-semibold text-cream bg-terracotta/20 border border-terracotta/30 px-4 py-2 rounded-lg hover:bg-terracotta/30 transition-all"
          >
            <i className="fas fa-phone mr-1.5 text-xs" />
            Reservar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-cream/80 p-2"
          aria-label="Menú"
        >
          <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brown-dark/98 backdrop-blur-lg border-t border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm text-cream/70 hover:text-gold transition-colors font-body"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+34941578451"
                className="block py-3 text-sm font-body font-semibold text-terracotta"
              >
                <i className="fas fa-phone mr-2" />
                941 57 84 51
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
