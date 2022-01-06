import React from 'react';
import services from '../__mock__/data';
import { RenderList, Table, Logo } from './get_service_styles';
import { Button } from '@mui/material';

function RenderService() {
  return (
    <RenderList>
      {services.map((item) => (
        <div>
          <Logo>{item.logo}</Logo>
          <Table>
            <th>{item.name}</th>
            <td>Main specialization in - {item.spec}</td>
            <td>Service is open at - {item.open}</td>
            <td>Email to contact with service - {item.email}</td>
            <Button>Check calendar</Button>
          </Table>
        </div>
      ))}
    </RenderList>
  );
}

export default RenderService;

// const RenderService = async () => {
//   let template = '';
//   services.forEach((service) => {
//     template += `
//                 <table>
//                 <th>Name: ${service.name}</th>
//                  </table>`;
//   });
// };
