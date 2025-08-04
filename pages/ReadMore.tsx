'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import Loader from '../components/Loading';

interface ReadMoreProps {
  darkMode: boolean;
}

const ReadMore: React.FC<ReadMoreProps> = ({ darkMode }) => {
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
    console.log('ReadMore component mounted');
    return () => {
      console.log('ReadMore component unmounted');
    };
  }, []);

  const shareholders = [
    {
      name: 'John Smith',
      percentage: '35%',
      role: 'Founder & CEO',
      description:
        'Investment firm founded to “focus on growth capital in small and medium sized companies with superior return potential” in Ethiopia and greater East Africa.',
    },
    {
      name: 'Sarah Johnson',
      percentage: '25%',
      role: 'Co-Founder',
      description:
        'Instrumental in shaping CleanCo’s vision and strategy with hands-on operational expertise.',
    },
    {
      name: 'Michael Brown',
      percentage: '20%',
      role: 'Lead Investor',
      description:
        'Provides capital and strategic insight from years of experience in manufacturing industries.',
    },
    {
      name: 'Investment Group LLC',
      percentage: '15%',
      role: 'Corporate Investor',
      description:
        'Focuses on emerging markets and scalable enterprises with long-term growth perspectives.',
    },
    {
      name: 'Employee Stock Options',
      percentage: '5%',
      role: 'Employee Ownership',
      description:
        'Represents collective ownership by CleanCo employees to promote shared success.',
    },
  ];

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

      <div
        className={`min-h-screen ${
          darkMode ? 'bg-gray-900' : 'bg-[#FCF7F8]'
        } transition-colors duration-300`}
      >
        {/* Full-width Hero Image with Overlayed Back Button */}
        <div className="relative w-full h-[7rem] md:h-80 lg:h-[10rem] rounded-sm overflow-hidden">
          <img
            src="https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&dpr=1"
            alt="Company Overview"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <Link
            href="/"
            onClick={handleLinkClick}
            className="absolute top-5 left-6 z-10 inline-flex items-center gap-2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 pl-3 pr-4 transition-all duration-300 hover:scale-110"
            aria-label="Go back to home"
          >
            <ArrowLeft className={`${darkMode ? 'text-gray-900' : 'text-[#A31621]'} transition-colors duration-300`} size={24} />
            <span className={`${darkMode ? 'text-gray-900' : 'text-[#A31621]'} font-medium transition-colors duration-300`}>Go Back</span>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto px-4 my-[3rem] sm:px-6 lg:px-8 py-8">
          {/* Company Overview */}
          <div className="mb-12">
            <h1
              className={`text-3xl md:text-4xl font-bold  ${
                darkMode ? 'text-white' : 'text-[#A31621]'
              } relative inline-block mb-[2rem] transition-colors duration-300`}
            >
              Company Overview
            </h1>
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              } transition-colors duration-300`}
            >
              CleanCo has been at the forefront of the cleaning industry for over three decades, revolutionizing how families
              and businesses approach cleanliness and hygiene. Founded in 1990 with a simple mission to create effective,
              safe, and environmentally responsible cleaning solutions, we have grown from a small startup to a leading
              manufacturer serving millions of customers worldwide.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              } mt-4 transition-colors duration-300`}
            >
              Our state-of-the-art manufacturing facilities utilize cutting-edge technology and sustainable practices to
              produce a comprehensive range of cleaning products. From powerful laundry detergents to gentle personal care
              items, every product undergoes rigorous testing to ensure it meets our high standards for quality, safety,
              and environmental responsibility.
            </p>
          </div>

          {/* Shareholders */}
          <div>
            <h2
              className={`text-2xl md:text-3xl font-bold ${
                darkMode ? 'text-white' : 'text-[#A31621]'
              } relative inline-block mb-6 transition-colors duration-300`}
            >
              Shareholders
            </h2>

            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Currently Ethio-Asian is partnering up with Zoscales Partners (ZP) to meet its objective of becoming strong player within the personal care space by aspiring the right niche market of the lower and middle income class of Ethiopia. Currently, the shareholders of the company are:
            </p>

            <ol className="space-y-6">
              <li>
                <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-[#A31621]'}`}>
                1. Zoscales Partners
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Investment firm founded to “focus on growth capital in small and medium sized companies with superior return potential” in Ethiopia and greater East Africa.
                </p>
              </li>
              <li>
                <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-[#A31621]'}`}>
                2. East African Holdings S.C.
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  East African Holdings and East Africa Group – East African Holdings S.C is the most experienced company in the country, operates in various sectors including manufacturing, agriculture, agro-processing, printing, packaging, real estate and import/export.
                </p>
              </li>
              <li>
                <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-[#A31621]'}`}>
                3. B.S. Shetty
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  B. S. Shetty started his career in 1980 with the Britannia and Nutrine group (biggest biscuit and confectionary manufacturer in India). He has over 38 years experience with over 28 years in East and Sub Saharan Africa. (Kenya, Tanzania, Uganda, Ethiopia).
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadMore;