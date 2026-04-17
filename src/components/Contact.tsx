'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Reserva:', form)
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  const todayIndex = dayMap[today]

  return (
    <section id="contacto" className="section-cream relative py-24 sm:py-32">
      <div className="section-padding relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-terracotta/50 font-body font-semibold">
            Estamos en el corazón de Logroño
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brown-dark">
            Ven a <span className="gradient-text-terracotta">Visitarnos</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Info + Schedule */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection direction="left">
              <div className="space-y-4">
                <a href="https://www.google.com/maps/dir/?api=1&destination=Calle+Maria+Teresa+Gil+de+Gárate+16+26002+Logroño" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-2xl bg-brown-dark/[0.02] border border-brown-dark/[0.04] hover:border-terracotta/15 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-terracotta/10 flex items-center justify-center shrink-0"><i className="fas fa-map-marker-alt text-terracotta" /></div>
                  <div>
                    <p className="font-body font-semibold text-brown-dark text-sm">Dirección</p>
                    <p className="text-sm text-text-light font-body mt-0.5">C/ María Teresa Gil de Gárate, 16, Bajo<br />26002 Logroño, La Rioja</p>
                  </div>
                </a>
                <a href="tel:+34941578451" className="flex items-start gap-4 p-4 rounded-2xl bg-brown-dark/[0.02] border border-brown-dark/[0.04] hover:border-terracotta/15 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-terracotta/10 flex items-center justify-center shrink-0"><i className="fas fa-phone text-terracotta" /></div>
                  <div>
                    <p className="font-body font-semibold text-brown-dark text-sm">Teléfono</p>
                    <p className="text-sm text-text-light font-body mt-0.5">+34 941 57 84 51</p>
                  </div>
                </a>
                <a href="mailto:info@enlasnubesrestobar.net" className="flex items-start gap-4 p-4 rounded-2xl bg-brown-dark/[0.02] border border-brown-dark/[0.04] hover:border-terracotta/15 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-terracotta/10 flex items-center justify-center shrink-0"><i className="fas fa-envelope text-terracotta" /></div>
                  <div>
                    <p className="font-body font-semibold text-brown-dark text-sm">Email</p>
                    <p className="text-sm text-text-light font-body mt-0.5">info@enlasnubesrestobar.net</p>
                  </div>
                </a>
                <a href="https://wa.me/34941578451?text=Hola%2C%20me%20gustar%C3%ADa%20reservar%20en%20En%20Las%20Nubes%20Restobar." target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-2xl bg-green-50 border border-green-200/60 hover:border-green-300 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0"><i className="fab fa-whatsapp text-green-600" /></div>
                  <div>
                    <p className="font-body font-semibold text-brown-dark text-sm">WhatsApp</p>
                    <p className="text-sm text-text-light font-body mt-0.5">Escríbenos directamente</p>
                  </div>
                </a>
              </div>
            </AnimatedSection>

            {/* Schedule */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="p-5 rounded-2xl bg-brown-dark/[0.02] border border-brown-dark/[0.04]">
                <div className="flex items-center gap-2 mb-4">
                  <i className="fas fa-clock text-terracotta" />
                  <h3 className="font-display font-semibold text-brown-dark text-base">Horario Semanal</h3>
                </div>
                <div className="space-y-2">
                  {schedule.map((item, i) => (
                    <div key={item.day} className={`flex items-center justify-between py-2 px-3 rounded-lg text-sm font-body transition-colors ${i === todayIndex ? 'bg-terracotta/10 border border-terracotta/15' : ''}`}>
                      <span className={`font-medium ${i === todayIndex ? 'text-terracotta' : item.closed ? 'text-text-light/30' : 'text-text-medium'}`}>
                        {item.day}
                        {i === todayIndex && <span className="ml-2 text-[10px] uppercase tracking-wider text-terracotta/60 font-semibold">Hoy</span>}
                      </span>
                      <span className={item.closed ? 'text-text-light/25 italic' : 'text-text-light'}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[11px] text-text-light/30 font-body leading-relaxed">
                  Los viernes noche, sábados y domingos al mediodía disponemos de dos turnos por servicio. Consulta disponibilidad llamando al restaurante.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Map + Form */}
          <div className="lg:col-span-3 space-y-8">
            <AnimatedSection direction="right">
              <div className="rounded-3xl overflow-hidden border border-brown-dark/[0.06] shadow-lg h-64 sm:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.5!2d-2.447!3d42.4635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5b3a0c0b0b0b0b%3A0x0!2sCalle+Maria+Teresa+Gil+de+G%C3%A1rate+16%2C+26002+Logro%C3%B1o!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de En Las Nubes Restobar"
                />
              </div>
            </AnimatedSection>

            {/* Reservation form */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="p-6 sm:p-8 rounded-3xl bg-brown-dark/[0.02] border border-brown-dark/[0.04]">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-brown-dark mb-6">Reservar Mesa</h3>

                {sent ? (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-10">
                    <span className="text-4xl block mb-4">✅</span>
                    <p className="font-display text-lg text-brown-dark font-semibold">Solicitud enviada</p>
                    <p className="text-sm text-text-light font-body mt-2">Nos pondremos en contacto contigo para confirmar la reserva.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-body font-medium text-text-light uppercase tracking-wider mb-1.5">Nombre *</label>
                        <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/60 border border-brown-dark/10 text-brown-dark font-body text-sm placeholder:text-text-light/50 focus:outline-none focus:border-terracotta/30 focus:ring-2 focus:ring-terracotta/10 transition-all" placeholder="Tu nombre" />
                      </div>
                      <div>
                        <label className="block text-xs font-body font-medium text-text-light uppercase tracking-wider mb-1.5">Teléfono *</label>
                        <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/60 border border-brown-dark/10 text-brown-dark font-body text-sm placeholder:text-text-light/50 focus:outline-none focus:border-terracotta/30 focus:ring-2 focus:ring-terracotta/10 transition-all" placeholder="600 000 000" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-body font-medium text-text-light uppercase tracking-wider mb-1.5">Email</label>
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/60 border border-brown-dark/10 text-brown-dark font-body text-sm placeholder:text-text-light/50 focus:outline-none focus:border-terracotta/30 focus:ring-2 focus:ring-terracotta/10 transition-all" placeholder="tu@email.com" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-body font-medium text-text-light uppercase tracking-wider mb-1.5">Fecha *</label>
                        <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/60 border border-brown-dark/10 text-brown-dark font-body text-sm focus:outline-none focus:border-terracotta/30 focus:ring-2 focus:ring-terracotta/10 transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-body font-medium text-text-light uppercase tracking-wider mb-1.5">Hora *</label>
                        <select required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/60 border border-brown-dark/10 text-brown-dark font-body text-sm focus:outline-none focus:border-terracotta/30 focus:ring-2 focus:ring-terracotta/10 transition-all">
                          <option value="">--:--</option>
                          {['13:00','13:30','14:00','14:30','15:00','20:00','20:30','21:00','21:30','22:00'].map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-body font-medium text-text-light uppercase tracking-wider mb-1.5">Personas *</label>
                        <select required value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/60 border border-brown-dark/10 text-brown-dark font-body text-sm focus:outline-none focus:border-terracotta/30 focus:ring-2 focus:ring-terracotta/10 transition-all">
                          <option value="">-</option>
                          {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                          <option value="10+">10+</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-body font-medium text-text-light uppercase tracking-wider mb-1.5">Comentarios</label>
                      <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/60 border border-brown-dark/10 text-brown-dark font-body text-sm placeholder:text-text-light/50 focus:outline-none focus:border-terracotta/30 focus:ring-2 focus:ring-terracotta/10 transition-all resize-none" placeholder="Alergias, sillas para niños, preferencias..." />
                    </div>
                    <p className="text-[10px] text-text-light/30 font-body leading-relaxed">
                      Al enviar este formulario, aceptas nuestra política de privacidad. Tus datos se usarán exclusivamente para gestionar tu reserva.
                    </p>
                    <button type="submit" className="btn-primary w-full text-sm py-4">Enviar Solicitud de Reserva</button>
                    <p className="text-center text-xs text-text-light/30 font-body">
                      O reserva al instante: <a href="tel:+34941578451" className="text-terracotta/60 underline hover:text-terracotta transition-colors">llama al 941 57 84 51</a> o por <a href="https://wa.me/34941578451" target="_blank" rel="noopener noreferrer" className="text-green-600/70 underline hover:text-green-600 transition-colors">WhatsApp</a>
                    </p>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
