import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { MapWrapper } from './map.styles';

function Map(): JSX.Element {
  return (
    <MapWrapper>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </MapWrapper>
  );
}
export { Map };
