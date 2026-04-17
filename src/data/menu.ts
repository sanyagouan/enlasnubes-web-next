export type MenuCategory = 'entrantes' | 'cachopos' | 'alemana' | 'canchales' | 'postres' | 'bebidas'

export type Tag = 'sin-gluten' | 'vegetariano'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: MenuCategory
  tags: Tag[]
}

export const categories: { id: MenuCategory | 'all'; label: string; emoji: string }[] = [
  { id: 'all', label: 'Todos', emoji: '🍽️' },
  { id: 'entrantes', label: 'Entrantes', emoji: '🥗' },
  { id: 'cachopos', label: 'Cachopos', emoji: '🥩' },
  { id: 'alemana', label: 'Cocina Alemana', emoji: '🇩🇪' },
  { id: 'canchales', label: 'Canchales', emoji: '🏖️' },
  { id: 'postres', label: 'Postres', emoji: '🍰' },
  { id: 'bebidas', label: 'Bebidas', emoji: '🍹' },
]

export const menuItems: MenuItem[] = [
  // Entrantes
  {
    id: 'tempura-verduras',
    name: 'Tempura de Verduras',
    description: 'Verduras de temporada en tempura crujiente con salsa teriyaki',
    price: 12,
    category: 'entrantes',
    tags: ['vegetariano'],
  },
  {
    id: 'croquetas-jamon',
    name: 'Croquetas Caseras',
    description: 'Croquetas de jamón ibérico con bechamel artesanal',
    price: 10,
    category: 'entrantes',
    tags: [],
  },
  {
    id: 'ensalada-cesar',
    name: 'Ensalada César',
    description: 'Lechuga romana, pollo a la plancha, parmesano, croutons y salsa César',
    price: 13,
    category: 'entrantes',
    tags: [],
  },
  {
    id: 'patatas-bravas',
    name: 'Patatas Bravas',
    description: 'Patatas fritas con salsa brava casera y alioli',
    price: 8,
    category: 'entrantes',
    tags: ['vegetariano'],
  },
  {
    id: 'calamares-andalucia',
    name: 'Calamares a la Andaluza',
    description: 'Anillas de calamar rebozadas con limón y alioli',
    price: 14,
    category: 'entrantes',
    tags: [],
  },
  {
    id: 'hummus-pan',
    name: 'Hummus con Pan',
    description: 'Crema de garbanzos con aceite de oliva, pimentón y pan tostado',
    price: 9,
    category: 'entrantes',
    tags: ['vegetariano', 'sin-gluten'],
  },
  // Cachopos
  {
    id: 'cachopo-tradicional',
    name: 'Cachopo Tradicional',
    description: 'Dos filetes de ternera rellenos de jamón serrano y queso, empanados y fritos',
    price: 32,
    category: 'cachopos',
    tags: [],
  },
  {
    id: 'cachopo-bacon-carbonara',
    name: 'Cachopo Bacon Carbonara',
    description: 'Cachopo relleno de bacon ahumado, queso y salsa carbonara',
    price: 33,
    category: 'cachopos',
    tags: [],
  },
  {
    id: 'cachopo-cecina-queso-cabra',
    name: 'Cachopo Cecina y Queso de Cabra',
    description: 'Cachopo relleno de cecina de León y queso de cabra fundido',
    price: 33,
    category: 'cachopos',
    tags: [],
  },
  {
    id: 'cachopo-especial',
    name: 'Cachopo Especial de la Casa',
    description: 'Nuestra versión exclusiva con ingredientes seleccionados del día',
    price: 35,
    category: 'cachopos',
    tags: [],
  },
  // Cocina Alemana
  {
    id: 'currywurst',
    name: 'Currywurst',
    description: 'Salchicha alemana cortada con salsa curry y patatas fritas',
    price: 14,
    category: 'alemana',
    tags: [],
  },
  {
    id: 'codillo',
    name: 'Codillo Asado',
    description: 'Codillo de cerdo al horno con chucrut y puré de patata',
    price: 22,
    category: 'alemana',
    tags: [],
  },
  {
    id: 'salchichas',
    name: 'Salchichas Alemanas',
    description: 'Tres variedades de salchicha con mostaza y chucrut',
    price: 15,
    category: 'alemana',
    tags: [],
  },
  {
    id: 'schnitzel',
    name: 'Schnitzel',
    description: 'Filete empanado de cerdo con limón y ensalada de patata',
    price: 18,
    category: 'alemana',
    tags: [],
  },
  // Canchales
  {
    id: 'papas-arrugadas',
    name: 'Papas Arrugadas con Mojo',
    description: 'Patatas canarias con mojo picón y mojo verde',
    price: 9,
    category: 'canchales',
    tags: ['vegetariano', 'sin-gluten'],
  },
  {
    id: 'gofo',
    name: 'Gofo Canario',
    description: 'Tortita de harina de millo dulce, típica de Canarias',
    price: 7,
    category: 'canchales',
    tags: ['vegetariano'],
  },
  {
    id: 'queso-palmero',
    name: 'Queso Palmero',
    description: 'Queso de cabra ahumado de las Islas Canarias con mermelada de higo',
    price: 12,
    category: 'canchales',
    tags: ['vegetariano'],
  },
  // Postres
  {
    id: 'tiramisu',
    name: 'Tiramisú',
    description: 'Receta clásica italiana con mascarpone, café y cacao',
    price: 8,
    category: 'postres',
    tags: [],
  },
  {
    id: 'tarta-chocolate',
    name: 'Tarta de Chocolate',
    description: 'Bizcocho de chocolate con ganache y frutos rojos',
    price: 8,
    category: 'postres',
    tags: ['vegetariano'],
  },
  {
    id: 'cheesecake',
    name: 'Cheesecake',
    description: 'Tarta de queso estilo New York con coulis de frutos del bosque',
    price: 8,
    category: 'postres',
    tags: ['vegetariano'],
  },
  {
    id: 'helado-artesano',
    name: 'Helado Artesano',
    description: 'Tres bolas de helado artesanal de temporada',
    price: 7,
    category: 'postres',
    tags: ['vegetariano'],
  },
  // Bebidas
  {
    id: 'cajas-rioja',
    name: 'Vino de Rioja (Copa)',
    description: 'Selección de vinos de la D.O. Ca. Rioja. Tinto, blanco o rosado',
    price: 4,
    category: 'bebidas',
    tags: [],
  },
  {
    id: 'cerveza-artesana',
    name: 'Cerveza Artesanal',
    description: 'Cerveza artesanal local o importada',
    price: 4,
    category: 'bebidas',
    tags: [],
  },
  {
    id: 'refresco',
    name: 'Refresco',
    description: 'Coca-Cola, Fanta, Sprite, Nestea, agua mineral',
    price: 3,
    category: 'bebidas',
    tags: [],
  },
  {
    id: 'cafe',
    name: 'Café',
    description: 'Café espresso, cortado, con leche o americano',
    price: 2,
    category: 'bebidas',
    tags: [],
  },
  {
    id: 'zumo-natural',
    name: 'Zumo Natural',
    description: 'Zumo de naranja natural recién exprimido',
    price: 4,
    category: 'bebidas',
    tags: ['sin-gluten'],
  },
]
