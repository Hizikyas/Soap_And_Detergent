'use client';
import React, { useState, useEffect, createContext, useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { usePathname } from 'next/navigation';

const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export function useDarkMode() {
  return useContext(DarkModeContext);
}

interface ClientProviderProps {
  children: React.ReactNode;
}

const ClientProvider: React.FC<ClientProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#FCF7F8] transition-colors duration-300">
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#A31621]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-[#FCF7F8]"} transition-colors duration-300`}>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main key={pathname}>{children}</main>
        <Footer darkMode={darkMode} />
      </DarkModeContext.Provider>
    </div>
  );
};

export default ClientProvider; 