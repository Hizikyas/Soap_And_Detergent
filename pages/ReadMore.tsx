import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

interface ReadMoreProps {
  darkMode: boolean;
}

const ReadMore: React.FC<ReadMoreProps> = ({ darkMode }) => {
  const shareholders = [
    { name: 'John Smith', percentage: '35%', role: 'Founder & CEO' },
    { name: 'Sarah Johnson', percentage: '25%', role: 'Co-Founder' },
    { name: 'Michael Brown', percentage: '20%', role: 'Lead Investor' },
    { name: 'Investment Group LLC', percentage: '15%', role: 'Corporate Investor' },
    { name: 'Employee Stock Options', percentage: '5%', role: 'Employee Ownership' }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#FCF7F8]'} transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Go Back Button */}
        <Link 
          href="/"
          className={`inline-flex items-center gap-2 ${darkMode ? 'text-white hover:text-gray-300' : 'text-[#A31621] hover:text-[#7a1018]'} transition-colors duration-300 mb-8`}
        >
          <ArrowLeft size={20} />
          Go Back
        </Link>

        {/* Hero Image */}
        <div className="w-full h-40 rounded-lg overflow-hidden shadow-lg mb-8 relative">
          <Image
            src="https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&dpr=1"
            alt="Company Overview"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Company Overview */}
        <div className="mb-12">
          <h1 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} relative inline-block mb-6 transition-colors duration-300`}>
            Company Overview
            <div className={`absolute -bottom-2 left-0 w-20 h-0.5 ${darkMode ? 'bg-white' : 'bg-[#A31621]'} transition-colors duration-300`}></div>
          </h1>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
            CleanCo has been at the forefront of the cleaning industry for over three decades, revolutionizing how families 
            and businesses approach cleanliness and hygiene. Founded in 1990 with a simple mission to create effective, 
            safe, and environmentally responsible cleaning solutions, we have grown from a small startup to a leading 
            manufacturer serving millions of customers worldwide.
          </p>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-4 transition-colors duration-300`}>
            Our state-of-the-art manufacturing facilities utilize cutting-edge technology and sustainable practices to 
            produce a comprehensive range of cleaning products. From powerful laundry detergents to gentle personal care 
            items, every product undergoes rigorous testing to ensure it meets our high standards for quality, safety, 
            and environmental responsibility.
          </p>
        </div>

        {/* Shareholders */}
        <div>
          <h2 className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} relative inline-block mb-6 transition-colors duration-300`}>
            Shareholders
            <div className={`absolute -bottom-2 left-0 w-16 h-0.5 ${darkMode ? 'bg-white' : 'bg-[#A31621]'} transition-colors duration-300`}></div>
          </h2>
          <div className="space-y-4">
            {shareholders.map((shareholder, index) => (
              <div 
                key={index}
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-colors duration-300`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}>
                      {shareholder.name}
                    </h3>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`}>
                      {shareholder.role}
                    </p>
                  </div>
                  <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}>
                    {shareholder.percentage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;