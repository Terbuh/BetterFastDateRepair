import React from 'react';
import { ButtonGroupWrapper, Button } from './menu.styles';
//import Button from '@mui/material/Button';
//import ButtonGroup from '@mui/material/ButtonGroup';

export const Menu: React.FC = () => {
  return (
    <ButtonGroupWrapper>
      {/*<ButtonGroup*/}
      {/*  variant="contained"*/}
      {/*  aria-label="outlined primary button group">*/}
      <Button>Login</Button>
      <Button>Register</Button>
      <Button>Contact</Button>
      <Button>About Us</Button>

      {/*</ButtonGroup>*/}
    </ButtonGroupWrapper>
  );
};
