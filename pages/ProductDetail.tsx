"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductDetailProps {
  productName: string;
  darkMode?: boolean;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productName, darkMode = false }) => {
  const [currentImage, setCurrentImage] = useState(0);

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
    }
  };

  const product = productData[productName] || {
    name: 'Product Not Found',
    description: 'The requested product could not be found.',
    images: ['https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1']
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % product.images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [product.images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#FCF7F8]'} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Product Image Carousel */}
        <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-2xl mb-12">
          {product.images.map((image: string, index: number) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`${product.name} - View ${index + 1}`}
                className="w-full h-full object-cover"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="text-white" size={24} />
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {product.images.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? 'bg-white scale-110'
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`Go to image ${index + 1}`}
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
  );
};

export default ProductDetail;