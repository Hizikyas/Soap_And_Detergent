
interface AboutUsProps {
  darkMode: boolean;
}

const AboutUs: React.FC<AboutUsProps> = ({ darkMode }) => {
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#FCF7F8]'} transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} relative inline-block transition-colors duration-300`}>
            About Us
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1 w-24 h-0.5 ${darkMode ? 'bg-white' : 'bg-[#A31621]'} transition-colors duration-300`}></div>
          </h1>
        </div>

        {/* Company Image */}
        <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg mb-12 relative">
          <img
            src="https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&dpr=1"
            alt="CleanCo Company"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Company Overview */}
        <div className="mb-12">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-lg transition-colors duration-300`}>
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} mb-6 transition-colors duration-300`}>
              Company Overview
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                    Founded:
                  </span>
                  <span className={`ml-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
                    1990
                  </span>
                </div>
                <div className="mb-4">
                  <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                    Employees:
                  </span>
                  <span className={`ml-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
                    2,500+
                  </span>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                    Location:
                  </span>
                  <span className={`ml-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
                    Soap City, SC
                  </span>
                </div>
                <div className="mb-4">
                  <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                    Products:
                  </span>
                  <span className={`ml-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
                    200+ Cleaning Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Objectives, Strategies */}
        <div className="space-y-8">
          {/* Vision */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-lg transition-colors duration-300`}>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} mb-4 transition-colors duration-300`}>
              Vision
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed transition-colors duration-300`}>
              To be the world's leading provider of innovative, sustainable cleaning solutions that enhance the quality 
              of life for families and communities while protecting our planet for future generations.
            </p>
          </div>

          {/* Mission */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-lg transition-colors duration-300`}>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} mb-4 transition-colors duration-300`}>
              Mission
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed transition-colors duration-300`}>
              We are committed to developing and manufacturing high-quality, environmentally responsible cleaning products 
              that deliver superior performance while ensuring the safety and well-being of our customers, employees, 
              and the environment.
            </p>
          </div>

          {/* Objectives */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-lg transition-colors duration-300`}>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} mb-4 transition-colors duration-300`}>
              Objectives
            </h3>
            <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed space-y-2 transition-colors duration-300`}>
              <li>• Achieve 25% market share in the premium cleaning products segment by 2030</li>
              <li>• Reduce environmental impact by 50% through sustainable manufacturing practices</li>
              <li>• Expand our product line to include 100% biodegradable formulations</li>
              <li>• Maintain customer satisfaction ratings above 95%</li>
              <li>• Foster innovation through continuous research and development</li>
            </ul>
          </div>

          {/* Strategies */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-lg transition-colors duration-300`}>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} mb-4 transition-colors duration-300`}>
              Strategies
            </h3>
            <ul className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed space-y-2 transition-colors duration-300`}>
              <li>• Invest in cutting-edge research and development facilities</li>
              <li>• Partner with environmental organizations to promote sustainability</li>
              <li>• Implement advanced quality control systems across all manufacturing processes</li>
              <li>• Expand distribution networks to reach underserved markets</li>
              <li>• Develop strategic partnerships with retail chains and e-commerce platforms</li>
              <li>• Focus on employee development and workplace safety initiatives</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;