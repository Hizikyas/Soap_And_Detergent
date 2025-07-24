'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      slug: 'Ultra Clean Detergent',
      name: 'Ultra Clean Detergent',
      category: 'Laundry',
      image1: 'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 2,
      slug: 'Gentle Care Soap',
      name: 'Gentle Care Soap',
      category: 'Personal Care',
      image1: 'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239014/pexels-photo-4239014.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 3,
      slug: 'Kitchen Degreaser',
      name: 'Kitchen Degreaser',
      category: 'Kitchen',
      image1: 'https://images.pexels.com/photos/4239014/pexels-photo-4239014.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 4,
      slug: 'Multi-Surface Cleaner',
      name: 'Multi-Surface Cleaner',
      category: 'All-Purpose',
      image1: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 5,
      slug: 'Eco-Friendly Line',
      name: 'Eco-Friendly Line',
      category: 'Sustainable',
      image1: 'https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    },
    {
      id: 6,
      slug: 'Premium Fabric Care',
      name: 'Premium Fabric Care',
      category: 'Delicate',
      image1: 'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      image2: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1'
    }
  ];

  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`} id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} relative inline-block transition-colors duration-300`}>
            Our Products
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1 w-20 h-0.5 ${darkMode ? 'bg-white' : 'bg-[#A31621]'}`} />
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative h-64 w-full">
                {/* Image 1 */}
                <motion.img
                  src={product.image1}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{
                    opacity: hoveredProduct === product.id ? 0 : 1,
                    scale: hoveredProduct === product.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Image 2 */}
                <motion.img
                  src={product.image2}
                  alt={`${product.name} alternative`}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{
                    opacity: hoveredProduct === product.id ? 1 : 0,
                    scale: hoveredProduct === product.id ? 1 : 1.1
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/40"
                  animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Hover content */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center"
                  animate={{
                    opacity: hoveredProduct === product.id ? 1 : 0,
                    y: hoveredProduct === product.id ? 0 : 20,
                    scale: hoveredProduct === product.id ? 1 : 0.95
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white text-xl font-bold mb-2 text-center px-4">
                    {product.name}
                  </h3>
                  <Link href={`/products/${product.slug}`}>
                    <button className="bg-white text-[#A31621] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                      <Eye size={16} />
                      View
                    </button>
                  </Link>
                </motion.div>

                {/* Category Badge */}
                <motion.div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-white text-gray-800' : 'bg-[#A31621] text-white'}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {product.category}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
