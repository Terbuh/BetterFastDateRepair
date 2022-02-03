import React from 'react';
import { ButtonGroupWrapper, Button } from './menu.styles';
import { Link } from 'react-router-dom';
import { PATH_PAGE } from '../Routes/paths';

export const Menu: React.FC = () => {
  return (
    <ButtonGroupWrapper>
      <Link to={PATH_PAGE.root}>
        <Button>Home</Button>
      </Link>
      <Link to={PATH_PAGE.login}>
        <Button>Login</Button>
      </Link>
      <Link to={PATH_PAGE.register}>
        <Button>Register</Button>
      </Link>
      <Link to={PATH_PAGE.contact}>
        <Button>Contact</Button>
      </Link>
      <Link to={PATH_PAGE.aboutUs}>
        <Button>About Us</Button>
      </Link>
    </ButtonGroupWrapper>
  );
};
