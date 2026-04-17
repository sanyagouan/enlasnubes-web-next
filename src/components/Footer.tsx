import Link from 'next/link'

const navLinks = [
  { label: 'Nosotros', href: '#about' },
  { label: 'Especialidades', href: '#specialties' },
  { label: 'Carta', href: '#menu' },
  { label: 'Galería', href: '#gallery' },
  { label: 'Opiniones', href: '#reviews' },
  { label: 'Contacto', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0f0f1a] relative overflow-hidden">
      <div className="py-16 sm:py-20">
        <div className="section-padding relative z-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Logo */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block">
                <span className="font-display text-2xl font-bold text-cream">En Las <span className="italic text-gold">Nubes</span></span><br />
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold/50 font-body">Restobar · Logroño</span>
              </Link>
              <p className="mt-4 text-sm text-cream/30 font-body leading-relaxed max-w-xs">
                Cocina fusión asturiana, alemana y mediterránea en pleno centro de Logroño.
              </p>
              <div className="mt-5 flex gap-3">
                <a href="https://www.instagram.com/enlasnubes_restobar/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-cream/40 hover:text-cream transition-colors" aria-label="Instagram"><i className="fab fa-instagram" /></a>
                <a href="https://www.facebook.com/enlasNubesRestobar" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-cream/40 hover:text-cream transition-colors" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                <a href="https://www.tripadvisor.es/Restaurant_Review-g187513-d8531456-Reviews-En_las_Nubes_Restobar-Logrono_La_Rioja.html" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-cream/40 hover:text-cream transition-colors" aria-label="TripAdvisor"><i className="fab fa-tripadvisor" /></a>
              </div>
            </div>
            {/* Nav */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold/50 font-body font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2">{navLinks.map(l => <li key={l.href}><Link href={l.href} className="text-sm text-cream/35 hover:text-cream/70 transition-colors font-body">{l.label}</Link></li>)}</ul>
            </div>
            {/* Contacto */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold/50 font-body font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li><a href="tel:+34941578451" className="text-sm text-cream/35 hover:text-cream/70 transition-colors font-body">941 57 84 51</a></li>
                <li><span className="text-sm text-cream/35 font-body">C/ María Teresa Gil de Gárate, 16</span></li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gold/50 font-body font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/aviso-legal" className="text-sm text-cream/35 hover:text-cream/70 transition-colors font-body">Aviso Legal</Link></li>
                <li><Link href="/politica-privacidad" className="text-sm text-cream/35 hover:text-cream/70 transition-colors font-body">Política de Privacidad</Link></li>
                <li><Link href="/politica-cookies" className="text-sm text-cream/35 hover:text-cream/70 transition-colors font-body">Política de Cookies</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-5">
        <div className="section-padding flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/20 font-body">© {new Date().getFullYear()} En Las Nubes Servicios Hosteleros S.L.U.</p>
          <p className="text-xs text-cream/15 font-body">Hecho con ♥ en Logroño</p>
        </div>
      </div>
    </footer>
  )
}
