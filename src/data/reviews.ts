export interface Review {
  id: number
  text: string
  name: string
  initials: string
  rating: number
  platform: 'Google' | 'uberEats' | 'tripAdvisor'
}

export interface Stats {
  rating: number
  count: number
  url: string
}

export const reviews: Review[] = [
  {
    id: 1,
    text: "Los mejores cachopos de Logroño, sin duda. El ambiente es acogedor y el servicio excelente. Volveremos seguro.",
    name: "Carlos M.",
    initials: "CM",
    rating: 5,
    platform: "Google",
  },
  {
    id: 2,
    text: "Descubrimos este sitio por casualidad y fue una gran sorpresa. La fusión de cocinas es original y todo estaba riquísimo.",
    name: "Laura G.",
    initials: "LG",
    rating: 5,
    platform: "Google",
  },
  {
    id: 3,
    text: "Pedimos delivery por Uber Eats y llegó perfecto. El cachopo bacon carbonara es una locura. Muy recomendable.",
    name: "Miguel R.",
    initials: "MR",
    rating: 5,
    platform: "uberEats",
  },
  {
    id: 4,
    text: "Buen sitio en el centro de Logroño. Las patatas bravas están muy buenas. El currywurst también es una apuesta segura.",
    name: "Ana P.",
    initials: "AP",
    rating: 4,
    platform: "Google",
  },
  {
    id: 5,
    text: "Nos atendieron fenomenal. El codillo estaba tierno y sabroso. Los postres caseros son el broche perfecto.",
    name: "Javier S.",
    initials: "JS",
    rating: 5,
    platform: "tripAdvisor",
  },
  {
    id: 6,
    text: "Sitio con encanto en pleno centro. Los platos son abundantes y de buena calidad. Relación calidad-precio muy buena.",
    name: "María T.",
    initials: "MT",
    rating: 4,
    platform: "Google",
  },
]

export const stats: Stats = {
  rating: 8.6,
  count: 1585,
  url: "https://www.google.com/maps/place/En+Las+Nubes+Restobar/",
}

export const statsByPlatform: Record<string, Stats> = {
  google: {
    rating: 4.3,
    count: 1585,
    url: "https://www.google.com/maps/place/En+Las+Nubes+Restobar/@42.4636,-2.4451,17z/",
  },
  uberEats: {
    rating: 4.7,
    count: 270,
    url: "https://www.ubereats.com/es/store/en-las-nubes-restobar/wep1Cog2SfSkmRSK2rJrzg",
  },
  tripAdvisor: {
    rating: 3.7,
    count: 171,
    url: "https://www.tripadvisor.es/Restaurant_Review-g187513-d8531456-Reviews-En_las_Nubes_Restobar-Logrono_La_Rioja.html",
  },
}

export const priceRange = "18-25€"
