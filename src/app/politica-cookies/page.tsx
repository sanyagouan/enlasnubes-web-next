import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies – En Las Nubes Restobar',
  description: 'Información sobre el uso de cookies en el sitio web de En Las Nubes Restobar.',
}

export default function PoliticaCookies() {
  return (
    <main className="min-h-screen bg-sky-deep pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-gold/60 hover:text-gold transition-colors font-body">← Volver al inicio</Link>
        <h1 className="mt-6 font-display text-3xl sm:text-4xl font-bold text-cream">Política de Cookies</h1>
        <p className="mt-2 text-xs text-cream/30 font-body">Última actualización: abril 2026</p>
        <div className="mt-10 space-y-8 text-sm text-cream/50 font-body leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-cream mb-3">1. ¿Qué son las Cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-cream mb-3">2. Cookies que Utilizamos</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-white/10">
                <thead><tr className="border-b border-white/10"><th className="text-left py-2 px-3 text-cream/60 font-semibold">Cookie</th><th className="text-left py-2 px-3 text-cream/60 font-semibold">Finalidad</th><th className="text-left py-2 px-3 text-cream/60 font-semibold">Duración</th></tr></thead>
                <tbody>
                  <tr className="border-b border-white/5"><td className="py-2 px-3 font-mono">cookies_accepted</td><td className="py-2 px-3">Preferencia del usuario</td><td className="py-2 px-3">1 año</td></tr>
                  <tr className="border-b border-white/5"><td className="py-2 px-3">Google Fonts</td><td className="py-2 px-3">Carga de tipografías</td><td className="py-2 px-3">Sesión</td></tr>
                  <tr><td className="py-2 px-3">Google Maps</td><td className="py-2 px-3">Mapa de ubicación</td><td className="py-2 px-3">Variable</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-cream/30 italic">No utilizamos cookies de análisis, publicidad comportamental ni de seguimiento.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-cream mb-3">3. Cómo Gestionar las Cookies</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-cream/70">Chrome:</strong> Configuración → Privacidad → Cookies</li>
              <li><strong className="text-cream/70">Firefox:</strong> Opciones → Privacidad → Cookies</li>
              <li><strong className="text-cream/70">Safari:</strong> Preferencias → Privacidad → Cookies</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
