'use client';
import { useDarkMode } from '../layout';
import Stores from '../../pages/Stores';

export default function StoresPage() {
  const { darkMode } = useDarkMode();
  return <Stores darkMode={darkMode} />;
}