'use client'

import AnimatedSection from './AnimatedSection'
import { images } from '@/data/images'

// Textos extraídos de la web actual
const features = [
  { icon: 'fa-cloud', text: 'Terraza al aire libre' },
  { icon: 'fa-leaf', text: 'Opciones sin gluten' },
  { icon: 'fa-seedling', text: 'Opciones vegetarianas' },
  { icon: 'fa-wine-glass-alt', text: 'Vinos de La Rioja' },
]

export default function About() {
  return (
    <section id="about" className="section-cream relative py-24 sm:py-32">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images — mismas fotos que la web actual */}
          <AnimatedSection direction="left">
            <div className="about-images">
              <div className="about-img-main">
                <img
                  src={images.aboutMain}
                  alt="Entrada En Las Nubes Restobar"
                  loading="lazy"
                  className="w-full h-[350px] sm:h-[450px] object-cover rounded-2xl shadow-warm"
                />
              </div>
              <div className="about-img-accent mt-4">
                <img
                  src={images.aboutAccent}
                  alt="Comedor En Las Nubes Restobar"
                  loading="lazy"
                  className="w-full h-[200px] sm:h-[250px] object-cover rounded-2xl shadow-warm"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Text — texto real de la web actual */}
          <div>
            <AnimatedSection direction="right">
              <div className="section-header" style={{ textAlign: 'left' }}>
                <div className="label">
                  <svg viewBox="0 0 40 24" fill="none" style={{ width: '18px', height: '12px', display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}>
                    <path d="M8,20 C4.5,20 2,17.5 2,14.5 C2,11.8 4,9.6 6.5,9.2 C6.8,6.2 9.4,4 12.5,4 C14.8,4 16.8,5.2 17.8,7 C18.5,6.4 19.5,6 20.5,6 C22.8,6 24.7,7.8 24.8,10.2 C27.2,10.6 29,12.6 29,15 C29,17.8 26.8,20 24,20 Z" fill="currentColor" opacity="0.5" />
                  </svg>
                  <span className="text-xs uppercase tracking-[0.3em] text-terracotta/50 font-body font-semibold">Nuestra Historia</span>
                </div>
              </div>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brown-dark">
                Un lugar <span className="italic text-terracotta">sobre Logroño</span>
              </h2>
              <p className="mt-6 text-text-medium font-body leading-relaxed">
                En pleno centro histórico de Logroño, a tan solo 5 minutos del casco antiguo y de la Gran Vía, encontrarás un espacio con mucho encanto donde degustar lo mejor de la gastronomía internacional.
              </p>
              <p className="mt-4 text-text-medium font-body leading-relaxed">
                Nuestro estilo industrial y vintage, combinado con una terraza en calle peatonal tranquila, crea el ambiente perfecto para disfrutar de una comida memorable con amigos, familia o compañeros de trabajo.
              </p>
              <p className="mt-4 text-text-medium font-body leading-relaxed">
                Con capacidad para 99 personas (55 en interior y 44 en terraza), somos el lugar ideal para cualquier celebración.
              </p>
            </AnimatedSection>

            {/* Features — mismos que la web actual */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {features.map((feat, i) => (
                <AnimatedSection key={feat.text} direction="right" delay={0.1 + i * 0.05}>
                  <div className="flex items-center gap-3 py-2">
                    <i className={`fas ${feat.icon} text-terracotta text-sm`} />
                    <span className="text-sm text-text-medium font-body">{feat.text}</span>
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
