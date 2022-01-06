import vw from 'src/assets/logo/vw.png';

const services: {
  id: number;
  name: string;
  email: string;
  open: string;
  spec: string;
  logo: any;
}[] = [
  {
    id: 0,
    name: 'BMW',
    email: 'bmw@gmail.com',
    open: '8-16',
    spec: 'Bmw',
    logo: { vw }
  },
  {
    id: 1,
    name: 'VW',
    email: 'vw@gmail.com',
    open: '8-16',
    spec: 'VW',
    logo: '/src/assets/logo/Tomi.png'
  },
  {
    id: 2,
    name: 'Volvo',
    email: 'volvo@gmail.com',
    open: '8-21',
    spec: 'Volvo',
    logo: '/src/assets/logo/Tomi.png'
  },
  {
    id: 3,
    name: 'Renault',
    email: 'renault@gmail.com',
    open: '8-16',
    spec: 'Renault',
    logo: '/src/assets/logo/Tomi.png'
  },
  {
    id: 4,
    name: 'Skoda',
    email: 'skoda@gmail.com',
    open: '8-16',
    spec: 'Skoda',
    logo: '/src/assets/logo/Tomi.png'
  },
  {
    id: 5,
    name: 'Audi',
    email: 'audi@gmail.com',
    open: '8-16',
    spec: 'Audi',
    logo: '/src/assets/logo/Tomi.png'
  },
  {
    id: 6,
    name: 'Pontiac',
    email: 'pontiac@gmail.com',
    open: '8-16',
    spec: 'Pontiac',
    logo: '/src/assets/logo/Tomi.png'
  },
  {
    id: 7,
    name: 'Madacar',
    email: 'madacar@gmail.com',
    open: '8-18',
    spec: 'American-Cars',
    logo: '/src/assets/logo/Tomi.png'
  },
  {
    id: 8,
    name: 'Auto-kosik',
    email: 'autokosik@gmail.com',
    open: '8-17',
    spec: 'Europe cars',
    logo: '/src/assets/logo/Tomi.png'
  },
  {
    id: 9,
    name: 'Tomi-serwis',
    email: 'tomi@gmail.com',
    open: '8-16',
    spec: 'All cars',
    logo: '../../../assets/logo/Tomi.png'
  }
];
export default services;
