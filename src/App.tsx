import React from 'react';
import FullFrom from './app/components/App/FullForm';
import Menu from './app/components/Menu/menu';
import div from './app_style';

const App: React.FC = () => {
  return (
    <div>
      <Menu />
      <FullFrom />
    </div>
  );
};

export default App;
