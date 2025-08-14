'use client';
import { useDarkMode } from '../../components/ClientProvider';
import Stores from '../../pages/Stores';

export default function StoresPage() {
  const { darkMode } = useDarkMode();
  return <Stores darkMode={darkMode} />;
}