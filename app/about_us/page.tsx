'use client';
import { useDarkMode } from '../layout';
import AboutUs from '../../pages/AboutUs';

export default function AboutUsPage() {
  const { darkMode } = useDarkMode();
  return <AboutUs darkMode={darkMode} />;
}