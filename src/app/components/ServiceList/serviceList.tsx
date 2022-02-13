import React from 'react';
import services from '../__mock__/mock';
import { ListHeight } from './service.styles';
import { ServiceListElement } from './ServiceListElement/serviceListElement';
import Filter from '../Filter/searchBar';

export const ServiceList: React.FC = () => {
  return (
    <ListHeight>
      <Filter />
      {/*{services.map((serviceData) => (*/}
      {/*  <ServiceListElement serviceData={serviceData} key={serviceData.id} />*/}
      {/*))}*/}
    </ListHeight>
  );
};
