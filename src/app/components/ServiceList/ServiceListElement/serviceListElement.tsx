import React from 'react';
import { Logo } from '../service.styles';
import { ListItem, ListItemButton } from '@mui/material';
import { serviceType } from '../../../types/service.type';

export function ServiceListElement(serviceData: serviceType): JSX.Element {
  return (
    <ListItemButton>
      <Logo>{React.createElement(serviceData.icon)}</Logo>
      <ListItem>{serviceData.name}</ListItem>
      <ListItem>Main specialization in - {serviceData.spec}</ListItem>
      <ListItem>Service is open at: {serviceData.open}</ListItem>
      <ListItem>Email to contact with service - {serviceData.email}</ListItem>
    </ListItemButton>
  );
}
