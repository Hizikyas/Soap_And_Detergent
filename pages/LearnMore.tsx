'use client';

import Link from 'next/link';
import { ArrowLeft, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface LearnMoreProps {
  darkMode: boolean;
}

const LearnMore = ({ darkMode }: LearnMoreProps) => {
  const historyTimeline = [
    {
      year: '1990',
      title: 'CleanCo Founded',
      description: 'CleanCo established as a small family business with a vision to create superior cleaning products.',
      image: 'https://images.pexels.com/photos/4239010/pexels-photo-4239010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    },
    {
      year: '1995',
      title: 'First Manufacturing Plant',
      description: 'Opened our first state-of-the-art manufacturing facility in Soap City, SC.',
      image: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    },
    {
      year: '2005',
      title: 'Eco-Friendly Initiative',
      description: 'Launched our first line of environmentally sustainable cleaning products.',
      image: 'https://images.pexels.com/photos/4239011/pexels-photo-4239011.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    },
    {
      year: '2023',
      title: 'National Expansion',
      description: 'Expanded operations nationwide with distribution centers across the country.',
      image: 'https://images.pexels.com/photos/4239014/pexels-photo-4239014.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    },
    {
      year: '2025',
      title: 'Innovation ',
      description: 'Today, CleanCo stands as a leader in innovative, sustainable cleaning solutions.',
      image: 'https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
    },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#FCF7F8]'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/"
          className={`inline-flex items-center gap-2 ${darkMode ? 'text-white hover:text-gray-300' : 'text-[#A31621] hover:text-[#7a1018]'} transition-colors duration-300 mb-8`}
        >
          <ArrowLeft size={20} />
          Go Back
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
              alt="CEO Portrait"
              className="w-full h-96 object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-xl relative transition-colors duration-300`}
          >
            <Quote className={`${darkMode ? 'text-gray-600' : 'text-gray-300'} absolute top-4 right-4`} size={48} />
            <blockquote className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6 italic`}>
              "CleanCo represents more than just cleaning products — we embody a commitment to excellence, sustainability, and innovation..."
            </blockquote>
            <div className="border-t pt-4">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'}`}>SARAH JOHNSON</h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} font-medium`}>CHIEF EXECUTIVE OFFICER</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} text-center relative inline-block w-full mb-12`}
        >
          <span className="relative">
            Our History
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1 w-20 h-0.5 ${darkMode ? 'bg-white' : 'bg-[#A31621]'}`} />
          </span>
        </motion.h2>

        <div className="relative">
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`} />
          {historyTimeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${darkMode ? 'bg-white' : 'bg-[#A31621]'} rounded-full border-4 ${darkMode ? 'border-gray-900' : 'border-[#FCF7F8]'} z-10`} />

              <motion.div
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
              >
                <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg`}>
                  <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} mb-2`}>{item.year}</div>
                  <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-[#A31621]'} mb-3`}>{item.title}</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.description}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 mt-20"
        >
          {['Quality', 'Innovation', 'Sustainability'].map((value, i) => {
            const text = [
              'Uncompromising commitment to the highest quality standards.',
              'Continuously developing cutting-edge solutions.',
              'Protecting our planet through responsible practices.',
            ][i];
            return (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-xl shadow-lg text-center mb-[4rem]`}
              >
                <div className={`w-16 h-16 ${darkMode ? 'bg-white' : 'bg-[#A31621]'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className={`text-2xl font-bold ${darkMode ? 'text-gray-800' : 'text-white'}`}>{value.charAt(0)}</span>
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-[#A31621]'} mb-3`}>{value}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{text}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default LearnMore;
