import React from 'react';
import { ButtonGroupWrapper, Button } from './menu.styles';

export const Menu: React.FC = () => {
  return (
    <ButtonGroupWrapper>
      <Button>Login</Button>
      <Button>Register</Button>
      <Button>Contact</Button>
      <Button>AboutUs</Button>
    </ButtonGroupWrapper>
  );
};
