import React from 'react';
import services from '../__mock__/mock';
import { ListHeight } from './service.styles';
import { ServiceListElement } from './ServiceListElement/serviceListElement';

export const ServiceList: React.FC = () => {
  return (
    <ListHeight>
      {services.map((serviceData) => (
        <ServiceListElement serviceData={serviceData} key={serviceData.id} />
      ))}
    </ListHeight>
  );
};
