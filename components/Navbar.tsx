'use client';
import Link from 'next/link';
import { Home, Package, Store, Users, Phone, Sun, Moon, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Helper function to determine if a link is active
  const isActive = (href: string) => {
    return pathname === href;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 1200) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/products', label: 'Our Products', icon: Package },
    { href: '/stores', label: 'Store', icon: Store },
    { href: '/about_us', label: 'About Us', icon: Users },
    { href: '/contact_us', label: 'Contact Us', icon: Phone },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`sticky top-[0.8rem] z-50 ${darkMode ? 'bg-[#101828a0] backdrop-blur-lg' : 'bg-[#fcf7f8ab] backdrop-blur-lg'} mb-[1.5rem] rounded-3xl max-w-[75rem] mx-auto shadow-lg transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}>
                CleanCo
              </Link>
            </div>

            {/* Desktop Navigation Links and Dark Mode Toggle */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`${isActive(link.href) ? (darkMode ? 'text-[#ed4250]' : 'text-black') : (darkMode ? 'text-gray-400 hover:text-white' : 'text-[#a31622c0] hover:text-[#7a1018]')} px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-2`}
                  >
                    <link.icon size={16} />
                    {link.label}
                  </Link>
                ))}
              </div>
              {/* Dark Mode Toggle for Large Screens */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-[#A31621] text-white'} transition-all duration-300 hover:scale-110`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Hamburger Menu Button (visible on small/medium screens) */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-lg ${darkMode ? 'text-white hover:bg-gray-700' : 'text-[#A31621] hover:bg-gray-100'} transition-all duration-300`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu (visible when hamburger is clicked) */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`${isActive(link.href) ? (darkMode ? 'text-white bg-gray-700' : 'text-[#7a1018] bg-gray-100') : (darkMode ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-[#A31621] hover:bg-gray-100 hover:text-[#7a1018]')} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 flex items-center gap-2`}
                    >
                      <link.icon size={16} />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Dark Mode Toggle (sticky bottom on small/medium screens) */}
      <motion.button
        onClick={toggleDarkMode}
        className={`fixed bottom-4 right-4 p-3 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-[#A31621] text-white'} transition-all duration-300 hover:scale-110 shadow-lg lg:hidden z-50`}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </motion.button>
    </>
  );
};

export default Navbar;