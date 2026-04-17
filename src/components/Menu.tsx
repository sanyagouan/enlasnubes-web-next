'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { menuItems, categories, type MenuCategory, type Tag } from '@/data/menu'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all')
  const [activeFilter, setActiveFilter] = useState<Tag | 'all'>('all')

  const filtered = menuItems.filter(item => {
    const catMatch = activeCategory === 'all' || item.category === activeCategory
    const filterMatch = activeFilter === 'all' || item.tags.includes(activeFilter)
    return catMatch && filterMatch
  })

  return (
    <section id="menu" className="section-cream relative py-24 sm:py-32">
      <div className="section-padding">
        <AnimatedSection className="text-center mb-12">
          <div className="label">
            <svg viewBox="0 0 40 24" fill="none" style={{ width: '18px', height: '12px', display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}>
              <path d="M8,20 C4.5,20 2,17.5 2,14.5 C2,11.8 4,9.6 6.5,9.2 C6.8,6.2 9.4,4 12.5,4 C14.8,4 16.8,5.2 17.8,7 C18.5,6.4 19.5,6 20.5,6 C22.8,6 24.7,7.8 24.8,10.2 C27.2,10.6 29,12.6 29,15 C29,17.8 26.8,20 24,20 Z" fill="currentColor" opacity="0.5" />
            </svg>
            <span className="text-xs uppercase tracking-[0.3em] text-terracotta/50 font-body font-semibold">Nuestra propuesta</span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brown-dark">Carta</h2>
        </AnimatedSection>

        {/* Categorías */}
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-2 mb-6">
          <button onClick={() => setActiveCategory('all')} className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all ${activeCategory === 'all' ? 'bg-terracotta text-cream shadow-md' : 'bg-brown-dark/5 text-text-medium hover:bg-brown-dark/10'}`}>Todos</button>
          {categories.map(cat => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-4 py-2 rounded-full text-sm font-body font-medium transition-all ${activeCategory === cat.id ? 'bg-terracotta text-cream shadow-md' : 'bg-brown-dark/5 text-text-medium hover:bg-brown-dark/10'}`}>
              <span className="mr-1">{cat.emoji}</span>{cat.label}
            </button>
          ))}
        </AnimatedSection>

        {/* Filtros dietéticos */}
        <AnimatedSection delay={0.15} className="flex flex-wrap justify-center gap-2 mb-8">
          {[{ id: 'all' as const, label: 'Todos' }, { id: 'sin-gluten' as const, label: 'Sin gluten' }, { id: 'vegetariano' as const, label: 'Vegetariano' }].map(opt => (
            <button key={opt.id} onClick={() => setActiveFilter(opt.id)} className={`px-3 py-1.5 rounded-lg text-xs font-body font-medium uppercase tracking-wider transition-all border ${activeFilter === opt.id ? 'border-terracotta/30 bg-terracotta/5 text-terracotta' : 'border-brown-dark/10 text-text-light hover:border-brown-dark/20'}`}>
              {opt.label}
            </button>
          ))}
        </AnimatedSection>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id} layout
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="flex items-start justify-between gap-3 p-4 rounded-xl bg-brown-dark/[0.02] border border-brown-dark/[0.04] hover:border-terracotta/10 transition-all"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-display text-sm sm:text-base font-semibold text-brown-dark">{item.name}</h4>
                    {item.tags.map(tag => (
                      <span key={tag} className={tag === 'sin-gluten' ? 'tag-gluten' : 'tag-veggie'}>
                        {tag === 'sin-gluten' ? 'SG' : 'V'}
                      </span>
                    ))}
                  </div>
                  <p className="mt-1 text-xs sm:text-sm font-body text-text-light leading-relaxed">{item.description}</p>
                </div>
                <span className="font-display text-base sm:text-lg font-bold text-terracotta whitespace-nowrap">{item.price}€</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-8 text-center text-xs text-text-light/40 font-body">
          SG = Sin gluten · V = Vegetariano · Consulta con nuestro personal sobre alérgenos
        </p>
      </div>
    </section>
  )
}
