'use client';
import Link from 'next/link';
import { Home, Package, Store, Users, Phone, Sun, Moon } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const pathname = usePathname();

  // Helper function to determine if a link is active
  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-[#FCF7F8]'} shadow-lg transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}>
              CleanCo
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/" 
                className={`${isActive('/') ? (darkMode ? 'text-white' : 'text-[#7a1018]') : (darkMode ? 'text-gray-300 hover:text-white' : 'text-[#A31621] hover:text-[#7a1018]')} px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-2`}
              >
                <Home size={16} />
                Home
              </Link>
              <Link 
                href="/products" 
                className={`${isActive('/products') ? (darkMode ? 'text-white' : 'text-[#7a1018]') : (darkMode ? 'text-gray-300 hover:text-white' : 'text-[#A31621] hover:text-[#7a1018]')} px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-2`}
              >
                <Package size={16} />
                Our Products
              </Link>
              <Link 
                href="/stores" 
                className={`${isActive('/stores') ? (darkMode ? 'text-white' : 'text-[#7a1018]') : (darkMode ? 'text-gray-300 hover:text-white' : 'text-[#A31621] hover:text-[#7a1018]')} px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-2`}
              >
                <Store size={16} />
                Store
              </Link>
              <Link 
                href="/about_us" 
                className={`${isActive('/about_us') ? (darkMode ? 'text-white' : 'text-[#7a1018]') : (darkMode ? 'text-gray-300 hover:text-white' : 'text-[#A31621] hover:text-[#7a1018]')} px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-2`}
              >
                <Users size={16} />
                About Us
              </Link>
              <Link 
                href="/contact_us" 
                className={`${isActive('/contact_us') ? (darkMode ? 'text-white' : 'text-[#7a1018]') : (darkMode ? 'text-gray-300 hover:text-white' : 'text-[#A31621] hover:text-[#7a1018]')} px-3 py-2 text-sm font-medium transition-colors duration-300 flex items-center gap-2`}
              >
                <Phone size={16} />
                Contact Us
              </Link>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-[#A31621] text-white'} transition-all duration-300 hover:scale-110`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;