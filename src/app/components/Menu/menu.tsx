import React from 'react';
import Button from './button_style';
import Stack from './stack_style';

export default function Menu() {
  return (
    <Stack className="menu_stack">
      <Button type="button">Login</Button>
      <Button type="button">Register</Button>
      <Button type="button">Contact</Button>
      <Button type="button">About Us</Button>
    </Stack>
  );
}
