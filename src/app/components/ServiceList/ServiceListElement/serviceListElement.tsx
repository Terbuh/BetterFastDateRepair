import React from 'react';
import { Logo } from '../service.styles';
import { serviceType } from '../../../types/service.type';
import {
  MyListItem,
  MyListItemButton,
  MyP,
  MyItemFlex
} from './serviceListElement.styles';
import { Link } from 'react-router-dom';

interface ServiceListElementProps {
  serviceData: serviceType;
}

export const ServiceListElement = ({
  serviceData
}: ServiceListElementProps): JSX.Element => {
  return (
    <Link to={`/services/${serviceData.id}`}>
      <MyListItemButton>
        <Logo>{React.createElement(serviceData.icon)}</Logo>
        <MyListItem>
          <h2>{serviceData.name}</h2>
        </MyListItem>
        <MyItemFlex>
          Main specialization in - <MyP>{serviceData.spec}</MyP>
        </MyItemFlex>
        <MyListItem>Service is open at: {serviceData.open}</MyListItem>
        <MyItemFlex>
          Email to contact: <MyP>{serviceData.email}</MyP>
        </MyItemFlex>
      </MyListItemButton>
    </Link>
  );
};
