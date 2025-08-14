'use client';
import { useDarkMode } from '../../components/ClientProvider';
import Products from '../../pages/Products';

export default function ProductsPage() {
  const { darkMode } = useDarkMode();
  return <Products darkMode={darkMode} />;
}