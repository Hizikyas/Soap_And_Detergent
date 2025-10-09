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
  // Debug log to detect multiple renders
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
      {/* Full-width Image Section */}
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
        {/* Page Title */}
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

        {/* Company Passage */}
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
            viewport={{ once: true, margin: "-50px" }}
            className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}
          >
            Our Story
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="leading-relaxed"
          >
            Founded in 1990 in Soap City, SC, CleanCo has grown to become a leader in innovative cleaning solutions, employing over 2,500 dedicated professionals and offering more than 200 high-quality products. Our commitment to excellence drives us to deliver superior cleaning solutions that enhance the lives of families and communities worldwide.
          </motion.p>
          
          <motion.h3 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}
          >
            Vision
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="leading-relaxed"
          >
            We envision being the world's leading provider of sustainable cleaning solutions, enhancing quality of life while protecting our planet for future generations.
          </motion.p>
          
          <motion.h3 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}
          >
            Mission
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="leading-relaxed"
          >
            CleanCo is dedicated to developing environmentally responsible cleaning products that deliver outstanding performance, ensuring the safety and well-being of our customers, employees, and the environment.
          </motion.p>
          
          <motion.h3 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}
          >
            Objectives
          </motion.h3>
          <motion.ul 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="leading-relaxed space-y-2 list-disc list-inside"
          >
            <li>Achieve 25% market share in the premium cleaning products segment by 2030.</li>
            <li>Reduce environmental impact by 50% through sustainable manufacturing practices.</li>
            <li>Expand our product line to include 100% biodegradable formulations.</li>
            <li>Maintain customer satisfaction ratings above 95%.</li>
            <li>Foster innovation through continuous research and development.</li>
          </motion.ul>
          
          <motion.h3 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}
          >
            Strategies
          </motion.h3>
          <motion.ul 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="leading-relaxed space-y-2 list-disc list-inside"
          >
            <li>Invest in cutting-edge research and development facilities.</li>
            <li>Partner with environmental organizations to promote sustainability.</li>
            <li>Implement advanced quality control systems across all manufacturing processes.</li>
            <li>Expand distribution networks to reach underserved markets.</li>
            <li>Develop strategic partnerships with retail chains and e-commerce platforms.</li>
            <li>Focus on employee development and workplace safety initiatives.</li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;