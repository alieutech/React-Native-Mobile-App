import { Product } from './types/product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'Macbook Pro (2024)',
    slug: 'macbook-pro-2024',
    heroImage: require('../assets/images/pc_3.jpg'),
    imagesUrl: [
      require('../assets/images/pc_3.jpg'),
      require('../assets/images/pc_4.jpg'),
    ],
    price: 899.99,
    category: {
      id: 1,
      imageUrl: require('../assets/images/pc_3.jpg'),
      name: 'Laptops',
      slug: 'laptops',
    },
    maxQuantity: 5,
  },
  {
    id: 5,
    title: 'Dell XPS 13',
    slug: 'dell-xps-13',
    heroImage: require('../assets/images/dell-1.jpg'),
    imagesUrl: [
      require('../assets/images/dell-1.jpg'),
      require('../assets/images/dell-2.jpg'),
    ],
    price: 1099.99,
    category: {
      id: 2,
      imageUrl: require('../assets/images/dell-2.jpg'),
      name: 'Laptops',
      slug: 'laptops',
    },
    maxQuantity: 7,
  },
  {
    id: 2,
    title: 'IPhone 15',
    slug: 'i-phone-15',
    heroImage: require('../assets/images/i-phone-1.jpg'),
    imagesUrl: [
      require('../assets/images/i-phone-1.jpg'),
      require('../assets/images/i-phone-1.jpg'),
    ],
    price: 999.99,
    category: {
      id: 3,
      imageUrl: require('../assets/images/i-phone-1.jpg'),
      name: 'Phones',
      slug: 'phones',
    },
    maxQuantity: 10,
  },
  {
    id: 6,
    title: 'I-Phones',
    slug: 'i-phones',
    heroImage: require('../assets/images/i-phone-1.jpg'),
    imagesUrl: [
      require('../assets/images/iphone_.jpg'),
      require('../assets/images/iphone_1.jpg'),
      require('../assets/images/iphone_2.jpg'),
    ],
    price: 799.99,
    category: {
      id: 4,
      imageUrl: require('../assets/images/iphone.jpg'),
      name: 'I-Phones',
      slug: 'i-phones',
    },
    maxQuantity: 12,
  },
  {
    id: 3,
    title: 'Headset',
    slug: 'headset',
    heroImage: require('../assets/images/Headset.jpg'),
    imagesUrl: [
      require('../assets/images/Headset.jpg'),
      require('../assets/images/Headset-1.jpg'),
    ],
    price: 499.99,
    category: {
      id: 5,
      imageUrl: require('../assets/images/Headset-1.jpg'),
      name: 'Accessories',
      slug: 'accessories',
    },
    maxQuantity: 15,
  },
  {
    id: 4,
    title: 'PlayStation 5',
    slug: 'playstation-5',
    heroImage: require('../assets/images/playstation.jpg'),
    imagesUrl: [
      require('../assets/images/playstation1.jpg'),
      require('../assets/images/playstation2.jpg'),
      require('../assets/images/playstation3.jpg'),
    ],
    price: 699.99,
    category: {
      id: 6,
      imageUrl: require('../assets/images/playstation.jpg'),
      name: 'Gaming',
      slug: 'gaming',
    },
    maxQuantity: 3,
  },

];
