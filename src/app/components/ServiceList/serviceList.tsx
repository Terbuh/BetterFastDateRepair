import React from 'react';
import services from '../__mock__/mock';
import { ListHeight } from './service.styles';
import { ServiceListElement } from './ServiceListElement/serviceListElement';

export function ServiceList(): JSX.Element {
  return (
    <ListHeight>
      {services.map((item) => (
        <ServiceListElement />
      ))}
    </ListHeight>
  );
}

// export { ServiceList };
