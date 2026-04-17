export interface Review {
  id: number
  text: string
  name: string
  initials: string
  rating: number
  platform: 'Google' | 'TripAdvisor' | 'Uber Eats'
}

// Reseñas extraídas de la web actual (index.html)
export const reviews: Review[] = [
  {
    id: 1,
    text: 'El cachopo de cecina y queso de cabra es una pasada. La carne es súper suave y se corta con nada, además el empanado es crujiente a más no poder. El flan de Bailey\'s es simplemente una delicia.',
    name: 'María G.',
    initials: 'MG',
    rating: 5,
    platform: 'Google',
  },
  {
    id: 2,
    text: 'Un sitio tranquilo, agradable y bonito donde disfrutar de una buena comilona con amigos. Tienen cachopos incluso sin gluten. El servicio es de lujo, con gente muy amable y atenta.',
    name: 'Carlos R.',
    initials: 'CR',
    rating: 5,
    platform: 'Google',
  },
  {
    id: 3,
    text: 'Ambiente genial con terraza perfecta. Las raciones son generosas y el personal es un encanto. Buena cena por 20-30€ por persona. Recomiendo hacer reserva.',
    name: 'Ana L.',
    initials: 'AL',
    rating: 5,
    platform: 'TripAdvisor',
  },
]

export const statsByPlatform: Record<string, { rating: number; count: number }> = {
  google: { rating: 4.3, count: 1585 },
  uberEats: { rating: 4.7, count: 270 },
  tripAdvisor: { rating: 3.7, count: 171 },
}

export const priceRange = '20-30€'
