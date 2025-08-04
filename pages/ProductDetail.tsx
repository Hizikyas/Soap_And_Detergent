'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Loader from '../components/Loading';

interface ProductDetailProps {
  productName: string;
  darkMode?: boolean;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productName, darkMode = false }) => {
  const pathname = usePathname();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const productData = {
    'ultra-clean-detergent': {
      name: 'Ultra Clean Detergent',
      description: 'Our premium laundry detergent delivers exceptional cleaning power while being gentle on fabrics. Formulated with advanced enzymes and biodegradable surfactants, it effectively removes tough stains and odors while maintaining the integrity of your clothes. Suitable for all water temperatures and fabric types, this concentrated formula provides excellent value with fewer doses needed per load.',
      images: [
        'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
      ]
    },
    'gentle-care-soap': {
      name: 'Gentle Care Soap',
      description: 'Experience the perfect balance of cleansing power and skin care with our Gentle Care Soap. Enriched with natural moisturizers and essential oils, this soap cleanses thoroughly while maintaining your skin\'s natural moisture barrier. Free from harsh chemicals and artificial fragrances, it\'s perfect for sensitive skin and daily use by the whole family.',
      images: [
        'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/4239014/pexels-photo-4239014.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
      ]
    },
    'kitchen-degreaser': {
      name: 'Kitchen Degreaser',
      description: 'Tackle the toughest kitchen grease and grime with our powerful Kitchen Degreaser. This fast-acting formula cuts through baked-on grease, food residue, and stubborn stains on all kitchen surfaces. Safe for use on stainless steel, ceramic, glass, and painted surfaces, it leaves your kitchen sparkling clean without harsh chemical residues.',
      images: [
        'https://images.pexels.com/photos/4239014/pexels-photo-4239014.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
      ]
    },
    'liquid-detergent': {
      name: 'Liquid Detergent',
      description: 'Our premium liquid detergent combines powerful cleaning agents with fabric care technology to deliver outstanding results in every wash. The concentrated formula dissolves quickly in all water temperatures and is specially designed to prevent color fading while removing even the most stubborn stains. Perfect for both standard and high-efficiency washing machines.',
      images: [
        'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
      ]
    },
    'multi-surface-cleaner': {
      name: 'Multi-Surface Cleaner',
      description:
        'Our Multi-Surface Cleaner is your go-to solution for everyday messes on a variety of surfaces. This fast-drying formula effectively lifts dirt, dust, and grime from countertops, tables, appliances, and more. Safe for use on sealed wood, glass, stainless steel, and plastic, it leaves behind a fresh scent and a streak-free shine.',
      images: [
        'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
      ]
    },
    'premium-fabric-care': {
      name: 'Premium Fabric Care',
      description:
        'Pamper your delicate fabrics with our Premium Fabric Care solution. Specially formulated for silks, wools, and other fine garments, it gently cleans without fading or stretching. Enriched with fabric conditioners, it maintains softness and extends the life of your clothes. Perfect for hand washing or delicate cycles in your washing machine.',
      images: [
        'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
      ]
    },
    'glass-cleaner-pro': {
      name: 'Glass Cleaner Pro',
      description:
        'Achieve a crystal-clear finish with Glass Cleaner Pro. Designed for windows, mirrors, and glass surfaces, this ammonia-free formula cuts through fingerprints, smudges, and grime with ease. It dries quickly without leaving streaks or residue, making it perfect for both residential and commercial use.',
      images: [
        'https://images.pexels.com/photos/4239014/pexels-photo-4239014.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
      ]
    },
    'eco-friendly-line': {
      name: 'Eco-Friendly Line',
      description:
        'Our Eco-Friendly Line offers powerful cleaning performance with a conscience. Made with biodegradable ingredients and packaged in recyclable materials, these products are tough on dirt but gentle on the planet. Ideal for environmentally conscious households looking to reduce their footprint without sacrificing cleanliness.',
      images: [
        'https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
        'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
      ]
    },
  };

  const product = productData[productName] || {
    name: 'Product Not Found',
    description: 'The requested product could not be found.',
    images: ['https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1']
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

  // Reset loading state when navigation completes
  useEffect(() => {
    setLoading(false);
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

  // Handle link click to trigger loader
  const handleLinkClick = () => {
    setLoading(true);
  };

  return (
    <>
      {/* Loader with Blurred Background */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-50 flex items-center justify-center"
          >
            <Loader darkMode={darkMode} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#FCF7F8]'} transition-colors duration-300`}>
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          {/* Go Back Icon and Text */}
          <Link
            href="/products"
            onClick={handleLinkClick}
            className="absolute top-16 left-6 z-10 inline-flex items-center gap-2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 pl-3 pr-4 transition-all duration-300 hover:scale-110"
            aria-label="Go back to products"
          >
            <ArrowLeft className={`${darkMode ? 'text-gray-900' : 'text-[#A31621]'} transition-colors duration-300`} size={24} />
            <span className={`${darkMode ? 'text-gray-900' : 'text-[#A31621]'} font-medium transition-colors duration-300`}>Go Back</span>
          </Link>

          {/* Product Image Carousel */}
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

          {/* Product Information */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} relative inline-block mb-8 transition-colors duration-300`}>
              {product.name}
              <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1 w-24 h-0.5 ${darkMode ? 'bg-white' : 'bg-[#A31621]'} transition-colors duration-300`}></div>
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