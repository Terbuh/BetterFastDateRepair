import React from 'react';
import { Menu } from './app/components/Menu/menu';
import { Container, Header, Content } from './app.style';
import { BrowserRouter, useRoutes } from 'react-router-dom';
//import { ApplicationForm } from './app/components/ApplicationForm/applicationForm';
import { Router } from './app/components/routes/index';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <Header>
          <Menu />
        </Header>
        <Router />
      </Container>
    </BrowserRouter>
  );
};
