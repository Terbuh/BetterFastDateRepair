import React from 'react';
import { useParams } from 'react-router-dom';
import { serviceType } from '../../types/service.type';

// interface Data {
//   serviceData: serviceType;
// }

export const ServiceDetails: React.FC = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
      <h2>Now showing post </h2>
    </div>
  );
};
