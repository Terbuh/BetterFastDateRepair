import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import services from '../__mock__/mock';

export const ServiceDetails: React.FC = () => {
  const { id } = useParams();

  const getServiceName = (serviceId: React.ChangeEvent<HTMLElement>) => {
    const serviceID = (serviceId.target as Element).id;

    if (serviceID === id) {
      const result = services.map((serviceData) => (
        <div key={serviceData.id}> {serviceData.description} </div>
      ));
      getServiceName({ result });
    }
  };

  useEffect(() => {
    getServiceName({ id });
  });

  return (
    <div>
      <h1>{id}</h1>
      <h2>Now showing post </h2>
    </div>
  );
};
