'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const specialties = [
  {
    image: '/fotos/CACHOPO.jpg',
    title: 'Cachopos',
    subtitle: 'Nuestra estrella',
    desc: 'Cinco variedades de cachopo que nos han convertido en referencia en Logroño. Tradicional, bacon carbonara, cecina con queso de cabra y más.',
    price: 'Desde 32€',
  },
  {
    image: '/fotos/CACHOPO ESPECIAL.jpg',
    title: 'Cachopo Especial',
    subtitle: 'Exclusivo de la casa',
    desc: 'Nuestra versión exclusiva con ingredientes seleccionados del día. Una experiencia gastronómica única.',
    price: '35€',
  },
  {
    image: '/fotos/TEMPURA.jpg',
    title: 'Cocina Alemana',
    subtitle: 'Currywurst, codillo y más',
    desc: 'Auténticos platos de la gastronomía alemana: currywurst, codillo asado, salchichas y schnitzel.',
    price: 'Desde 14€',
  },
]

export default function Specialties() {
  return (
    <section id="especialidades" className="section-dark relative overflow-hidden py-24 sm:py-32">
      <div className="gradient-orb absolute top-0 left-0 w-[600px] h-[600px] bg-terracotta/3" />
      <div className="light-leak-right" />

      <div className="section-padding relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold/60 font-body font-semibold">
            Lo mejor de nuestra cocina
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream">
            Nuestras <span className="gradient-text-gold">Especialidades</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {specialties.map((spec, i) => (
            <AnimatedSection key={spec.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-3xl overflow-hidden group"
              >
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={spec.image}
                    alt={spec.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs text-gold/80 font-body uppercase tracking-wider">{spec.subtitle}</span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-cream">{spec.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-cream/50 font-body leading-relaxed">{spec.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-lg font-bold text-gold">{spec.price}</span>
                    <a href="#carta" className="text-xs text-terracotta-light hover:text-terracotta font-body font-medium transition-colors">
                      Ver en carta <i className="fas fa-arrow-right ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
