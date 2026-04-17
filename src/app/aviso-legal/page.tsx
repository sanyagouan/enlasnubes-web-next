import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal – En Las Nubes Restobar',
  description: 'Aviso legal de En Las Nubes Servicios Hosteleros S.L.U.',
}

export default function AvisoLegal() {
  return (
    <main className="min-h-screen bg-sky-deep pt-28 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-sm text-gold/60 hover:text-gold transition-colors font-body">← Volver al inicio</Link>
        <h1 className="mt-6 font-display text-3xl sm:text-4xl font-bold text-cream">Aviso Legal</h1>
        <p className="mt-2 text-xs text-cream/30 font-body">Última actualización: abril 2026</p>
        <div className="mt-10 space-y-8 text-sm text-cream/50 font-body leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-cream mb-3">1. Datos Identificativos</h2>
            <ul className="mt-3 space-y-1 pl-4 list-none">
              <li><strong className="text-cream/70">Denominación:</strong> En Las Nubes Servicios Hosteleros S.L.U.</li>
              <li><strong className="text-cream/70">NIF/CIF:</strong> B75413401</li>
              <li><strong className="text-cream/70">Domicilio social:</strong> C/ María Teresa Gil de Gárate, 16, Bajo, 26002 Logroño, La Rioja</li>
              <li><strong className="text-cream/70">Teléfono:</strong> +34 941 57 84 51</li>
              <li><strong className="text-cream/70">Correo electrónico:</strong> info@enlasnubesrestobar.net</li>
              <li><strong className="text-cream/70">Sitio web:</strong> https://enlasnubesrestobar.net</li>
            </ul>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-cream mb-3">2. Objeto</h2>
            <p>Este sitio web tiene como finalidad ofrecer información sobre el restaurante En Las Nubes Restobar, sus servicios, carta, localización y facilitar el contacto con el establecimiento para la realización de reservas.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-cream mb-3">3. Condiciones de Uso</h2>
            <p>El acceso a este sitio web es gratuito y no requiere registro previo. Queda prohibido utilizar el sitio web para fines ilícitos, reproducir o distribuir contenidos sin autorización, o realizar acciones que puedan dañar el sitio web.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-cream mb-3">4. Propiedad Intelectual e Industrial</h2>
            <p>Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, diseño gráfico y código fuente, constituyen una obra cuya propiedad pertenece a En Las Nubes Servicios Hosteleros S.L.U.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-cream mb-3">5. Exención de Responsabilidad</h2>
            <p>En Las Nubes Restobar no se hace responsable de los posibles daños derivados del uso de la información contenida en este sitio web, ni de los contenidos de los enlaces a sitios web de terceros.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-cream mb-3">6. Legislación Aplicable y Jurisdicción</h2>
            <p>Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales de Logroño (La Rioja), renunciando expresamente a cualquier otro fuero.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
