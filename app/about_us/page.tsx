'use client';
import { useDarkMode } from '../../components/ClientProvider';
import AboutUs from '../../pages/AboutUs';

export default function AboutUsPage() {
  const { darkMode } = useDarkMode();
  return <AboutUs darkMode={darkMode} />;
}