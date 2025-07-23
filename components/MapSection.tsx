'use client';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), { ssr: false });

// Fix for default marker icon in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface MapSectionProps {
  darkMode: boolean;
}

const MapSection: React.FC<MapSectionProps> = ({ darkMode }) => {
  // Sample coordinates for CleanCo store (e.g., New York City)
  const position: [number, number] = [40.7128, -74.0060];

  // Adjust map style based on dark mode
  const mapStyle = darkMode
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  return (
    <div className={`h-[150px] md:h-[200px] rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300 -ml-2 md:-ml-4`}>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        className="z-10"
        attributionControl={false} // Remove Leaflet attribution
      >
        <TileLayer
          url={mapStyle}
        />
        <Marker position={position}>
          <Popup>
            CleanCo Store <br /> 123 Main Street, New York, NY
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapSection;