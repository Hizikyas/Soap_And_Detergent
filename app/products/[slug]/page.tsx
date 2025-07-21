'use client';
import { useParams } from 'next/navigation';
import { useDarkMode } from '../../layout';
import ProductDetail from '../../../pages/ProductDetail';

export default function ProductDetailPage() {
  const params = useParams();
  const { darkMode } = useDarkMode();
  
  if(!params?.slug)
    return <div>Product not found</div>;

  const productName = params.slug as string;
  
  return <ProductDetail darkMode={darkMode} productName={productName}/>;
}