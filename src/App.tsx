import React from 'react';
import FullFrom from './app/components/App/FullForm';
import Menu from './app/components/Menu/menu';

const App: React.FC = () => {
  return (
    <div>
      <Menu />
      <FullFrom />
    </div>
  );
};

export default App;
