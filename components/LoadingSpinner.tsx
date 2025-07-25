'use client'; // Needed if you're using Next.js App Router and this component uses interactivity

import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  darkMode: boolean;
}

const LoadingSpinner = ({ darkMode }: LoadingSpinnerProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black bg-opacity-20">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-2xl flex flex-col items-center transition-colors duration-300`}>
        <Loader2
          className={`${darkMode ? 'text-white' : 'text-[#A31621]'} animate-spin mb-4 transition-colors duration-300`}
          size={48}
        />
        <div className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-[#A31621]'} transition-colors duration-300`}>
          Loading...
        </div>
        <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2 transition-colors duration-300`}>
          Please wait a moment
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
