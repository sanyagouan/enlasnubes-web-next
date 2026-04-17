'use client'

import AnimatedSection from './AnimatedSection'

const platos = [
  { tipo: 'Entrante', nombre: 'Croquetas caseras + Patatas bravas', precio: '10€' },
  { tipo: 'Principal', nombre: 'Cachopo tradicional o Plato a elegir de la carta', precio: 'Incluido' },
  { tipo: 'Bebida', nombre: 'Vino, cerveza, refresco o agua', precio: 'Incluido' },
  { tipo: 'Postre', nombre: 'Tiramisú o Tarta de chocolate', precio: 'Incluido' },
  { tipo: 'Pan', nombre: 'Pan con alioli casero', precio: 'Incluido' },
]

export default function MenuDelDia() {
  return (
    <section className="section-cream relative py-20 sm:py-24">
      <div className="section-padding">
        <AnimatedSection className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-terracotta/50 font-body font-semibold">
            La mejor relación calidad-precio
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold text-brown-dark">
            Menú del <span className="gradient-text-terracotta">Día</span>
          </h2>
          <p className="mt-3 text-text-medium font-body">De martes a jueves (festivos excluidos)</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <div className="glass-warm rounded-3xl p-8 sm:p-10 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-terracotta/5 rounded-bl-full" />

              <div className="space-y-4 relative z-10">
                {platos.map((plato, i) => (
                  <div
                    key={plato.tipo}
                    className="flex items-center justify-between py-3 border-b border-brown-dark/5 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-terracotta/10 flex items-center justify-center text-xs font-body font-bold text-terracotta">
                        {i + 1}
                      </div>
                      <div>
                        <span className="text-xs text-text-light font-body uppercase tracking-wider">{plato.tipo}</span>
                        <p className="text-sm text-brown-dark font-body font-medium">{plato.nombre}</p>
                      </div>
                    </div>
                    <span className="text-sm font-display font-semibold text-terracotta">{plato.precio}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-text-light font-body">
                  * Consulta disponibilidad y precio en el restaurante
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
