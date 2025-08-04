'use client';
import { useEffect } from 'react';

interface AboutUsProps {
  darkMode: boolean;
}

const AboutUs: React.FC<AboutUsProps> = ({ darkMode }) => {
  // Debug log to detect multiple renders
  useEffect(() => {
    console.log('AboutUs component mounted');
    return () => {
      console.log('AboutUs component unmounted');
    };
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#FCF7F8]'} transition-colors duration-300`}>
      {/* Full-width Image Section */}
      <div className="w-full h-64 md:h-80 overflow-hidden shadow-lg mb-12 relative">
        <img
          src="https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1"
          alt="CleanCo Company"
          className="w-full h-full object-cover opacity-0 animate-[fadeIn_1s_ease-out_forwards]"
          sizes="100vw"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} relative inline-block transition-colors duration-300 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]`}>
            About Us
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1 w-24 h-0.5 ${darkMode ? 'bg-white' : 'bg-[#A31621]'} transition-colors duration-300`}></div>
          </h1>
        </div>

        {/* Company Passage */}
        <div className={`space-y-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards] delay-100`}>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}>
            Our Story
          </h2>
          <p className="leading-relaxed">
            Founded in 1990 in Soap City, SC, CleanCo has grown to become a leader in innovative cleaning solutions, employing over 2,500 dedicated professionals and offering more than 200 high-quality products. Our commitment to excellence drives us to deliver superior cleaning solutions that enhance the lives of families and communities worldwide.
          </p>
          <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}>
            Vision
          </h3>
          <p className="leading-relaxed">
            We envision being the world’s leading provider of sustainable cleaning solutions, enhancing quality of life while protecting our planet for future generations.
          </p>
          <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}>
            Mission
          </h3>
          <p className="leading-relaxed">
            CleanCo is dedicated to developing environmentally responsible cleaning products that deliver outstanding performance, ensuring the safety and well-being of our customers, employees, and the environment.
          </p>
          <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}>
            Objectives
          </h3>
          <ul className="leading-relaxed space-y-2 list-disc list-inside">
            <li>Achieve 25% market share in the premium cleaning products segment by 2030.</li>
            <li>Reduce environmental impact by 50% through sustainable manufacturing practices.</li>
            <li>Expand our product line to include 100% biodegradable formulations.</li>
            <li>Maintain customer satisfaction ratings above 95%.</li>
            <li>Foster innovation through continuous research and development.</li>
          </ul>
          <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}>
            Strategies
          </h3>
          <ul className="leading-relaxed space-y-2 list-disc list-inside">
            <li>Invest in cutting-edge research and development facilities.</li>
            <li>Partner with environmental organizations to promote sustainability.</li>
            <li>Implement advanced quality control systems across all manufacturing processes.</li>
            <li>Expand distribution networks to reach underserved markets.</li>
            <li>Develop strategic partnerships with retail chains and e-commerce platforms.</li>
            <li>Focus on employee development and workplace safety initiatives.</li>
          </ul>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .delay-100 {
          animation-delay: 100ms;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;