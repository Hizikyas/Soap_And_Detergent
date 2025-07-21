"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  darkMode: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ darkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Premium Laundry Detergent',
      subtitle: 'Deep cleaning power for all fabrics',
      hasReadMore: true
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Gentle Dish Soap',
      subtitle: 'Tough on grease, gentle on hands',
      hasReadMore: false
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Multi-Surface Cleaner',
      subtitle: 'One solution for every surface',
      hasReadMore: false
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/4239014/pexels-photo-4239014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Eco-Friendly Range',
      subtitle: 'Clean conscience, clean home',
      hasReadMore: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Using next/image would be better for production */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl animate-fade-in animation-delay-300">
                  {slide.subtitle}
                </p>
                {slide.hasReadMore && (
                  <Link 
                    href="/read_more"
                    className="inline-block mt-6 bg-white text-[#A31621] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: '0.6s' }}
                  >
                    Read More
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;