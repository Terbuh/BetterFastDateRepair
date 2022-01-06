import React from 'react';
import services from '../__mock__/mock';
import { ListHeight, Logo } from './service.styles';
import { Button, ListItem, ListItemButton } from '@mui/material';

function Service() {
  return (
    <ListHeight>
      {services.map((item) => (
        <ListItemButton>
          <Logo>{React.createElement(item.icon)}</Logo>
          <ListItem>{item.name}</ListItem>
          <ListItem>Main specialization in - {item.spec}</ListItem>
          <ListItem>Service is open at - {item.open}</ListItem>
          <ListItem>Email to contact with service - {item.email}</ListItem>
          {/*<Button variant="contained">Calendar</Button>*/}
        </ListItemButton>
      ))}
    </ListHeight>
  );
}

export default Service;

// const RenderService = async () => {
//   let template = '';
//   services.forEach((service) => {
//     template += `
//                 <table>
//                 <th>Name: ${service.name}</th>
//                  </table>`;
//   });
// };
