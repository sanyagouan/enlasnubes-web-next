import Link from 'next/link'

const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Carta', href: '#carta' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="section-darker relative overflow-hidden">
      <CloudDivider variant="light-to-dark" />
      <div className="py-16 sm:py-20">
        <div className="section-padding relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Logo */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block">
                <span className="font-display text-2xl font-bold text-cream">
                  En Las <span className="gradient-text-gold">Nubes</span>
                </span><br />
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold/50 font-body">Restobar · Logroño</span>
              </Link>
              <p className="mt-4 text-sm text-cream/30 font-body leading-relaxed max-w-xs">
                Cocina fusión en pleno centro de Logroño. Asturiana, alemana y mediterránea en un ambiente único. Especialistas en cachopos.
              </p>
              <div className="mt-6 flex gap-3">
                {[
                  { icon: 'fab fa-instagram', href: 'https://www.instagram.com/enlasnubes_restobar/', label: 'Instagram' },
                  { icon: 'fab fa-facebook', href: 'https://www.facebook.com/enlasnubesrestobar/', label: 'Facebook' },
                  { icon: 'fab fa-tripadvisor', href: 'https://www.tripadvisor.es/Restaurant_Review-g187513-d8531456-Reviews-En_las_Nubes_Restobar-Logrono_La_Rioja.html', label: 'TripAdvisor' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center text-cream/40 hover:text-cream hover:bg-white/10 transition-all" aria-label={s.label}>
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold/50 font-body font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2.5">
                {navLinks.map(link => (
                  <li key={link.href}><Link href={link.href} className="text-sm text-cream/35 hover:text-cream/70 transition-colors font-body">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold/50 font-body font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2.5">
                <li><a href="tel:+34941578451" className="text-sm text-cream/35 hover:text-cream/70 transition-colors font-body">941 57 84 51</a></li>
                <li><a href="mailto:info@enlasnubesrestobar.net" className="text-sm text-cream/35 hover:text-cream/70 transition-colors font-body">info@enlasnubesrestobar.net</a></li>
                <li><a href="https://www.google.com/maps/dir/?api=1&destination=Calle+Maria+Teresa+Gil+de+Gárate+16+26002+Logroño" target="_blank" rel="noopener noreferrer" className="text-sm text-cream/35 hover:text-cream/70 transition-colors font-body">C/ María Teresa Gil de Gárate, 16</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold/50 font-body font-semibold mb-4">Legal</h4>
              <ul className="space-y-2.5">
                <li><Link href="/aviso-legal" className="text-sm text-cream/35 hover:text-cream/70 transition-colors font-body">Aviso Legal</Link></li>
                <li><Link href="/politica-privacidad" className="text-sm text-cream/35 hover:text-cream/70 transition-colors font-body">Política de Privacidad</Link></li>
                <li><Link href="/politica-cookies" className="text-sm text-cream/35 hover:text-cream/70 transition-colors font-body">Política de Cookies</Link></li>
              </ul>
              <div className="mt-6">
                <a href="https://www.ubereats.com/es/store/en-las-nubes-restobar/wep1Cog2SfSkmRSK2rJrzg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-500/10 border border-green-500/15 text-green-400 text-xs font-body font-medium hover:bg-green-500/15 transition-all">
                  Pedir en Uber Eats <i className="fas fa-external-link-alt text-[10px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6">
        <div className="section-padding flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/20 font-body">© {new Date().getFullYear()} En Las Nubes Servicios Hosteleros S.L.U. Todos los derechos reservados.</p>
          <p className="text-xs text-cream/15 font-body">Hecho con ♥ en Logroño</p>
        </div>
      </div>
    </footer>
  )
}

function CloudDivider({ variant }: { variant: 'light-to-dark' }) {
  return (
    <div className="relative w-full overflow-hidden leading-[0] -mb-1">
      <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="relative w-full h-20 sm:h-28">
        <path d="M0,100 C120,70 240,120 420,85 C540,65 660,110 840,80 C960,60 1080,95 1200,75 C1320,55 1380,80 1440,65 L1440,140 L0,140 Z" fill="#0f0f1a" opacity="0.5" />
        <path d="M0,120 C180,95 360,130 540,105 C720,80 900,120 1080,100 C1200,85 1350,110 1440,95 L1440,140 L0,140 Z" fill="#0f0f1a" opacity="0.8" />
        <rect x="0" y="120" width="1440" height="20" fill="#0f0f1a" />
      </svg>
    </div>
  )
}
