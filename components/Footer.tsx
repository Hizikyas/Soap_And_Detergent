'use client';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import MapSection from './MapSection';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  // Handle navigation state
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  const handleNavigation = () => {
    setIsNavigating(true);
  };


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

      <footer className={`${darkMode ? 'bg-[#3d3c3c]/50' : 'bg-[#A31621]'} text-white py-12 transition-colors duration-300`} id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
                  <img src={'/Logo1.png'} alt="Company Logo" className="h-25 w-auto rounded-[5px]" />
              <MapSection darkMode={darkMode} />
              <p className="text-gray-300">
                Since 2016.
              </p>
            </div>

            {/* Grouped right-side links with padding */}
            <div className="md:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 pl-4 md:pl-8">
              {/* Quick Links */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/"
                      onClick={handleNavigation}
                      className="inline-block text-gray-300 hover:text-white transform hover:translate-x-4 transition-all duration-300 linear"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      onClick={handleNavigation}
                      className="inline-block text-gray-300 hover:text-white transform hover:translate-x-4 transition-all duration-300 linear"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/stores"
                      onClick={handleNavigation}
                      className="inline-block text-gray-300 hover:text-white transform hover:translate-x-4 transition-all duration-300 linear"
                    >
                      Store
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about_us"
                      onClick={handleNavigation}
                      className="inline-block text-gray-300 hover:text-white transform hover:translate-x-4 transition-all duration-300 linear"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact_us"
                      onClick={handleNavigation}
                      className="inline-block text-gray-300 hover:text-white transform hover:translate-x-2 transition-all duration-300 linear"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Products */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold">Products</h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="/products/ultra-clean-detergent"
                      className="inline-block text-gray-300 hover:text-white transform hover:translate-x-4 transition-all duration-400 linear"
                    >
                      Ultra Clean Detergent
                    </a>
                  </li>
                  <li>
                    <a
                      href="/products/Ajax"
                      className="inline-block text-gray-300 hover:text-white transform hover:translate-x-3 transition-all duration-400 linear"
                    >
                      Ajax
                    </a>
                  </li>
                  <li>
                    <a
                      href="/products/dishwashing-detergent"
                      className="inline-block text-gray-300 hover:text-white transform hover:translate-x-4 transition-all duration-400 linear"
                    >
                      Dishwashing detergent
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold">Contact Us</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail size={16} />
                    <span className="text-gray-300">info@mahpile.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={16} />
                    <span className="text-gray-300">+251 912-977-545</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={16} />
                    <span className="text-gray-300">Akaki kality, Addis ababa, Ethiopia</span>
                  </div>
                  <div className="flex space-x-4 mt-4">
                    <a
                      href="https://web.facebook.com/"
                      target="_blank"
                      aria-label="Facebook"
                      className="inline-block transform hover:translate-y-1 transition-all duration-300 linear"
                    >
                      <Facebook className="text-gray-300 hover:text-blue-400 cursor-pointer" size={20} />
                    </a>
                    <a
                      href="https://x.com/"
                      target="_blank"
                      aria-label="X"
                      className="inline-block transform hover:translate-y-1 transition-all duration-300 linear"
                    >
                      <FaXTwitter className="text-gray-300 hover:text-black cursor-pointer" size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/biruk_gizaw21/"
                      target="_blank"
                      aria-label="Instagram"
                      className="inline-block transform hover:translate-y-1 transition-all duration-300 linear"
                    >
                      <Instagram className="text-gray-300 hover:text-orange-300 cursor-pointer" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 Mahpile General Business PLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;