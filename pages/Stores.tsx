import { MapPin, Phone, Clock } from 'lucide-react';

interface StoresProps {
  darkMode: boolean;
}

const Stores: React.FC<StoresProps> = ({ darkMode }) => {
  const stores = [
    {
      id: 1,
      name: 'CleanCo Downtown',
      address: '123 Main Street, Downtown, SC 12345',
      phone: '+1 (555) 123-4567',
      hours: 'Mon-Sat: 9AM-8PM, Sun: 10AM-6PM'
    },
    {
      id: 2,
      name: 'CleanCo Mall Plaza',
      address: '456 Shopping Center Blvd, Mall Plaza, SC 12346',
      phone: '+1 (555) 234-5678',
      hours: 'Mon-Sat: 10AM-9PM, Sun: 11AM-7PM'
    },
    {
      id: 3,
      name: 'CleanCo Westside',
      address: '789 West Avenue, Westside, SC 12347',
      phone: '+1 (555) 345-6789',
      hours: 'Mon-Fri: 8AM-7PM, Sat-Sun: 9AM-6PM'
    },
    {
      id: 4,
      name: 'CleanCo Northgate',
      address: '321 North Gate Drive, Northgate, SC 12348',
      phone: '+1 (555) 456-7890',
      hours: 'Mon-Sat: 9AM-8PM, Sun: 10AM-5PM'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#FCF7F8]'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} relative inline-block transition-colors duration-300`}>
            Stores
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1 w-20 h-0.5 ${darkMode ? 'bg-white' : 'bg-[#A31621]'} transition-colors duration-300`}></div>
          </h1>
        </div>

        {/* Interactive Map */}
        <div className="mb-12">
          <div className={`w-full h-96 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden transition-colors duration-300`}>
            <div className="text-center">
              <MapPin className={`mx-auto mb-4 ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`} size={48} />
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors duration-300`}>
                Interactive Map
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} transition-colors duration-300`}>
                Store locations with red markers
              </p>
            </div>
            
            {/* Simulated Map Markers */}
            <div className="absolute top-16 left-20 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-24 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-32 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute bottom-24 right-20 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Store List */}
        <div className="grid md:grid-cols-2 gap-8">
          {stores.map((store) => (
            <div 
              key={store.id}
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105`}
            >
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} mb-4 transition-colors duration-300`}>
                {store.name}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1 transition-colors duration-300`} size={16} />
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                    {store.address}
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`} size={16} />
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                    {store.phone}
                  </span>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1 transition-colors duration-300`} size={16} />
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                    {store.hours}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stores;