import React from 'react';
//import FullFrom from './app/components/ApplicationForm/application_form';
import Menu from './app/components/Menu/menu';
import Container from './app.style';
import Service from './app/components/ServiceList/service';

const App: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Service />

      {/*//<FullFrom />*/}
    </Container>
  );
};

export default App;
