import React from 'react';
//import FullFrom from './app/components/ApplicationForm/application_form';
import { Menu } from './app/components/Menu/menu';
import { Container, Header, WebLogo, Content } from './app.style';
import { Service } from './app/components/ServiceList/service';
import { Map } from './app/components/Map/map';

export const App: React.FC = () => {
  return (
    <Container>
      <Header>
        <WebLogo>Logo</WebLogo>
        <Menu />
      </Header>
      <Content>
        <Service />
        <Map />
      </Content>

      {/*//<FullFrom />*/}
    </Container>
  );
};
