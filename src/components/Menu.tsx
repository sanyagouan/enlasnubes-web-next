'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { menuItems, categories, type MenuCategory, type Tag } from '@/data/menu'

const filterOptions: { id: Tag | 'all'; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'sin-gluten', label: 'Sin gluten' },
  { id: 'vegetariano', label: 'Vegetariano' },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all')
  const [activeFilter, setActiveFilter] = useState<Tag | 'all'>('all')

  const filtered = menuItems.filter((item) => {
    const catMatch = activeCategory === 'all' || item.category === activeCategory
    const filterMatch = activeFilter === 'all' || item.tags.includes(activeFilter)
    return catMatch && filterMatch
  })

  return (
    <section id="carta" className="section-cream relative py-24 sm:py-32">
      <div className="section-padding relative z-10">
        <div className="section-container">
          {/* Header */}
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-terracotta/50 font-body font-semibold">
              Descubre nuestra propuesta
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brown-dark">
              Nuestra <span className="gradient-text-terracotta">Carta</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-text-medium font-body text-base">
              Fusión de sabores de tres cocinas con productos de primera calidad
            </p>
          </AnimatedSection>

          {/* Categories */}
          <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-2 mb-6">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-terracotta text-cream shadow-md'
                  : 'bg-brown-dark/5 text-text-medium hover:bg-brown-dark/10 hover:text-brown-dark'
              }`}
            >
              Todos
            </button>
            {categories.filter(c => c.id !== 'all').map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-terracotta text-cream shadow-md'
                    : 'bg-brown-dark/5 text-text-medium hover:bg-brown-dark/10 hover:text-brown-dark'
                }`}
              >
                <span className="mr-1.5">{cat.emoji}</span>
                {cat.label}
              </button>
            ))}
          </AnimatedSection>

          {/* Filters */}
          <AnimatedSection delay={0.15} className="flex flex-wrap justify-center gap-2 mb-10">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-4 py-2 rounded-lg text-xs font-body font-medium uppercase tracking-wider transition-all duration-300 border ${
                  activeFilter === opt.id
                    ? 'border-terracotta/30 bg-terracotta/5 text-terracotta'
                    : 'border-brown-dark/10 text-text-light hover:border-brown-dark/20 hover:text-text-medium'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </AnimatedSection>

          {/* Menu grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="menu-item bg-brown-dark/[0.02] rounded-2xl border border-brown-dark/[0.04] hover:border-terracotta/15 p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display text-base sm:text-lg font-semibold text-brown-dark truncate">
                          {item.name}
                        </h3>
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={tag === 'sin-gluten' ? 'tag-gluten' : 'tag-veggie'}
                          >
                            {tag === 'sin-gluten' ? 'SG' : 'V'}
                          </span>
                        ))}
                      </div>
                      <p className="mt-2 text-sm font-body leading-relaxed text-text-light">
                        {item.description}
                      </p>
                    </div>
                    <span className="font-display text-lg font-bold text-terracotta whitespace-nowrap">
                      {item.price}€
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Note */}
          <AnimatedSection delay={0.2} className="mt-10 text-center">
            <p className="text-xs text-text-light font-body">
              Los precios pueden variar. Consulta con nuestro personal sobre posibles alérgenos.
              SG = Sin gluten · V = Vegetariano
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
