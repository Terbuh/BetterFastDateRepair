import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

const MapWrapper = styled.div`
  width: 50%;
  height: 800px;
  overflow: hidden;
  background-color: black;
`;

const MyMapContainer = styled(MapContainer)`
  height: 800px;
`;

export { MapWrapper, MyMapContainer };
