import React from 'react';
import { TileLayer } from 'react-leaflet';
import { MapWrapper, MyMapContainer } from './map.styles';

export const Map: React.FC = () => {
  return (
    <MapWrapper className="leaflet-container">
      <MyMapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MyMapContainer>
    </MapWrapper>
  );
};
