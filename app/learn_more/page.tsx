'use client';
import { useDarkMode } from '../../components/ClientProvider';
import LearnMore from '../../pages/LearnMore';

export default function ReadMorePage() {
  const { darkMode } = useDarkMode();
  return <LearnMore darkMode={darkMode} />;
}