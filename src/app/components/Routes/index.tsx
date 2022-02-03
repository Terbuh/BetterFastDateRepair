import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Home } from '../Home/home';
import { AboutUs } from '../AboutUs/aboutUs';
import { Register } from '../Register/register';
import { Login } from '../Login/login';
import { Contact } from '../Contact/contact';
import { PATH_PAGE } from './paths';
import { ServiceDetails } from '../ServiceDetails/serviceDetails';

export const Router: React.FC = () => {
  return useRoutes([
    {
      path: PATH_PAGE.root,
      element: <Home />
    },
    {
      path: PATH_PAGE.login,
      element: <Login />
    },
    {
      path: PATH_PAGE.register,
      element: <Register />
    },
    {
      path: PATH_PAGE.contact,
      element: <Contact />
    },
    {
      path: PATH_PAGE.aboutUs,
      element: <AboutUs />
    },
    {
      path: PATH_PAGE.details,
      element: <ServiceDetails />
    }
  ]);
};
