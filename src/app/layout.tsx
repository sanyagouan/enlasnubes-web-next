import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'En Las Nubes Restobar | Cocina Fusión en Logroño',
  description: 'Restobar en pleno centro de Logroño. Cocina fusión asturiana, alemana y mediterránea. Especialistas en cachopos. Terraza, ambiente vintage. Reserva ahora.',
  keywords: 'restobar logroño, cachopo logroño, cocina fusión, restaurante logroño, en las nubes',
  openGraph: {
    title: 'En Las Nubes Restobar | Cocina Fusión en Logroño',
    description: 'Restobar en pleno centro de Logroño. Cocina fusión asturiana, alemana y mediterránea. Especialistas en cachopos.',
    url: 'https://enlasnubesrestobar.net',
    siteName: 'En Las Nubes Restobar',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
