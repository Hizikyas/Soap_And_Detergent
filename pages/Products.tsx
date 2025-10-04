'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductsProps {
  darkMode: boolean;
}

const Products: React.FC<ProductsProps> = ({ darkMode }) => {
  const pathname = usePathname();
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  // Handle navigation state
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  const handleNavigation = () => {
    setIsNavigating(true);
  };


  const products = [
    {
      id: 1,
      name: 'Ultra Clean Detergent',
      category: 'Laundry',
      slug: 'ultra-clean-detergent',
      image1: '/Products/detergent/1.png',
      image2: '/Products/detergent/2.png',
    },
    {
      id: 2,
      name: 'Ajax',
      category: 'Kitchen',
      slug: 'Ajax',
      image1: '/Products/ajax/1.png',
      image2: '/Products/ajax/2.png',
    },
    {
      id: 3,
      name: 'Dishwashing detergent',
      category: 'Kitchen',
      slug: 'dishwashing-detergent',
      image1: '/Products/dish/1.png',
      image2: '/Products/dish/2.png',
    },
    // {
    //   id: 4,
    //   name: 'Multi-Surface Cleaner',
    //   category: 'All-Purpose',
    //   slug: 'multi-surface-cleaner',
    //   image1: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    //   image2: 'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    // },

  ];

  return (
    <>
      {/* Simple Navigation Loading Indicator */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ width: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-1 bg-[#A31621] z-50"
          />
        )}
      </AnimatePresence>

      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#FCF7F8]'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[5rem]"
          >
            <h1
              className={`text-4xl md:text-5xl font-bold ${
                darkMode ? 'text-white' : 'text-[#A31621]'
              } relative inline-block transition-colors duration-300`}
            >
              Products
              <div
                className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1 w-24 h-0.5 ${
                  darkMode ? 'bg-white' : 'bg-[#A31621]'
                } transition-colors duration-300`}
              ></div>
            </h1>
          </motion.div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-[7rem]">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
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
                      scale: hoveredProduct === product.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Image 2 */}
                  <motion.img
                    src={product.image2}
                    alt={`${product.name} - Alternative View`}
                    className="absolute inset-0 w-full h-full object-cover"
                    animate={{
                      opacity: hoveredProduct === product.id ? 1 : 0,
                      scale: hoveredProduct === product.id ? 1 : 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/40"
                    animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Hover Content */}
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    animate={{
                      opacity: hoveredProduct === product.id ? 1 : 0,
                      y: hoveredProduct === product.id ? 0 : 20,
                      scale: hoveredProduct === product.id ? 1 : 0.95,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-white text-xl font-bold mb-2 text-center px-4">
                      {product.name}
                    </h3>
                    <Link
                      href={`/products/${product.slug}`}
                      onClick={handleNavigation}
                      className="bg-white text-[#A31621] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                      <Eye size={16} />
                      View Detail
                    </Link>
                  </motion.div>

                  {/* Category Badge */}
                  <motion.div
                    className={`absolute top-4 left-4 ${darkMode ? 'bg-white text-gray-800' : 'bg-[#A31621] text-white'} px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300`}
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
      </div>
    </>
  );
};

export default Products;