import React from 'react';
import ButtonGroupWrapper from './menu.style';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Menu() {
  return (
    <ButtonGroupWrapper>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group">
        <Button>Login</Button>
        <Button>Register</Button>
        <Button>Contact</Button>
        <Button>About Us</Button>
      </ButtonGroup>
    </ButtonGroupWrapper>
  );
}
