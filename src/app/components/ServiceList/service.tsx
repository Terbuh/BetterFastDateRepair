import React from 'react';
import { ServiceList } from './serviceList';

function Service(): JSX.Element {
  return <ServiceList></ServiceList>;
}

export { Service };

// const RenderService = async () => {
//   let template = '';
//   services.forEach((service) => {
//     template += `
//                 <table>
//                 <th>Name: ${service.name}</th>
//                  </table>`;
//   });
// };
