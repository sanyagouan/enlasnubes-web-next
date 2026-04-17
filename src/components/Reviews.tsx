'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { reviews, statsByPlatform, priceRange } from '@/data/reviews'

const platforms = [
  { id: 'google', name: 'Google', url: 'https://www.google.com/maps/place/En+Las+Nubes+Restobar/@42.4636,-2.4451,17z/', color: 'from-blue-500 to-blue-600' },
  { id: 'uberEats', name: 'Uber Eats', url: 'https://www.ubereats.com/es/store/en-las-nubes-restobar/wep1Cog2SfSkmRSK2rJrzg', color: 'from-green-500 to-green-600' },
  { id: 'tripAdvisor', name: 'TripAdvisor', url: 'https://www.tripadvisor.es/Restaurant_Review-g187513-d8531456-Reviews-En_las_Nubes_Restobar-Logrono_La_Rioja.html', color: 'from-orange-500 to-orange-600' },
]

export default function Reviews() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % reviews.length), 6000)
    return () => clearInterval(timer)
  }, [])

  const activeReview = reviews[current]

  return (
    <section id="reviews" className="relative overflow-hidden py-24 sm:py-32 bg-[#0f0f1a]">
      <div className="section-padding relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="label">
            <svg viewBox="0 0 40 24" fill="none" style={{ width: '18px', height: '12px', display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}>
              <path d="M8,20 C4.5,20 2,17.5 2,14.5 C2,11.8 4,9.6 6.5,9.2 C6.8,6.2 9.4,4 12.5,4 C14.8,4 16.8,5.2 17.8,7 C18.5,6.4 19.5,6 20.5,6 C22.8,6 24.7,7.8 24.8,10.2 C27.2,10.6 29,12.6 29,15 C29,17.8 26.8,20 24,20 Z" fill="currentColor" opacity="0.5" />
            </svg>
            <span className="text-xs uppercase tracking-[0.3em] text-gold/60 font-body font-semibold">Lo que dicen</span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream">Opiniones</h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Carrusel */}
          <AnimatedSection direction="left">
            <div className="glass-warm rounded-3xl p-8 sm:p-10 min-h-[260px] flex flex-col justify-between relative">
              <span className="absolute top-6 right-8 font-display text-8xl text-gold/10 leading-none select-none">&ldquo;</span>
              <motion.p
                key={activeReview.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-cream/60 font-body text-base sm:text-lg leading-relaxed italic relative z-10"
              >
                &ldquo;{activeReview.text}&rdquo;
              </motion.p>
              <motion.div
                key={`a-${activeReview.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-terracotta/30 flex items-center justify-center text-sm font-body font-bold text-cream/80">
                    {activeReview.initials}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-cream text-sm">{activeReview.name}</p>
                    <p className="text-xs text-cream/40 font-body">{activeReview.platform}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className={i < activeReview.rating ? 'text-gold fill-gold' : 'text-cream/10'} />
                  ))}
                </div>
              </motion.div>
              <div className="flex justify-center gap-2 mt-5">
                {reviews.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? 'w-6 bg-gold' : 'bg-cream/15'}`} />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-4">
              {platforms.map((p, i) => {
                const stat = statsByPlatform[p.id]
                return (
                  <motion.a
                    key={p.id} href={p.url} target="_blank" rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-2xl glass-card group"
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white font-body font-bold text-sm shrink-0`}>{stat.rating}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-body font-semibold text-cream text-sm">{p.name}</h4>
                        <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, j) => <Star key={j} size={11} className={j < Math.round(stat.rating) ? 'text-gold fill-gold' : 'text-cream/10'} />)}</div>
                      </div>
                      <p className="text-xs text-cream/40 font-body">{stat.count.toLocaleString('es-ES')} valoraciones</p>
                    </div>
                    <ExternalLink size={14} className="text-cream/20 group-hover:text-cream/50 transition-colors" />
                  </motion.a>
                )
              })}
              <div className="p-4 rounded-2xl glass-warm flex items-center justify-between">
                <span className="text-cream/50 font-body text-sm">Precio medio por persona</span>
                <span className="font-display text-xl font-bold gradient-text-gold">{priceRange}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
