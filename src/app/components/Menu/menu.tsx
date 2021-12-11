import React from 'react';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Button from './menu';

export default function Menu() {
  return (
    <Stack
      className="menu_stack"
      spacing={1}
      direction="row"
      display="flex"
      justifyContent="flex-end"
      marginTop="10px"
      marginRight="10px">
      <Button type="button" variant="contained">
        Login
      </Button>
      <Button type="button" variant="contained">
        Register
      </Button>
      <Button type="button" variant="contained">
        Contact
      </Button>
      <Button type="button" variant="contained">
        About Us
      </Button>
    </Stack>
  );
}
