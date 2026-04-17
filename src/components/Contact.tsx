'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

// Horario real extraído de la web actual
const schedule = [
  { day: 'Lunes', hours: 'Cerrado', closed: true },
  { day: 'Martes', hours: '13:00 – 17:00' },
  { day: 'Miércoles', hours: '13:00 – 17:00' },
  { day: 'Jueves', hours: '13:00 – 17:00' },
  { day: 'Viernes', hours: '13:00 – 17:00 · 20:00 – 00:30' },
  { day: 'Sábado', hours: '13:00 – 17:30 · 20:00 – 01:00' },
  { day: 'Domingo', hours: '13:00 – 17:00' },
]

const today = new Date().getDay()
const dayMap: Record<number, number> = { 0: 6, 1: 0, 2: 1, 3: 2, 4: 3, 5: 4, 6: 5 }

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', time: '', guests: '', message: '' })
  const [sent, setSent] = useState(false)
  const todayIndex = dayMap[today]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Reserva:', form)
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="section-cream relative py-24 sm:py-32">
      <div className="section-padding">
        <AnimatedSection className="text-center mb-16">
          <div className="label">
            <svg viewBox="0 0 40 24" fill="none" style={{ width: '18px', height: '12px', display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}>
              <path d="M8,20 C4.5,20 2,17.5 2,14.5 C2,11.8 4,9.6 6.5,9.2 C6.8,6.2 9.4,4 12.5,4 C14.8,4 16.8,5.2 17.8,7 C18.5,6.4 19.5,6 20.5,6 C22.8,6 24.7,7.8 24.8,10.2 C27.2,10.6 29,12.6 29,15 C29,17.8 26.8,20 24,20 Z" fill="currentColor" opacity="0.5" />
            </svg>
            <span className="text-xs uppercase tracking-[0.3em] text-terracotta/50 font-body font-semibold">Ven a visitarnos</span>
          </div>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brown-dark">Contacto</h2>
          <p className="mt-3 text-text-medium font-body">Estamos en el corazón de Logroño</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info + Horario */}
          <AnimatedSection direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-lg font-semibold text-brown-dark mb-4">Encuéntranos</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-terracotta/10 flex items-center justify-center shrink-0"><i className="fas fa-map-marker-alt text-terracotta text-sm" /></div>
                    <div><h4 className="font-body font-semibold text-brown-dark text-sm">Dirección</h4><p className="text-sm text-text-light font-body">C/ María Teresa Gil de Gárate, 16, Bajo<br />26002 Logroño, La Rioja</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-terracotta/10 flex items-center justify-center shrink-0"><i className="fas fa-phone text-terracotta text-sm" /></div>
                    <div><h4 className="font-body font-semibold text-brown-dark text-sm">Teléfono</h4><a href="tel:+34941578451" className="text-sm text-terracotta font-body hover:underline">+34 941 57 84 51</a></div>
                  </div>
                </div>
              </div>

              {/* Horario */}
              <div className="p-5 rounded-2xl bg-brown-dark/[0.02] border border-brown-dark/[0.04]">
                <h4 className="flex items-center gap-2 font-display font-semibold text-brown-dark text-sm mb-3">
                  <i className="fas fa-calendar-alt text-terracotta text-xs" /> Horario Semanal
                </h4>
                <div className="space-y-1.5">
                  {schedule.map((item, i) => (
                    <div key={item.day} className={`flex justify-between py-1.5 px-3 rounded text-sm font-body ${i === todayIndex ? 'bg-terracotta/10 font-medium' : ''}`}>
                      <span className={i === todayIndex ? 'text-terracotta' : item.closed ? 'text-text-light/40' : 'text-text-medium'}>{item.day}{i === todayIndex && ' · Hoy'}</span>
                      <span className={item.closed ? 'text-text-light/30 italic' : 'text-text-light'}>{item.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-[11px] text-text-light/40 font-body leading-relaxed">
                  <i className="fas fa-info-circle mr-1" />Los viernes noche, sábados y domingos al mediodía disponemos de dos turnos por servicio debido a la alta demanda. Consulta disponibilidad llamando al restaurante.
                </p>
              </div>

              {/* Redes */}
              <div className="flex gap-3">
                <a href="https://www.instagram.com/enlasnubes_restobar/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-brown-dark/5 flex items-center justify-center text-text-light hover:text-terracotta transition-colors" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                <a href="https://www.facebook.com/enlasNubesRestobar" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-brown-dark/5 flex items-center justify-center text-text-light hover:text-terracotta transition-colors" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                <a href="https://www.tripadvisor.es/Restaurant_Review-g187513-d8531456-Reviews-En_las_Nubes_Restobar-Logrono_La_Rioja.html" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-brown-dark/5 flex items-center justify-center text-text-light hover:text-terracotta transition-colors" aria-label="TripAdvisor"><i className="fab fa-tripadvisor" /></a>
                <a href="https://www.ubereats.com/es/store/en-las-nubes-restobar/wep1Cog2SfSkmRSK2rJrzg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600 hover:text-green-700 transition-colors" aria-label="Uber Eats"><i className="fab fa-ubisoft" /></a>
              </div>
            </div>
          </AnimatedSection>

          {/* Mapa + Formulario */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden border border-brown-dark/[0.06] shadow-warm h-56 sm:h-64">
                <iframe src="https://maps.google.com/maps?q=En+Las+Nubes+Restobar,+C%2F+Mar%C3%ADa+Teresa+Gil+de+G%C3%A1rate+16,+26002+Logro%C3%B1o,+La+Rioja&t=&z=17&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación En Las Nubes Restobar" />
              </div>

              <div className="p-6 rounded-2xl bg-brown-dark/[0.02] border border-brown-dark/[0.04]">
                <h3 className="font-display text-lg font-bold text-brown-dark mb-5">Reservar Mesa</h3>
                {sent ? (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
                    <span className="text-3xl block mb-3">✅</span>
                    <p className="font-display text-brown-dark font-semibold">Solicitud enviada</p>
                    <p className="text-sm text-text-light font-body mt-2">Nos pondremos en contacto contigo para confirmar.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Nombre *" className="w-full px-3 py-2.5 rounded-lg bg-white/60 border border-brown-dark/10 text-brown-dark font-body text-sm placeholder:text-text-light/40 focus:outline-none focus:border-terracotta/30 transition-all" />
                      <input type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="Teléfono *" className="w-full px-3 py-2.5 rounded-lg bg-white/60 border border-brown-dark/10 text-brown-dark font-body text-sm placeholder:text-text-light/40 focus:outline-none focus:border-terracotta/30 transition-all" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <input type="date" required value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-white/60 border border-brown-dark/10 text-brown-dark font-body text-sm focus:outline-none focus:border-terracotta/30 transition-all" />
                      <select required value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-white/60 border border-brown-dark/10 text-brown-dark font-body text-sm focus:outline-none focus:border-terracotta/30 transition-all">
                        <option value="">Hora</option>
                        {['13:00','13:30','14:00','14:30','15:00','20:00','20:30','21:00','21:30','22:00'].map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <select required value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} className="w-full px-3 py-2.5 rounded-lg bg-white/60 border border-brown-dark/10 text-brown-dark font-body text-sm focus:outline-none focus:border-terracotta/30 transition-all">
                        <option value="">Personas</option>
                        {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                        <option value="10+">10+</option>
                      </select>
                    </div>
                    <textarea rows={2} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Comentarios (alergias, preferencias...)" className="w-full px-3 py-2.5 rounded-lg bg-white/60 border border-brown-dark/10 text-brown-dark font-body text-sm placeholder:text-text-light/40 focus:outline-none focus:border-terracotta/30 transition-all resize-none" />
                    <button type="submit" className="btn-primary w-full text-sm py-3">Enviar Solicitud de Reserva</button>
                    <p className="text-center text-xs text-text-light/40 font-body">
                      O llama al <a href="tel:+34941578451" className="text-terracotta/60 underline">941 57 84 51</a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
