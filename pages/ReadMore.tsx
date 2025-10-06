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

  useEffect(() => {
    console.log('ReadMore component mounted');
    return () => {
      console.log('ReadMore component unmounted');
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

      <div
        className={`min-h-screen ${
          darkMode ? 'bg-gray-900' : 'bg-[#FCF7F8]'
        } transition-colors duration-300`}
      >
        {/* Full-width Hero Image with Overlayed Back Button */}
        <div className="relative w-full h-[7rem] md:h-80 lg:h-[10rem] rounded-sm overflow-hidden">
          <img
            src="/read_more_logo.png"
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
              Mahpile General Business PLC, founded in 2016, is a locally established company based in Akaki Kality. The company focuses on producing and distributing quality household cleaning products that serve the needs of everyday consumers. With a strong commitment to local manufacturing, Mahpile General Business PLC strives to deliver reliable, affordable, and trusted products. Guided by a vision of growth and customer satisfaction, the company continues to strengthen its presence in the Ethiopian market.
            </p>

          </div>

          {/* Shareholders */}
          <div>
            <h2
              className={`text-2xl md:text-3xl font-bold ${
                darkMode ? 'text-white' : 'text-[#A31621]'
              } relative inline-block mb-6 transition-colors duration-300`}
            >
              Our Clients
            </h2>

            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
             Currently, Mahpile General Business PLC is expanding its reach by partnering with local clients to distribute its products across different towns in Ethiopia. Currently, the company’s authorized clients are:
             </p>

            <ol className="space-y-6">
              <li>
                <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-[#A31621]'}`}>
                1. Sualih Mohammed Ahimed
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Sualih Mohammed Ahimed has been granted representation  by Mahpile General Business PLC to sell its products. He distributes the products in Kombolcha, Dessie, and Beharbu.
                </p>
              </li>
              <li>
                <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-[#A31621]'}`}>
                2. Yidnekachew Melese Bedane
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Yidnekachew Melese Bedane holds permission  to sell the company's products and covers the towns of Hararige, Jijga, Fafen, and Wechale.
                </p>
              </li>
              <li>
                <h3 className={`font-semibold text-lg ${darkMode ? 'text-white' : 'text-[#A31621]'}`}>
                3. Emawaye Ayalew Kassa
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Emawaye Ayalew Kassa is authorized  to sell Mahpile's products in Woldia, Hara, and Kobo Mersa.
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