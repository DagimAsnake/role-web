import React from 'react';

const products = [
  {
    title: 'Product 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/bg-1.png',
  },
  {
    title: 'Product 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/bg-1.png',
  },
  {
    title: 'Product 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/bg-1.png',
  },
  {
    title: 'Product 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: '/images/bg-1.png',
  },
  // Add more products...
];

const ProductCard = ({ title, description, image }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-transform duration-300">
    <img className="w-full h-48 object-cover" src={image} alt={title} />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const Products = () => (
  <div className="container mx-auto py-10">
    <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </div>
);

export default Products;