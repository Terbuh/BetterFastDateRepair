import React from 'react';
//import FullFrom from './app/components/ApplicationForm/application_form';
import { Menu } from './app/components/Menu/menu';
import { Container, Header, WebLogo, Content } from './app.style';
import { ServiceList } from './app/components/ServiceList/serviceList';
import { Map } from './app/components/Map/map';

export const App: React.FC = () => {
  return (
    <Container>
      <Header>
        <WebLogo>Logo</WebLogo>
        <Menu />
      </Header>
      <Content>
        <ServiceList />
        <Map />
      </Content>

      {/*//<FullFrom />*/}
    </Container>
  );
};
