'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { images } from '@/data/images'

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)

  const prev = () =>
    setSelected((s) => (s !== null ? (s - 1 + images.gallery.length) % images.gallery.length : null))
  const next = () =>
    setSelected((s) => (s !== null ? (s + 1) % images.gallery.length : null))

  return (
    <section id="galeria" className="section-dark relative overflow-hidden py-24 sm:py-32">
      <div className="gradient-orb absolute top-0 right-0 w-[600px] h-[600px] bg-sun-warm/4" />
      <div className="light-leak-left" />

      <div className="section-padding relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold/60 font-body font-semibold">
            Nuestro espacio
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream">
            La <span className="gradient-text-gold">Galería</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-cream/40 font-body text-base">
            Descubre el ambiente de En Las Nubes
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.gallery.map((img, i) => {
            const isTall = i % 5 === 0
            const isWide = i % 7 === 3

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
                onClick={() => setSelected(i)}
                className={`gallery-item cursor-pointer ${isTall ? 'row-span-2' : ''} ${isWide ? 'col-span-2' : ''}`}
              >
                <div className={`relative ${isTall ? 'aspect-[3/4]' : isWide ? 'aspect-video' : 'aspect-square'}`}>
                  <img
                    src={img}
                    alt={`En Las Nubes Restobar - Galería ${i + 1}`}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <span className="text-white/80 text-sm font-body">Ver foto</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setSelected(null) }}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 rounded-full glass text-cream/70 hover:text-cream transition-colors z-10"
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-2 sm:left-8 p-3 rounded-full glass text-cream/70 hover:text-cream transition-colors z-10"
              aria-label="Anterior"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-2 sm:right-8 p-3 rounded-full glass text-cream/70 hover:text-cream transition-colors z-10"
              aria-label="Siguiente"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images.gallery[selected]}
                alt={`Foto ${selected + 1}`}
                className="object-contain w-full h-full rounded-xl"
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/40 text-sm font-body">
              {selected + 1} / {images.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
