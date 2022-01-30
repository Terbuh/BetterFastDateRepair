import React from 'react';

import { Login } from './app/components/Login/login';
import { Register } from './app/components/Register/register';
import { Menu } from './app/components/Menu/menu';
import { Container, Header, Content } from './app.style';
import { ServiceList } from './app/components/ServiceList/serviceList';
import { Map } from './app/components/Map/map';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { AboutUs } from './app/components/AboutUs/aboutUs';
import { Contact } from './app/components/Contact/contact';
//import { ApplicationForm } from './app/components/ApplicationForm/applicationForm';

const Home: React.FC = () => {
  return (
    <Content>
      <ServiceList />
      <Map />
    </Content>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header>
          <Menu />
        </Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        {/*//<FullFrom />*/}
      </Container>
    </BrowserRouter>
  );
};
