'use client';
import { useDarkMode } from '../../components/ClientProvider';
import ContactUs from '../../pages/ContactUs';

export default function ContactUsPage() {
  const { darkMode } = useDarkMode();
  return <ContactUs darkMode={darkMode} />;
}