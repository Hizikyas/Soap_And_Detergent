'use client';
import { useEffect } from 'react';

interface LoaderProps {
  darkMode: boolean;
}

const Loader: React.FC<LoaderProps> = ({ darkMode }) => {
  // Debug log to detect multiple renders
  useEffect(() => {
    console.log('Loader component mounted');
    return () => {
      console.log('Loader component unmounted');
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="spinner relative inline-block w-[2rem] h-[2rem]">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="spinner-blade absolute left-[0.925em] bottom-0 w-[0.15em] h-[0.555em] rounded-[0.111em] bg-transparent transform-origin-center animate-spinner-fade"
            style={{
              animationDelay: `${index * 0.083}s`,
              transform: `rotate(${index * 30}deg)`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .transform-origin-center {
          transform-origin: center -0.444em;
        }

        @keyframes spinner-fade {
          0% {
            background-color: ${darkMode ? '#e5e7eb' : '#0F1113'};
          }
          100% {
            background-color: transparent;
          }
        }

        .animate-spinner-fade {
          animation: spinner-fade 1s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default Loader;