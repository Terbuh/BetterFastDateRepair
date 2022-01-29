import React from 'react';

import { Login } from './app/components/Login/login';
import { Register } from './app/components/Register/register';
import { Menu } from './app/components/Menu/menu';
import { Container, Header, Content } from './app.style';
import { ServiceList } from './app/components/ServiceList/serviceList';
import { Map } from './app/components/Map/map';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
//import { ApplicationForm } from './app/components/ApplicationForm/applicationForm';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/*<Container>*/}
      {/*  <Header>*/}
      {/*    <Menu />*/}
      {/*  </Header>*/}
      <Routes>
        <Route path="/login" element={Login} />
      </Routes>
      {/*<Content>*/}
      {/*  <ServiceList />*/}
      {/*  <Map />*/}
      {/*</Content>*/}

      {/*//<FullFrom />*/}
      {/*</Container>*/}
    </BrowserRouter>
  );
};
