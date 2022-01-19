import React from 'react';
import services from '../__mock__/mock';
import { ListHeight } from './service.styles';
import { ServiceListElement } from './ServiceListElement/serviceListElement';

export function ServiceList(): JSX.Element {
  return (
    <ListHeight>
      {services.map((serviceData) => (
        <ServiceListElement
          name={serviceData.name}
          icon={serviceData.icon}
          email={serviceData.email}
          open={serviceData.open}
          spec={serviceData.spec}
          id={serviceData.id}
        />
      ))}
    </ListHeight>
  );
}
