import React from 'react';
import { Menu } from './app/components/Menu/menu';
import { Container, Header } from './app.style';
import { Router } from './app/components/Routes/index';

export const App: React.FC = () => {
  return (
    <Container>
      <Header>
        <Menu />
      </Header>
      <Router />
    </Container>
  );
};
