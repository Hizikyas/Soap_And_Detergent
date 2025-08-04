'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Loader from '../components/Loading';

interface WhoWeAreProps {
  darkMode: boolean;
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ darkMode }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  // Reset loading state when navigation completes
  useEffect(() => {
    setLoading(false);
  }, [pathname]);

  // Handle link click to trigger loader
  const handleLinkClick = () => {
    setLoading(true);
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
                At CleanCo, we've been pioneering innovative cleaning solutions for over three decades.
                Our commitment to excellence drives us to create products that not only deliver superior
                cleaning power but also care for your family and the environment.
              </p>
              <p
                className={`text-lg leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-[#A31621]'
                } transition-colors duration-300`}
              >
                From our state-of-the-art manufacturing facilities to our rigorous quality control processes,
                every step reflects our dedication to creating the finest soap and detergent products available.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  darkMode
                    ? 'bg-white text-gray-800 hover:bg-gray-200'
                    : 'bg-[#A31621] text-white hover:bg-[#7a1018]'
                } px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg`}
              >
                <Link href="/learn_more" onClick={handleLinkClick}>
                  Learn More
                </Link>
              </motion.button>
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

              {/* Decorative Circles */}
              {/* <div
                className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-20 ${
                  darkMode ? 'bg-white' : 'bg-[#A31621]'
                }`}
              ></div>
              <div
                className={`absolute -top-6 -left-6 w-16 h-16 rounded-full opacity-15 ${
                  darkMode ? 'bg-white' : 'bg-[#A31621]'
                }`}
              ></div> */}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;