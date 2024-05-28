const products = [
  {
    name: 'Chai Tea Latte',
    price: 3.35,
    description:
      'Bebida Baja en Calorías con Extracto de Café Verde y Refrescante Sabor a Lima.',
    ingredientes: ['Té verde', 'Leche'],
    image: 'assets/images/Classic-Chai-Tea-Latte.jpeg'
  },
  {
    name: 'ICED Chai Tea Latte',
    price: 4.5,
    description: 'Té negro chai, hielo y leche o bebida vegetal',
    ingredientes: ['Té negro', 'Leche', 'Bebida vegetal'],
    image: 'assets/images/SBX-UK-MOP-IcedChaiTeaLatte.jpg'
  },
  {
    name: 'Matcha tea latte',
    price: 5.5,
    description: 'Leche o bebida vegetal con matcha con un sabor único',
    ingredientes: ['Té matcha', 'Leche', 'Bebida vegetal'],
    image: 'assets/images/Matcha-Green-Tea-Latte.jpeg'
  },
  {
    name: 'Iced Matcha tea latte',
    price: 6.5,
    description: 'Leche  o bebida vegetal, hielo y matcha con un sabor único',
    ingredientes: ['Té matcha', 'Leche', 'Bebida vegetal', 'Hielo'],
    image: 'assets/images/Iced-Matcha-Green-Tea-Latte.jpeg'
  },
  {
    name: 'Iced lemon',
    price: 6.5,
    description: 'Bebida refrescante de limón hielo y limón liofilizado',
    ingredientes: ['Limón', 'Hielo'],
    image: 'assets/images/Iced-Green-Tea-Lemonade.jpeg'
  },
  {
    name: 'Teavana® Peach Citrus Green Tea Lemonade',
    price: 6.5,
    description: 'Bebida refrescante de cítricos y te verde',
    ingredientes: ['Cítricos', 'Té verde'],
    image: 'assets/images/SBX-UK-MOP-PeachIcedTea.jpg'
  },
  {
    name: 'Teavana® Green Tea Lemonade',
    price: 6.5,
    description:
      'Té Verde Frio con Melocotón y Limonada. Bien Agitado en Coctelera y Servido con Hielo',
    ingredientes: ['Té verde', 'Limonada', 'Melocotón'],
    image: 'assets/images/SBX-UK-MOP-IcedGreenTeaLemonade.jpeg'
  },
  {
    name: 'Teavana® Black Tea Lemonade',
    price: 6.5,
    description:
      'Té Negro Frio con Limonada. Bien Agitado en Coctelera y Servido con Hielo',
    ingredientes: ['Limonada', 'Té negro'],
    image: 'assets/images/Iced-Black-Tea-Lemonade.jpeg'
  },
  {
    name: 'Teavana® Hibiscus Tea Lemonade',
    price: 6.5,
    description:
      'Infusión de Hibiscus Frio con Limonada. Bien Agitado en Coctelera y Servido con Hielo',
    ingredientes: ['Hibiscus', 'Limonada'],
    image: 'assets/images/Iced-Hibiscus-Tea-Lemonade.jpeg'
  },
  {
    name: 'Teavana® Green Tea',
    price: 6.5,
    description: 'Té Verde Frio Servido con Hielo',
    ingredientes: ['Té verde', 'Hielo'],
    image: 'assets/images/Iced-Green-Tea.jpeg'
  },
  {
    name: 'Teavana® Black Tea',
    price: 6.5,
    description: 'Té Negro Frio Servido con Hielo',
    ingredientes: ['Té negro', 'Hielo'],
    image: 'assets/images/Iced-Black-Tea.jpeg'
  },
  {
    name: 'Teavana® Hibiscus Infusion',
    price: 6.5,
    description: 'Infusión de Hibiscus con Hielo.',
    ingredientes: ['Hibiscus', 'Hielo'],
    image: 'assets/images/SBX-UK-MOP-HibiscusBlend.jpeg'
  },
  {
    name: 'English Breakfast',
    price: 6.5,
    description: 'Té negro con cuerpo y ricos matices a roble y malta.',
    ingredientes: ['Té negro'],
    image: 'assets/images/English-Breakfast-Tea.jpeg'
  },
  {
    name: 'Earl Grey',
    price: 6.5,
    description: 'Té suave con aromáticos matices a bergamota y lavanda.',
    ingredientes: ['Té aromático', 'Bergamota', 'Lavanda'],
    image: 'assets/images/Earl-Grey-Tea_0.jpeg'
  },
  {
    name: 'Chai',
    price: 6.5,
    description:
      'Infusión de canela picante, aroma de jengibre y toques de cardamomo.',
    ingredientes: ['Canela', 'Jengibre', 'Cardamomo'],
    image: 'assets/images/Chai-Tea.jpeg'
  },
  {
    name: 'Mint Citrus Green',
    price: 6.5,
    description:
      'Mezcla equilibrada de té verde con notas de hierbaluisa, hierba de limón y una pizca de menta.',
    ingredientes: ['Té verde', 'Hierbaluisa', 'Hierba de Limón', 'Menta'],
    image: 'assets/images/Mint-Citrus-Tea.jpeg'
  },
  {
    name: 'Mint Blend',
    price: 6.5,
    description: 'Hierbabuena, menta y un toque de hierbaluisa (sin cafeína)',
    ingredientes: ['Hierbabuena', 'Hierbaluisa', 'Menta'],
    image: 'assets/images/Mint-Herbal-Blend-Tea.jpeg'
  },
  {
    name: 'Emperor Cloud & Mist',
    price: 6.5,
    description:
      'Té verde puro de origen único con un sutil acabado ahumado-dulce.',
    ingredientes: ['Té verde'],
    image: 'assets/images/SBX-UK-MOP-EmperorsClouds&Mist.jpeg'
  },
  {
    name: 'Hibiscus',
    price: 6.5,
    description:
      'Toques tropicales de papaya y mango con hibiscus, hierba de limón y un toque de canela (sin cafeína)',
    ingredientes: ['Hibiscus', 'Papaya', 'Mango', 'Hierba de Limón', 'Canela'],
    image: 'assets/images/Hibiscus-Herbal-Blend-Tea.jpeg'
  },
  {
    name: 'Youthberry',
    price: 6.5,
    description:
      'Té blanco con piña dulce, baya de acaí y un final floral a pétalos de rosa.',
    ingredientes: ['Té blanco', 'Piña', 'Baya', 'Pétalos de rosa'],
    image: 'assets/images/Youthberry-Tea.jpeg'
  }
];

export { products };
