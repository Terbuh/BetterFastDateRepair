import React from 'react';
import { Content } from '../../../app.style';
import { ServiceList } from '../ServiceList/serviceList';
import { Map } from '../Map/map';

export const Home: React.FC = () => {
  return (
    <Content>
      <ServiceList />
      <Map />
    </Content>
  );
};
