import React from 'react';

interface WhoWeAreProps {
  darkMode: boolean;
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ darkMode }) => {
  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-[#FCF7F8]'} transition-colors duration-300`} id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} relative inline-block transition-colors duration-300`}>
            Who We Are
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1 w-20 h-0.5 ${darkMode ? 'bg-white' : 'bg-[#A31621]'} transition-colors duration-300`}></div>
          </h2>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-[#A31621]'} transition-colors duration-300`}>
              At CleanCo, we've been pioneering innovative cleaning solutions for over three decades. 
              Our commitment to excellence drives us to create products that not only deliver superior 
              cleaning power but also care for your family and the environment.
            </p>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-[#A31621]'} transition-colors duration-300`}>
              From our state-of-the-art manufacturing facilities to our rigorous quality control processes, 
              every step reflects our dedication to creating the finest soap and detergent products available.
            </p>
            <button className={`${darkMode ? 'bg-white text-gray-800 hover:bg-gray-200' : 'bg-[#A31621] text-white hover:bg-[#7a1018]'} px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
              Learn More
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Our Manufacturing Process"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;