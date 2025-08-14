'use client';
import { useParams } from 'next/navigation';
import { useDarkMode } from '../../../components/ClientProvider';
import ProductDetail from '../../../pages/ProductDetail';

export default function ProductDetailPage() {
  const params = useParams();
  const { darkMode } = useDarkMode();
  
  if(!params?.slug)
    return <div>Product not found</div>;

  // const productName = params.slug as string;
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  return <ProductDetail darkMode={darkMode} productName={slug}/>;
}