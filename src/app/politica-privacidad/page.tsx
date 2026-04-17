import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad – En Las Nubes Restobar',
  description: 'Política de privacidad y protección de datos de En Las Nubes Restobar.',
}

export default function PoliticaPrivacidad() {
  return (
    <main className="min-h-screen bg-sky-deep pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-gold/60 hover:text-gold transition-colors font-body">← Volver al inicio</Link>
        <h1 className="mt-6 font-display text-3xl sm:text-4xl font-bold text-cream">Política de Privacidad</h1>
        <p className="mt-2 text-xs text-cream/30 font-body">Última actualización: abril 2026</p>
        <div className="mt-10 space-y-8 text-sm text-cream/50 font-body leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-cream mb-3">1. Responsable del Tratamiento</h2>
            <ul className="space-y-1 pl-4 list-none">
              <li><strong className="text-cream/70">Nombre:</strong> En Las Nubes Restobar</li>
              <li><strong className="text-cream/70">Dirección:</strong> C/ María Teresa Gil de Gárate, 16, Bajo, 26002 Logroño</li>
              <li><strong className="text-cream/70">Teléfono:</strong> +34 941 57 84 51</li>
              <li><strong className="text-cream/70">Correo electrónico:</strong> info@enlasnubesrestobar.net</li>
            </ul>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-cream mb-3">2. Datos que Recopilamos</h2>
            <p>Solo recopilamos datos que nos proporciona voluntariamente: nombre, teléfono, correo electrónico, datos de reserva y mensajes de comunicación.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-cream mb-3">3. Finalidad del Tratamiento</h2>
            <ul className="list-disc pl-5 space-y-1"><li>Gestión de reservas</li><li>Responder a consultas</li><li>Mejora del servicio</li><li>Cumplimiento legal</li></ul>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-cream mb-3">4. Sus Derechos</h2>
            <p>Acceso, rectificación, supresión, limitación, portabilidad, oposición y revocación del consentimiento. Para ejercerlos, contacte por los canales indicados. Respuesta en el plazo máximo de un mes.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-cream mb-3">5. Reclamaciones</h2>
            <p>Si considera que sus derechos han sido vulnerados, puede presentar una reclamación ante la <strong className="text-cream/70">Agencia Española de Protección de Datos (AEPD)</strong>: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-gold/60 underline hover:text-gold">www.aepd.es</a></p>
          </section>
        </div>
      </div>
    </main>
  )
}
