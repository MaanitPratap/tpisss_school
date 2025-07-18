// components/LeafletMap.tsx
'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';

import L from 'leaflet';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/images/marker-icon-2x.png',
  iconUrl: '/images/marker-icon.png',
  shadowUrl: '/images/marker-shadow.png',
});


const position: LatLngExpression = [31.69430, 74.97928];

function RelocateButton({ position }: { position: LatLngExpression }) {
  const map = useMap();

  const handleClick = () => {
    map.setView(position, 18); // Zoom in to level 18
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1000,
        padding: '8px 12px',
        background: '#fff',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Relocate to Location
    </button>
  );
}

export default function LeafletMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <MapContainer center={position} zoom={15} style={{ height: "100%", width: "100%", position: "relative" }}>
      <RelocateButton position={position} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
            <div>
            The Pinewood International Senior Secondary School<br />
            <a
                href="https://www.google.com/maps?q=31.694468107006422,74.97919992354005"
                target="_blank"
                rel="noopener noreferrer"
            >
                Open in Google Maps
            </a>
            </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
