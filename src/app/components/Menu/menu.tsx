import React from 'react';
import { ButtonGroupWrapper, Button } from './menu.styles';
import { Link } from 'react-router-dom';

export const Menu: React.FC = () => {
  return (
    <ButtonGroupWrapper>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/login">
        <Button>Login</Button>
      </Link>
      <Link to="/register">
        <Button>Register</Button>
      </Link>
      <Link to="/contact">
        <Button>Contact</Button>
      </Link>
      <Link to="/aboutUs">
        <Button>About Us</Button>
      </Link>
    </ButtonGroupWrapper>
  );
};
