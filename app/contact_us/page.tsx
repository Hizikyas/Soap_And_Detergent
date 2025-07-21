'use client';
import { useDarkMode } from '../layout';
import ContactUs from '../../pages/ContactUs';

export default function ContactUsPage() {
  const { darkMode } = useDarkMode();
  return <ContactUs darkMode={darkMode} />;
}