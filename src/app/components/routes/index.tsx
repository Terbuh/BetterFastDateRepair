import { useRoutes } from 'react-router-dom';
import { Home } from '../Home/home';
import { AboutUs } from '../AboutUs/aboutUs';
import { Register } from '../Register/register';
import { Login } from '../Login/login';
import { Contact } from '../Contact/contact';

export function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/aboutUs',
      element: <AboutUs />
    }
  ]);
}
