import React from 'react';
import { Menu } from './app/components/Menu/menu';
import { Container, Header } from './app.style';
import { BrowserRouter } from 'react-router-dom';
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
