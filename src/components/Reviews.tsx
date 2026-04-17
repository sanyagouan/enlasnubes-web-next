'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, ExternalLink } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { reviews, statsByPlatform, priceRange } from '@/data/reviews'

const platforms = [
  { id: 'google' as const, name: 'Google', url: 'https://www.google.com/maps/place/En+Las+Nubes+Restobar/@42.4636,-2.4451,17z/', color: 'from-blue-500 to-blue-600' },
  { id: 'uberEats' as const, name: 'Uber Eats', url: 'https://www.ubereats.com/es/store/en-las-nubes-restobar/wep1Cog2SfSkmRSK2rJrzg', color: 'from-green-500 to-green-600' },
  { id: 'tripAdvisor' as const, name: 'TripAdvisor', url: 'https://www.tripadvisor.es/Restaurant_Review-g187513-d8531456-Reviews-En_las_Nubes_Restobar-Logrono_La_Rioja.html', color: 'from-orange-500 to-orange-600' },
]

export default function Reviews() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % reviews.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const activeReview = reviews[current]

  return (
    <section id="opiniones" className="section-darker relative overflow-hidden py-24 sm:py-32">
      <div className="gradient-orb absolute -top-40 left-1/4 w-[700px] h-[700px] bg-gold/3" />
      <div className="light-leak-right" />

      <div className="section-padding relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold/60 font-body font-semibold">
            Lo que dicen de nosotros
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream">
            Opiniones <span className="gradient-text-gold">Reales</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Carousel */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="glass-warm rounded-3xl p-8 sm:p-10 min-h-[280px] flex flex-col justify-between">
                <span className="absolute top-6 right-8 font-display text-8xl text-gold/10 leading-none select-none">&ldquo;</span>
                <div className="relative z-10">
                  <motion.p
                    key={activeReview.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5 }}
                    className="text-cream/60 font-body text-base sm:text-lg leading-relaxed italic"
                  >
                    &ldquo;{activeReview.text}&rdquo;
                  </motion.p>
                </div>

                <motion.div
                  key={`author-${activeReview.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="mt-8 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/30 to-terracotta/30 flex items-center justify-center text-sm font-body font-bold text-cream/80">
                      {activeReview.initials}
                    </div>
                    <div>
                      <p className="font-display font-semibold text-cream text-base">{activeReview.name}</p>
                      <p className="text-xs text-cream/40 font-body">{activeReview.platform}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className={i < activeReview.rating ? 'text-sun-gold fill-sun-gold' : 'text-cream/10'} />
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-gold' : 'bg-cream/15 hover:bg-cream/30'}`}
                    aria-label={`Opinión ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="space-y-4">
              {platforms.map((platform, i) => {
                const stat = statsByPlatform[platform.id]
                return (
                  <motion.a
                    key={platform.id}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-5 rounded-2xl glass-card group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-white font-body font-bold text-sm shrink-0`}>
                      {stat.rating}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-body font-semibold text-cream text-base">{platform.name}</h4>
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star key={j} size={12} className={j < Math.round(stat.rating) ? 'text-sun-gold fill-sun-gold' : 'text-cream/10'} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-cream/40 font-body mt-0.5">
                        {stat.count.toLocaleString('es-ES')} valoraciones
                      </p>
                    </div>
                    <ExternalLink size={16} className="text-cream/20 group-hover:text-cream/50 transition-colors shrink-0" />
                  </motion.a>
                )
              })}

              <div className="mt-6 p-5 rounded-2xl glass-warm">
                <div className="flex items-center justify-between">
                  <span className="text-cream/50 font-body text-sm">Precio medio por persona</span>
                  <span className="font-display text-2xl font-bold gradient-text-gold">{priceRange}</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <a href="https://www.instagram.com/enlasnubes_restobar/" target="_blank" rel="noopener noreferrer" className="btn-glass text-xs gap-2">
                  <i className="fab fa-instagram mr-1" /> @enlasnubes_restobar
                </a>
                <a href="https://www.facebook.com/enlasnubesrestobar/" target="_blank" rel="noopener noreferrer" className="btn-glass text-xs gap-2">
                  <i className="fab fa-facebook mr-1" /> En Las Nubes
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
