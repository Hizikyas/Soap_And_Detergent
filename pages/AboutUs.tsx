'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

interface AboutUsProps {
  darkMode: boolean;
}

const AboutUs: React.FC<AboutUsProps> = ({ darkMode }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  const handleLinkClick = () => {
    setLoading(true);
  };

  useEffect(() => {
    console.log('AboutUs component mounted');
    return () => {
      console.log('AboutUs component unmounted');
    };
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#FCF7F8]'} transition-colors duration-300`}>
      {/* Header Image */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full h-64 md:h-80 overflow-hidden shadow-lg mb-12 relative"
      >
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
      </motion.div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} relative inline-block transition-colors duration-300`}>
            About Us
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1 w-24 h-0.5 ${darkMode ? 'bg-white' : 'bg-[#A31621]'} transition-colors duration-300`}></div>
          </h1>
        </motion.div>

        {/* Company Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}
        >
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}
          >
            Our Story
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="leading-relaxed"
          >
            Mahpile General Business PLC was founded in 2016 in Addis Ababa, Ethiopia. 
            The company began its journey by producing Ajax and has since expanded its product line to include kitchen detergents, laundry detergents, and various soap products. 
            Mahpile is committed to delivering affordable, effective, and high-quality cleaning solutions that cater to the needs of Ethiopian households while supporting local manufacturing and employment.
          </motion.p>

          <motion.h3 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}
          >
            Vision
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="leading-relaxed"
          >
            To become a leading manufacturer of trusted cleaning and personal care products in Ethiopia, recognized for quality, affordability, and sustainability.
          </motion.p>

          <motion.h3 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}
          >
            Mission
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="leading-relaxed"
          >
            To provide locally made, effective, and environmentally safe cleaning and hygiene products that improve the quality of everyday life and strengthen Ethiopia’s industrial growth.
          </motion.p>

          <motion.h3 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}
          >
            Objectives
          </motion.h3>
          <motion.ul 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="leading-relaxed space-y-2 list-disc list-inside"
          >
            <li>Expand product variety and accessibility across Ethiopia.</li>
            <li>Maintain consistent quality through innovation and technology.</li>
            <li>Encourage sustainable and responsible production practices.</li>
            <li>Support local suppliers and create employment opportunities.</li>
            <li>Build long-term trust with customers through reliability and service.</li>
          </motion.ul>

          <motion.h3 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}
          >
            Strategies
          </motion.h3>
          <motion.ul 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="leading-relaxed space-y-2 list-disc list-inside"
          >
            <li>Invest in modern equipment and continuous process improvement.</li>
            <li>Strengthen brand recognition through customer-centered marketing.</li>
            <li>Prioritize eco-friendly materials and waste reduction initiatives.</li>
            <li>Develop strong partnerships with retailers and distributors nationwide.</li>
            <li>Empower employees through training and inclusive workplace culture.</li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
