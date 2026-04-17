'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

// Especialidades extraídas de la web actual
const specialties = [
  { icon: 'fa-drumstick-bite', title: 'Cachopo Tradicional', desc: 'El plato estrella de la casa. Ternera empanada rellena de jamón y queso, servido con patatas y pimientos.', price: '32€' },
  { icon: 'fa-bacon', title: 'Cachopo Bacon & Carbonara', desc: 'Nuestra versión creativa del clásico asturiano con bacon crujiente y salsa carbonara casera.', price: '33€' },
  { icon: 'fa-cheese', title: 'Cachopo Cecina & Queso de Cabra', desc: 'Cecina de León y queso de cabra fundido, combinación perfecta de sabores intensos.', price: '33€' },
  { icon: 'fa-hotdog', title: 'Currywurst', desc: 'Salchicha alemana con salsa curry casera, acompañada de patatas fritas. Auténtica street food alemana.', price: '12€' },
  { icon: 'fa-drumstick-bite', title: 'Codillo Asado', desc: 'Codillo de cerdo horneado lentamente con puré de patata casero y chucrut. Tradición bávara.', price: '18€' },
  { icon: 'fa-utensils', title: 'Schålchtplatte', desc: 'Surtido de salchichas, codillo y Leberkäs con puré de patata y chucrut. Para compartir.', price: '22€' },
]

export default function Specialties() {
  return (
    <section id="specialties" className="relative py-24 sm:py-32" style={{ background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)' }}>
      <div className="section-padding relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="label">
            <svg viewBox="0 0 40 24" fill="none" style={{ width: '18px', height: '12px', display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}>
              <path d="M8,20 C4.5,20 2,17.5 2,14.5 C2,11.8 4,9.6 6.5,9.2 C6.8,6.2 9.4,4 12.5,4 C14.8,4 16.8,5.2 17.8,7 C18.5,6.4 19.5,6 20.5,6 C22.8,6 24.7,7.8 24.8,10.2 C27.2,10.6 29,12.6 29,15 C29,17.8 26.8,20 24,20 Z" fill="currentColor" opacity="0.5" />
            </svg>
            <span className="text-xs uppercase tracking-[0.3em] text-gold/60 font-body font-semibold">Nuestras Estrellas</span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cream">Especialidades</h2>
          <p className="mt-4 text-cream/40 font-body">Platos que nos definen, elaborados con los mejores ingredientes</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((spec, i) => (
            <AnimatedSection key={spec.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <i className={`fas ${spec.icon} text-gold text-xl`} />
                </div>
                <h3 className="font-display text-lg font-semibold text-cream">{spec.title}</h3>
                <p className="mt-3 text-sm text-cream/40 font-body leading-relaxed">{spec.desc}</p>
                <div className="mt-4 font-display text-xl font-bold gradient-text-gold">{spec.price}</div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
