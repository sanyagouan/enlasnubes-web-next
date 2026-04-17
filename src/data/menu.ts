export type MenuCategory = 'asturiana' | 'alemana' | 'mediterranea' | 'postres'

export type Tag = 'sin-gluten' | 'vegetariano'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: MenuCategory
  tags: Tag[]
}

export const categories: { id: MenuCategory; label: string; emoji: string }[] = [
  { id: 'asturiana', label: 'Asturiana', emoji: '🏔️' },
  { id: 'alemana', label: 'Alemana', emoji: '🇩🇪' },
  { id: 'mediterranea', label: 'Mediterránea', emoji: '☀️' },
  { id: 'postres', label: 'Postres', emoji: '🍰' },
]

// Datos extraídos de la web actual (index.html)
export const menuItems: MenuItem[] = [
  // Asturiana
  {
    id: 'cachopo-tradicional',
    name: 'Cachopo Tradicional',
    description: 'Ternera, jamón, queso, patatas y pimientos',
    price: 32,
    category: 'asturiana',
    tags: ['sin-gluten'],
  },
  {
    id: 'fabada',
    name: 'Fabada Asturiana',
    description: 'Receta tradicional con fabes, chorizo, morcilla y lacón',
    price: 16,
    category: 'asturiana',
    tags: ['sin-gluten'],
  },
  {
    id: 'cachopo-bacon',
    name: 'Cachopo Bacon & Carbonara',
    description: 'Bacon crujiente y salsa carbonara casera',
    price: 33,
    category: 'asturiana',
    tags: ['sin-gluten'],
  },
  {
    id: 'cachopo-cecina',
    name: 'Cachopo Cecina & Queso de Cabra',
    description: 'Cecina de León y queso de cabra fundido',
    price: 33,
    category: 'asturiana',
    tags: ['sin-gluten'],
  },
  // Alemana
  {
    id: 'currywurst',
    name: 'Currywurst',
    description: 'Salchicha con salsa curry y patatas fritas',
    price: 12,
    category: 'alemana',
    tags: [],
  },
  {
    id: 'codillo',
    name: 'Codillo Asado',
    description: 'Horneado lentamente con puré y chucrut',
    price: 18,
    category: 'alemana',
    tags: [],
  },
  {
    id: 'salchichas',
    name: 'Salchichas Núremberg',
    description: 'Seis salchichas con chucrut y mostaza',
    price: 14,
    category: 'alemana',
    tags: [],
  },
  {
    id: 'kartoffelsalat',
    name: 'Kartoffelsalat',
    description: 'Ensalada de patatas alemana',
    price: 8,
    category: 'alemana',
    tags: ['vegetariano'],
  },
  // Mediterránea
  {
    id: 'salmorejo',
    name: 'Salmorejo de Tomate',
    description: 'Con huevo duro y jamón ibérico',
    price: 10,
    category: 'mediterranea',
    tags: ['sin-gluten'],
  },
  {
    id: 'libritos',
    name: 'Libritos de Calabacín',
    description: 'Con queso fundido y jamón',
    price: 12,
    category: 'mediterranea',
    tags: ['vegetariano'],
  },
  {
    id: 'bacalao',
    name: 'Bacalao a la Riojana',
    description: 'Con pimientos asados y patatas panaderas',
    price: 18,
    category: 'mediterranea',
    tags: ['sin-gluten'],
  },
  {
    id: 'papas-mojo',
    name: 'Jamón con Papas y Mojo Verde',
    description: 'Canarias en Logroño, papas arrugás con mojo',
    price: 15,
    category: 'mediterranea',
    tags: ['sin-gluten'],
  },
  // Postres
  {
    id: 'flan-baileys',
    name: "Flan de Bailey's",
    description: 'Nuestro postre estrella, suavidad con toque irlandés',
    price: 7,
    category: 'postres',
    tags: [],
  },
  {
    id: 'tarta-queso',
    name: 'Tarta de Queso',
    description: 'Estilo baked, con mermelada de frutos rojos',
    price: 8,
    category: 'postres',
    tags: ['sin-gluten'],
  },
]
