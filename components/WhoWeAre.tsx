'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface WhoWeAreProps {
  darkMode: boolean;
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ darkMode }) => {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  // Handle navigation state
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  const handleNavigation = () => {
    setIsNavigating(true);
  };

  // Debug log for component mount
  useEffect(() => {
    console.log('WhoWeAre component mounted');
    return () => {
      console.log('WhoWeAre component unmounted');
    };
  }, []);

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

      <section
        className={`relative py-16 ${
          darkMode ? 'bg-gray-800' : 'bg-[#FCF7F8]'
        } transition-colors duration-300`}
        id="about"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className={`text-3xl md:text-4xl font-bold ${
                darkMode ? 'text-white' : 'text-[#A31621]'
              } relative inline-block transition-colors duration-300`}
            >
              Who We Are
              <div
                className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1 w-20 h-0.5 ${
                  darkMode ? 'bg-white' : 'bg-[#A31621]'
                } transition-colors duration-300`}
              />
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center relative">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-[#A31621]'
                } transition-colors duration-300`}
              >
                At Mahpile General Business PLC, we are dedicated to providing high-quality cleaning solutions that make everyday life easier. Since our establishment in 2016, we have focused on creating products that deliver strong cleaning performance while being safe for families and the environment. From our production facilities in Akaki Kality to our commitment to sustainable practices, every step reflects our dedication to quality, reliability, and customer satisfaction.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/learn_more"
                  onClick={handleNavigation}
                  className={`inline-block px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-[#A31621] text-white hover:bg-[#7a1018]'
                  }`}
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                  alt="Our Manufacturing Process"
                  className="w-full h-80 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;