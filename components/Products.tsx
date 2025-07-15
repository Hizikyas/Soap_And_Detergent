"use client";
import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import Link from 'next/link';

interface ProductsProps {
  darkMode: boolean;
}

const Products: React.FC<ProductsProps> = ({ darkMode }) => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: 'Ultra Clean Detergent',
      category: 'Laundry',
      image1: 'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 2,
      name: 'Gentle Care Soap',
      category: 'Personal Care',
      image1: 'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239014/pexels-photo-4239014.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 3,
      name: 'Kitchen Degreaser',
      category: 'Kitchen',
      image1: 'https://images.pexels.com/photos/4239014/pexels-photo-4239014.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 4,
      name: 'Multi-Surface Cleaner',
      category: 'All-Purpose',
      image1: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 5,
      name: 'Eco-Friendly Line',
      category: 'Sustainable',
      image1: 'https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 6,
      name: 'Premium Fabric Care',
      category: 'Delicate',
      image1: 'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    }
  ];

  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`} id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} relative inline-block transition-colors duration-300`}>
            Our Products
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1 w-20 h-0.5 ${darkMode ? 'bg-white' : 'bg-[#A31621]'} transition-colors duration-300`}></div>
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                {/* Product Images */}
                <img
                  src={product.image1}
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredProduct === product.id ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <img
                  src={product.image2}
                  alt={`${product.name} - Alternative View`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                {/* Overlay */}
                <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                  hoveredProduct === product.id ? 'bg-opacity-40' : 'bg-opacity-0'
                }`} />

                {/* Hover Content */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-300 ${
                  hoveredProduct === product.id 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-4'
                }`}>
                  <h3 className="text-white text-xl font-bold mb-2 text-center px-4">
                    {product.name}
                  </h3>
                  <Link href={`/product/${product.id}`}>
                    <button className="bg-white text-[#A31621] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                      <Eye size={16} />
                      View
                    </button>
                  </Link>
                </div>

                {/* Category Badge */}
                <div className={`absolute top-4 left-4 ${darkMode ? 'bg-white text-gray-800' : 'bg-[#A31621] text-white'} px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300`}>
                  {product.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;