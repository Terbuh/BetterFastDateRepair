import React from 'react';
import FullFrom from './app/components/ApplicationForm/ApplicationForm';
import Menu from './app/components/Menu/menu';
import Container from './app_style';
import RenderService from './app/components/ServiceList/get_service';

const App: React.FC = () => {
  return (
    <Container>
      <RenderService />
      <Menu />
      <FullFrom />
    </Container>
  );
};

export default App;
