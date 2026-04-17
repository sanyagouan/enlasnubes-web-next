'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { images } from '@/data/images'

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)
  const labels = ['Cachopo Tradicional', 'Entrada', 'Cachopo Especial', 'Tempura', 'Comedor']

  const prev = () => setSelected(s => s !== null ? (s - 1 + images.gallery.length) % images.gallery.length : null)
  const next = () => setSelected(s => s !== null ? (s + 1) % images.gallery.length : null)

  return (
    <section id="gallery" className="relative overflow-hidden py-24 sm:py-32" style={{ background: 'linear-gradient(180deg, #0f0f1a 0%, #1a1a2e 100%)' }}>
      <div className="section-padding relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="label">
            <svg viewBox="0 0 40 24" fill="none" style={{ width: '18px', height: '12px', display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}>
              <path d="M8,20 C4.5,20 2,17.5 2,14.5 C2,11.8 4,9.6 6.5,9.2 C6.8,6.2 9.4,4 12.5,4 C14.8,4 16.8,5.2 17.8,7 C18.5,6.4 19.5,6 20.5,6 C22.8,6 24.7,7.8 24.8,10.2 C27.2,10.6 29,12.6 29,15 C29,17.8 26.8,20 24,20 Z" fill="currentColor" opacity="0.5" />
            </svg>
            <span className="text-xs uppercase tracking-[0.3em] text-gold/60 font-body font-semibold">Nuestro Espacio</span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream">
            Galería
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {images.gallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className="cursor-pointer rounded-xl overflow-hidden aspect-square relative group"
            >
              <img src={img} alt={labels[i]} className="object-cover w-full h-full" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity">{labels[i]}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button onClick={e => { e.stopPropagation(); setSelected(null) }} className="absolute top-4 right-4 p-3 rounded-full glass text-cream/70 hover:text-cream z-10" aria-label="Cerrar"><X size={24} /></button>
            <button onClick={e => { e.stopPropagation(); prev() }} className="absolute left-4 p-3 rounded-full glass text-cream/70 hover:text-cream z-10" aria-label="Anterior"><ChevronLeft size={28} /></button>
            <button onClick={e => { e.stopPropagation(); next() }} className="absolute right-4 p-3 rounded-full glass text-cream/70 hover:text-cream z-10" aria-label="Siguiente"><ChevronRight size={28} /></button>
            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[80vh]"
              onClick={e => e.stopPropagation()}
            >
              <img src={images.gallery[selected]} alt={labels[selected]} className="max-h-[80vh] rounded-xl object-contain" />
              <p className="text-center text-cream/50 text-sm font-body mt-3">{labels[selected]} · {selected + 1}/{images.gallery.length}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
