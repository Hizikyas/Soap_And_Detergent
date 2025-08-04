'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Loader from '../components/Loading';

interface CarouselProps {
  darkMode: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ darkMode }) => {
  const pathname = usePathname();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);

  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Premium Laundry Detergent',
      subtitle: 'Deep cleaning power for all fabrics',
      hasReadMore: true,
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Gentle Dish Soap',
      subtitle: 'Tough on grease, gentle on hands',
      hasReadMore: false,
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Multi-Surface Cleaner',
      subtitle: 'One solution for every surface',
      hasReadMore: false,
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/4239014/pexels-photo-4239014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Eco-Friendly Range',
      subtitle: 'Clean conscience, clean home',
      hasReadMore: false,
    },
  ];

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
    if (isHovered) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, isHovered]);

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
    console.log('Carousel component mounted');
    return () => {
      console.log('Carousel component unmounted');
    };
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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

      <section
        className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden"
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
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="text-white px-4 space-y-4">
                  <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold"
                  >
                    {slides[currentSlide].title}
                  </motion.h2>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-lg md:text-xl"
                  >
                    {slides[currentSlide].subtitle}
                  </motion.p>
                  {slides[currentSlide].hasReadMore && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7, duration: 0.4 }}
                    >
                      <Link
                        href="/read_more"
                        onClick={handleLinkClick}
                        className="inline-block mt-6 bg-white text-[#A31621] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                      >
                        Read More
                      </Link>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="text-black" size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="text-black" size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
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
      </section>
    </>
  );
};

export default Carousel;