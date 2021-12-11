import React from 'react';
// import  from './menu_style';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function Menu() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Login</Button>
      <Button>Register</Button>
      <Button>Contact</Button>
      <Button>About Us</Button>
    </ButtonGroup>
  );
}
