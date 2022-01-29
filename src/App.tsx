import React from 'react';
//import FullFrom from './app/components/ApplicationForm/application_form';
// import { AboutUs } from './app/components/AboutUs/aboutUs';
// import { Contact } from './app/components/Contact/contact';
// import { Login } from './app/components/Login/login';
// import { Register } from './app/components/Register/register';
import { Menu } from './app/components/Menu/menu';
import { Container, Header, Content } from './app.style';
import { ServiceList } from './app/components/ServiceList/serviceList';
import { Map } from './app/components/Map/map';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { Routes, Route } from 'react-router';

export const App: React.FC = () => {
  return (
    <Container>
      <Header>
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
