import React from 'react';
import services from '../__mock__/mock';
import { ListHeight, Logo } from './service.styles';
import { ListItem, ListItemButton } from '@mui/material';

function ServiceList(): JSX.Element {
  return (
    <ListHeight>
      {services.map((item) => (
        <ListItemButton>
          <Logo>{React.createElement(item.icon)}</Logo>
          <ListItem>{item.name}</ListItem>
          <ListItem>Main specialization in - {item.spec}</ListItem>
          <ListItem>Service is open at: {item.open}</ListItem>
          <ListItem>Email to contact with service - {item.email}</ListItem>
        </ListItemButton>
      ))}
    </ListHeight>
  );
}

export { ServiceList };
