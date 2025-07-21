'use client';
import { useDarkMode } from '../layout';
import ReadMore from '../../pages/ReadMore';

export default function ReadMorePage() {
  const { darkMode } = useDarkMode();
  return <ReadMore darkMode={darkMode} />;
}