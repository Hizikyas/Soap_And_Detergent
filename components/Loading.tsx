'use client';
import { useEffect } from 'react';

const Loader: React.FC = () => {
  // Debug log to detect multiple renders
  useEffect(() => {
    console.log('Loader component mounted');
    return () => {
      console.log('Loader component unmounted');
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="spinner relative inline-block w-[50px] h-[50px]">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="spinner-blade absolute left-[0.4629em] bottom-0 w-[0.074em] h-[0.2777em] rounded-[0.0555em] bg-transparent transform-origin-center animate-spinner-fade"
            style={{
              animationDelay: `${index * 0.083}s`,
              transform: `rotate(${index * 30}deg)`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .transform-origin-center {
          transform-origin: center -0.2222em;
        }

        @keyframes spinner-fade {
          0% {
            background-color: #69717d;
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