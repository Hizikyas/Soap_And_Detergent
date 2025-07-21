'use client';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, { useState, useEffect, createContext, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

export function useDarkMode() {
  return useContext(DarkModeContext);
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
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

  return (
    <html lang="en" className={`${darkMode ? "dark" : ""}`}>
      <body className={`${geistSans.variable} ${geistMono.variable} ${
        darkMode ? "bg-gray-900" : "bg-[#FCF7F8]"
      } transition-colors duration-300`}>
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main>{children}</main>
          <Footer darkMode={darkMode} />
        </DarkModeContext.Provider>
      </body>
    </html>
  );
}