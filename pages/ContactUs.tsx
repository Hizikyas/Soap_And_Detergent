import { useState } from 'react';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

interface ContactUsProps {
  darkMode: boolean;
}

const ContactUs: React.FC<ContactUsProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ fullName: '', email: '', phone: '', message: '' });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#FCF7F8]'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} relative inline-block transition-colors duration-300`}>
            Contact Us
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1 w-28 h-0.5 ${darkMode ? 'bg-white' : 'bg-[#A31621]'} transition-colors duration-300`}></div>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            {/* Sales Queries */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-lg transition-colors duration-300`}>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} mb-6 transition-colors duration-300`}>
                Sales Queries
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`} size={20} />
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`} size={20} />
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                    sales@cleanco.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`} size={20} />
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                    www.cleanco.com/sales
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1 transition-colors duration-300`} size={20} />
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                    123 Clean Street, Sales Department<br />
                    Soap City, SC 12345
                  </span>
                </div>
              </div>
            </div>

            {/* General Enquiries */}
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-lg transition-colors duration-300`}>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} mb-6 transition-colors duration-300`}>
                General Enquiries
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`} size={20} />
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                    +1 (555) 987-6543
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`} size={20} />
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                    info@cleanco.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300`} size={20} />
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                    www.cleanco.com/support
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-1 transition-colors duration-300`} size={20} />
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-300`}>
                    123 Clean Street, Customer Service<br />
                    Soap City, SC 12345
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-lg transition-colors duration-300`}>
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} mb-6 transition-colors duration-300`}>
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="fullName" 
                  className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2 transition-colors duration-300`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-[#A31621] focus:border-transparent transition-colors duration-300`}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2 transition-colors duration-300`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-[#A31621] focus:border-transparent transition-colors duration-300`}
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label 
                  htmlFor="phone" 
                  className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2 transition-colors duration-300`}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-[#A31621] focus:border-transparent transition-colors duration-300`}
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2 transition-colors duration-300`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:ring-2 focus:ring-[#A31621] focus:border-transparent transition-colors duration-300 resize-none`}
                  placeholder="Enter your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#A31621] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#7a1018] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;