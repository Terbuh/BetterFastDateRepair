import React from 'react';
import services from '../__mock__/data';
import RenderList from './get_service_styles';

function RenderService() {
  return (
    <RenderList>
      {services.map((item) => (
        <div key={item.id} id="post">
          <h3>{item.name}</h3>
          <p>{item.open}</p>
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
