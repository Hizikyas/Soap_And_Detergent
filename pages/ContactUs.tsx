"use client";

import { useState } from 'react';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

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
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    if (!formData.fullName || !formData.email || !formData.message) {
      setError('Please fill out all required fields.');
      setIsSubmitting(false);
      return;
    }
    if (formData.message.length > 1000) {
      setError('Message must be 1000 characters or less.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      alert('Thank you for your message! It has been sent to our team.');
      setFormData({ fullName: '', email: '', phone: '', message: '' });
    } catch (err) {
      setError('Failed to send your message. Please try again later.');
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#FCF7F8]'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} relative inline-block transition-colors duration-300`}>
            Contact Us
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1 w-28 h-0.5 ${darkMode ? 'bg-white' : 'bg-[#A31621]'} transition-colors duration-300`}></div>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Sales Queries */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-lg transition-colors duration-300`}
            >
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
            </motion.div>

            {/* General Enquiries */}
            {/* <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-lg transition-colors duration-300`}>
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
            </div> */}

          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-lg transition-colors duration-300`}
          >
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

              {error && (
                <p className={`text-sm ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full ${isSubmitting ? 'bg-gray-500' : 'bg-[#A31621]'} text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 ${!isSubmitting && 'hover:bg-[#7a1018] hover:scale-105 hover:shadow-lg'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;