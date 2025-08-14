'use client';
import { useEffect, useState, useRef } from 'react';

interface MapSectionProps {
  darkMode: boolean;
}

const MapSection: React.FC<MapSectionProps> = ({ darkMode }) => {
  const [isMounted, setIsMounted] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  // Sample coordinates for CleanCo store (e.g., New York City)
  const position: [number, number] = [40.7128, -74.0060];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !mapContainerRef.current) return;

    let map: any = null;
    let marker: any = null;

    const initializeMap = async () => {
      try {
        // Dynamically import Leaflet only on client side
        const L = await import('leaflet');
        
        // Fix for default marker icon
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
          iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
          shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
        });

        // Clear the container
        if (mapContainerRef.current) {
          mapContainerRef.current.innerHTML = '';
        }

        // Create map instance
        if (mapContainerRef.current) {
          map = L.map(mapContainerRef.current!, {
            center: position,
            zoom: 13,
            attributionControl: false,
          });

          // Store map instance
          mapInstanceRef.current = map;

          // Add tile layer
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);

          // Add marker
          marker = L.marker(position).addTo(map);
          
          // Add popup to marker
          marker.bindPopup('CleanCo Store <br /> 123 Main Street, New York, NY');
        }

      } catch (error) {
        console.error('Error initializing map:', error);
      }
    };

    // Add a small delay to ensure DOM is ready
    const timer = setTimeout(initializeMap, 100);

    return () => {
      clearTimeout(timer);
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        } catch (error) {
          console.error('Error cleaning up map:', error);
        }
      }
    };
  }, [isMounted, position]);

  // Don't render map until client-side
  if (!isMounted) {
    return (
      <div className={`h-[150px] md:h-[200px] rounded-lg overflow-hidden shadow-lg transition-colors duration-300 -ml-2 md:-ml-4 bg-gray-200 animate-pulse`}>
        <div className="h-full w-full flex items-center justify-center">
          <span className="text-gray-500">Loading map...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`h-[150px] md:h-[200px] rounded-lg overflow-hidden shadow-lg transition-colors duration-300 -ml-2 md:-ml-4`}>
      <div 
        ref={mapContainerRef}
        className="h-full w-full"
        style={{ zIndex: 10 }}
      />
    </div>
  );
};

export default MapSection;