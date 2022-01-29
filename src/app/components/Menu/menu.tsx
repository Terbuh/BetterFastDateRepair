import React from 'react';
import { ButtonGroupWrapper, Button } from './menu.styles';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router';
//import { Route } from 'react-router';

export const Menu: React.FC = () => {
  return (
    <ButtonGroupWrapper>
      <Routes>
        <Route path="/login">
          <Button>Login</Button>
        </Route>
        <Route path="/register">
          <Button>Register</Button>
        </Route>
        <Route path="/contact">
          <Button>Contact</Button>
        </Route>
        <Route path="/aboutUs">
          <Button>AboutUs</Button>
        </Route>
      </Routes>
    </ButtonGroupWrapper>
  );
};
