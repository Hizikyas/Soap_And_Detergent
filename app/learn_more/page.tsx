'use client';
import { useDarkMode } from '../layout';
import LearnMore from '../../pages/LearnMore';

export default function ReadMorePage() {
  const { darkMode } = useDarkMode();
  return <LearnMore darkMode={darkMode} />;
}