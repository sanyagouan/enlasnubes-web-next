'use client'

import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const features = [
  { icon: 'fa-utensils', title: 'Cocina Fusión', desc: 'Asturiana, alemana, canaria y mediterránea en cada plato' },
  { icon: 'fa-cloud', title: 'Ambiente Único', desc: 'Decoración vintage con terraza en el corazón de Logroño' },
  { icon: 'fa-star', title: 'Especialidad Cachopos', desc: 'Considerados de los mejores de Logroño' },
  { icon: 'fa-leaf', title: 'Opciones para Todos', desc: 'Platos sin gluten y vegetarianos disponibles' },
]

export default function About() {
  return (
    <section id="nosotros" className="section-cream relative py-24 sm:py-32">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimatedSection direction="left">
            <div className="relative rounded-3xl overflow-hidden shadow-warm-lg">
              <img
                src="/fotos/COMEDOR EN LAS NUBES.jpg"
                alt="Interior de En Las Nubes Restobar"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/30 to-transparent" />
              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-warm"
              >
                <p className="font-display text-3xl font-bold text-terracotta">99</p>
                <p className="text-xs text-text-medium font-body">Comensales</p>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Text */}
          <div>
            <AnimatedSection direction="right">
              <span className="text-xs uppercase tracking-[0.3em] text-terracotta/50 font-body font-semibold">
                Nuestra historia
              </span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brown-dark">
                Bienvenidos a{' '}
                <span className="gradient-text-terracotta">En Las Nubes</span>
              </h2>
              <p className="mt-6 text-text-medium font-body leading-relaxed max-w-lg">
                En pleno centro de Logroño, en una calle peatonal junto a Gran Vía, 
                encontrarás un rincón donde tres cocinas se funden para crear experiencias 
                únicas. Nuestra carta combina lo mejor de la gastronomía asturiana, alemana 
                y mediterránea con un toque canario.
              </p>
              <p className="mt-4 text-text-medium font-body leading-relaxed max-w-lg">
                Con capacidad para 99 personas entre nuestro acogedor interior y nuestra 
                terraza, somos el lugar perfecto para cualquier ocasión: una comida de 
                negocios, una cena romántica o una reunión con amigos.
              </p>
            </AnimatedSection>

            {/* Features grid */}
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {features.map((feat, i) => (
                <AnimatedSection key={feat.title} direction="right" delay={0.1 + i * 0.1}>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-brown-dark/[0.02] border border-brown-dark/[0.04] hover:border-terracotta/15 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-terracotta/10 flex items-center justify-center shrink-0">
                      <i className={`fas ${feat.icon} text-terracotta text-sm`} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-brown-dark text-sm">{feat.title}</h3>
                      <p className="mt-1 text-xs text-text-light font-body leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
