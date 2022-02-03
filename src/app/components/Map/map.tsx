import React from 'react';
import { TileLayer } from 'react-leaflet';
import { MapWrapper, MyMapContainer } from './map.styles';

export const Map: React.FC = () => {
  return (
    <MapWrapper className="leaflet-container">
      <MyMapContainer
        center={[54.40226951761061, 18.577870013242304]}
        zoom={13}
        scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MyMapContainer>
    </MapWrapper>
  );
};
