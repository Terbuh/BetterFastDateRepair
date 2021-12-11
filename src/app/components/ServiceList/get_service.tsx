import React from 'react';
import services from '../__mock__/data';

const renderService = async () => {
  let template = '';
  services.forEach((service) => {
    template += `
                <table>
                <th>Name: ${service.name}</th>
                 </table>`;
  });
};

export default renderService;
