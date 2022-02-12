import services from '../__mock__/mock';
import { serviceType } from '../../types/service.type';
import React from 'react';

interface DetailsProps {
  serviceDetails: serviceType;
}
export const Datex = () => {
    return(
  services.map((dane) => (<h1>{dane}</h1>));
};

// export async function MyFunction(): Promise<DetailsProps> {
//     try {
//         const date = await Datex();
//         return (<div>
//             {date}
//         </div>);
//     }}
