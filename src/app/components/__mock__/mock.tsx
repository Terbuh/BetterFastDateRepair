import { ReactComponent as Bmw } from '../../../assets/logo/BMW.svg';
import { ReactComponent as Vw } from '../../../assets/logo/VW.svg';
import { ReactComponent as Volvo } from '../../../assets/logo/VOLVO.svg';
import { ReactComponent as Renault } from '../../../assets/logo/RENAULT.svg';
import { ReactComponent as Skoda } from '../../../assets/logo/SKODA.svg';
import { ReactComponent as Audi } from '../../../assets/logo/AUDI.svg';
import { ReactComponent as Pontiac } from '../../../assets/logo/PONTIAC.svg';
import { ReactComponent as Madacar } from '../../../assets/logo/MADACAR.svg';
import { ReactComponent as Kosik } from '../../../assets/logo/KOSIK.svg';
import { ReactComponent as Tomi } from '../../../assets/logo/TOMI.svg';
import { serviceType } from '../../types/service.type';

const services: serviceType[] = [
  {
    id: 0,
    name: 'BMW',
    email: 'bmw@gmail.com',
    open: '8-16',
    spec: 'Bmw',
    icon: Bmw
  },
  {
    id: 1,
    name: 'VW',
    email: 'vw@gmail.com',
    open: '8-16',
    spec: 'VW',
    icon: Vw
  },
  {
    id: 2,
    name: 'Volvo',
    email: 'volvo@gmail.com',
    open: '8-21',
    spec: 'Volvo',
    icon: Volvo
  },
  {
    id: 3,
    name: 'Renault',
    email: 'renault@gmail.com',
    open: '8-16',
    spec: 'Renault',
    icon: Renault
  },
  {
    id: 4,
    name: 'Skoda',
    email: 'skoda@gmail.com',
    open: '8-16',
    spec: 'Skoda',
    icon: Skoda
  },
  {
    id: 5,
    name: 'Audi',
    email: 'audi@gmail.com',
    open: '8-16',
    spec: 'Audi',
    icon: Audi
  },
  {
    id: 6,
    name: 'Pontiac',
    email: 'pontiac@gmail.com',
    open: '8-16',
    spec: 'Pontiac',
    icon: Pontiac
  },
  {
    id: 7,
    name: 'Madacar',
    email: 'madacar@gmail.com',
    open: '8-18',
    spec: 'American-Cars',
    icon: Madacar
  },
  {
    id: 8,
    name: 'Auto-kosik',
    email: 'autokosik@gmail.com',
    open: '8-17',
    spec: 'Europe cars',
    icon: Kosik
  },
  {
    id: 9,
    name: 'Tomi-serwis',
    email: 'tomi@gmail.com',
    open: '8-16',
    spec: 'All cars',
    icon: Tomi
  }
];

export default services;
