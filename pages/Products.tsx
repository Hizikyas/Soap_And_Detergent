"use client" ;

import { useState } from 'react';
import Link from 'next/link';
import { Eye } from 'lucide-react';

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
      slug: 'ultra-clean-detergent',
      image1: 'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 2,
      name: 'Gentle Care Soap',
      category: 'Personal Care',
      slug: 'gentle-care-soap',
      image1: 'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239014/pexels-photo-4239014.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 3,
      name: 'Kitchen Degreaser',
      category: 'Kitchen',
      slug: 'kitchen-degreaser',
      image1: 'https://images.pexels.com/photos/4239014/pexels-photo-4239014.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 4,
      name: 'Multi-Surface Cleaner',
      category: 'All-Purpose',
      slug: 'multi-surface-cleaner',
      image1: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 5,
      name: 'Eco-Friendly Line',
      category: 'Sustainable',
      slug: 'eco-friendly-line',
      image1: 'https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 6,
      name: 'Premium Fabric Care',
      category: 'Delicate',
      slug: 'premium-fabric-care',
      image1: 'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 7,
      name: 'Liquid Detergent',
      category: 'Laundry',
      slug: 'liquid-detergent',
      image1: 'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 8,
      name: 'Glass Cleaner Pro',
      category: 'Specialty',
      slug: 'glass-cleaner-pro',
      image1: 'https://images.pexels.com/photos/4239014/pexels-photo-4239014.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#FCF7F8]'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} relative inline-block transition-colors duration-300`}>
            Products
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1 w-24 h-0.5 ${darkMode ? 'bg-white' : 'bg-[#A31621]'} transition-colors duration-300`}></div>
          </h1>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`relative group cursor-pointer animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
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
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <img
                  src={product.image2}
                  alt={`${product.name} - Alternative View`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  <Link 
                    href={`/products/${product.slug}`}
                    className="bg-white text-[#A31621] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    <Eye size={16} />
                    View Detail
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
    </div>
  );
};

export default Products;