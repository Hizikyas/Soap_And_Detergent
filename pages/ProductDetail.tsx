'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductDetailProps {
  productName: string;
  darkMode?: boolean;
}

interface ProductData {
  name: string;
  description: string;
  images: string[];
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productName, darkMode = false }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const productData: Record<string, ProductData> = {
    'ultra-clean-detergent': {
      name: 'Ultra Clean Detergent',
      description: 'Our locally made laundry detergent provides strong cleaning while being gentle on clothes. It removes stains and odors effectively, works in all water types, and offers good value for everyday use. Produced in Ethiopia with care, it supports local manufacturing and quality standards. Reliable, affordable, and trusted for your daily laundry needs.',
      images: [
        '/Products/detergent/1.png',
        '/Products/detergent/2.png'
      ]
    },
    'Ajax': {
      name: 'Ajax',
      description: 'Our locally made blue kitchen soap easily removes grease, food stains, and dirt from your dishes and surfaces. Gentle but effective, it keeps your kitchen clean and fresh every day. Made in Ethiopia, it’s affordable, reliable, and trusted for household cleaning.',
      images: [
        '/Products/ajax/1.png',
        '/Products/ajax/2.png']
    },
    'Dishwashing detergent': {
      name: 'Dishwashing detergent',
      description:
        'Our kitchen detergent gives powerful cleaning while being safe for your family. Made with biodegradable ingredients, it removes grease and dirt effectively and keeps your kitchen fresh. Produced locally in Ethiopia, it’s affordable, eco-friendly, and gentle on the environment.',
      images: [
        '/Products/dish/1.png',
        '/Products/dish/2.png'
      ]
    },
  };

  const product = productData[productName] || {
    name: 'Product Not Found',
    description: 'The requested product could not be found.',
    images: ['/icon/404.svg']
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  // Auto-slide when not hovered
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isHovered) {
      timer = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % product.images.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [product.images.length, isHovered]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle navigation state
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  // Debug log for component mount
  useEffect(() => {
    console.log('ProductDetail component mounted');
    return () => {
      console.log('ProductDetail component unmounted');
    };
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % product.images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Handle go back button click
  const handleGoBack = () => {
    setIsNavigating(true);
    setTimeout(() => {
      router.back();
    }, 200);
  };

  const isProductFound = !!productData[productName];

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
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          {/* Go Back Icon and Text */}
          <button
            onClick={handleGoBack}
            className="absolute top-16 left-6 z-10 inline-flex items-center gap-2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 pl-3 pr-4 transition-all duration-300 hover:scale-110"
            aria-label="Go back to previous page"
            type="button"
          >
            <ArrowLeft className={`${darkMode ? 'text-gray-900' : 'text-[#A31621]'} transition-colors duration-300`} size={24} />
            <span className={`${darkMode ? 'text-gray-900' : 'text-[#A31621]'} font-medium transition-colors duration-300`}>Go Back</span>
          </button>

          {isProductFound ? (
            // Product Image Carousel
            <div
              className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl mb-12 mt-16"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'tween', duration: 1.2, ease: 'easeInOut' },
                    opacity: { duration: 0.8 },
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src={product.images[currentSlide]}
                    alt={`${product.name} - View ${currentSlide + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300 hover:scale-110"
                aria-label="Previous image"
              >
                <ChevronLeft className="text-black" size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300 hover:scale-110"
                aria-label="Next image"
              >
                <ChevronRight className="text-black" size={24} />
              </button>

              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {product.images.map((_: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white scale-170'
                        : 'bg-white bg-opacity-70 hover:bg-opacity-85'
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : (
            // Not found: show SVG only, small and centered
            <div className="flex flex-col items-center justify-center py-24">
              <img
                src="/icon/404.svg"
                alt="Product Not Found"
                className="w-32 h-32 mb-6"
              />
            </div>
          )}

          {/* Product Information */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} relative inline-block mb-8 transition-colors duration-300`}>
              {product.name}
              {isProductFound && (
                <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1 w-24 h-0.5 ${darkMode ? 'bg-white' : 'bg-[#A31621]'} transition-colors duration-300`}></div>
              )}
            </h1>
            <p className={`text-lg md:text-xl leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;