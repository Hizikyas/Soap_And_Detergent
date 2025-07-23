'use client';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import MapSection from './MapSection';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-[#A31621]'} text-white py-12 transition-colors duration-300`} id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">CleanCo</h3>
              <MapSection darkMode={darkMode} />
              <p className="text-gray-300">
                Leading the way in innovative cleaning solutions for over 30 years.
              </p>
            </div>

            {/* Grouped right-side links with padding */}
            <div className="md:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 pl-4 md:pl-8">
              {/* Quick Links */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold">Quick Links</h4>
                <ul className="space-y-3">
                  <li><Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link></li>
                  <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors duration-300">Products</Link></li>
                  <li><Link href="/about_us" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</Link></li>
                  <li><Link href="/contact_us" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</Link></li>
                </ul>
              </div>

              {/* Products */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold">Products</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Laundry Detergent</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Dish Soap</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">All-Purpose Cleaner</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Eco-Friendly Line</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold">Contact Us</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail size={16} />
                    <span className="text-gray-300">info@cleanco.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={16} />
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={16} />
                    <span className="text-gray-300">123 Clean Street, Soap City, SC 12345</span>
                  </div>
                  <div className="flex space-x-4 mt-4">
                    <a href="#" aria-label="Facebook"><Facebook className="hover:text-blue-400 cursor-pointer transition-colors duration-300" size={20} /></a>
                    <a href="#" aria-label="Twitter"><Twitter className="hover:text-blue-400 cursor-pointer transition-colors duration-300" size={20} /></a>
                    <a href="#" aria-label="Instagram"><Instagram className="hover:text-pink-400 cursor-pointer transition-colors duration-300" size={20} /></a>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 CleanCo. All rights reserved. | <Link href="/privacy" className="hover:text-white">Privacy Policy</Link> | <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;