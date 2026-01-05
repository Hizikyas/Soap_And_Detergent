'use client';
import { useState, useEffect, memo } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import dynamic from 'next/dynamic';

// Load Leaflet CSS only on client-side
if (typeof window !== 'undefined') {
  require('leaflet/dist/leaflet.css');
}

// Dynamic imports with SSR disabled
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { 
    ssr: false,
    loading: () => (
      <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
        <p>Loading map...</p>
      </div>
    )
  }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(  () => import('react-leaflet').then((mod) => mod.Marker),  { ssr: false });
const Popup = dynamic(  () => import('react-leaflet').then((mod) => mod.Popup),  { ssr: false });

interface StoresProps {
  darkMode: boolean;
}

interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  lat: number;
  lng: number;
}

const StoresMapSection = ({
  stores,
  darkMode,
  hoveredStore,
}: {
  stores: Store[];
  darkMode: boolean;
  hoveredStore: number | null;
}) => {
  const position: [number, number] = [8.8926, 38.8150]; // Center near your stores
  const mapStyle = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const L = require('leaflet');
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });
    }
  }, []);

  if (typeof window === 'undefined') {
    return (
      <div className={`h-96 rounded-lg overflow-hidden shadow-lg ${
        darkMode ? 'bg-gray-800' : 'bg-gray-200'
      } flex items-center justify-center`}>
        <p>Loading map...</p>
      </div>
    );
  }

  const L = require('leaflet');

  return (
    <div className={`h-96 rounded-lg overflow-hidden shadow-lg ${
      darkMode ? 'bg-gray-800' : 'bg-gray-200'
    }`}>
      <MapContainer
        center={position}
        zoom={12}
        style={{ height: '100%', width: '100%' }}
        className="z-10"
        attributionControl={false}
        scrollWheelZoom={false}
      >
        <TileLayer url={mapStyle} />
        {stores.map((store) => (
          <Marker
            key={store.id}
            position={[store.lat, store.lng]}
            icon={L.icon({
              iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
              shadowSize: [41, 41],
              className: hoveredStore === store.id ? 'marker-highlight' : '',
            })}
          >
            <Popup>
              <b>{store.name}</b>
              <br />
              {store.address}
              <br />
              {store.phone}
              <br />
              {store.hours}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

const Stores: React.FC<StoresProps> = ({ darkMode }) => {
  const stores: Store[] = [
    {
      id: 1,
      name: 'Mahpile Kality Store',
      address: 'Kality, Addis Ababa, Ethiopia',
      phone: '+251 912 977 545',
      hours: 'Mon-Sat: 9AM-8PM, Sun: 10AM-6PM',
      lat: 8.8958,
      lng: 38.7892,
    },
    {
      id: 2,
      name: 'Mahpile Koye feche shop',
      address: 'Koye fiche, Oromia Region, Ethiopia',
      phone: '+251 912 977 545',
      hours: 'Mon-Sat: 10AM-9PM, Sun: 11AM-7PM',
      lat: 8.8894806,
      lng: 38.8409611,
    },
  ];

  const [hoveredStore, setHoveredStore] = useState<number | null>(null);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-[#FCF7F8]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-[3rem]">
          <h1 className={`text-4xl md:text-5xl font-bold ${
            darkMode ? 'text-white' : 'text-[#A31621]'
          } relative inline-block`}>
            Stores
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1 w-20 h-0.5 ${
              darkMode ? 'bg-white' : 'bg-[#A31621]'
            }`}></div>
          </h1>
        </div>

        <div className="mb-[5rem]">
          <StoresMapSection stores={stores} darkMode={darkMode} hoveredStore={hoveredStore} />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stores.map((store, index) => (
            <div
              key={store.id}
              className={`${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } p-6 rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:bg-opacity-90 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredStore(store.id)}
              onMouseLeave={() => setHoveredStore(null)}
            >
              <h3 className={`text-xl font-bold ${
                darkMode ? 'text-white' : 'text-[#A31621]'
              } mb-4`}>
                {store.name}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className={`${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  } mt-1`} size={16} />
                  <span className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {store.address}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className={`${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`} size={16} />
                  <span className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {store.phone}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className={`${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  } mt-1`} size={16} />
                  <span className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {store.hours}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .leaflet-container {
          width: 100%;
          height: 100%;
          border-radius: 0.5rem;
        }
        .marker-highlight {
          filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.8));
        }
      `}</style>
    </div>
  );
};

export default memo(Stores);