import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'typeface-roboto';
import './index.style.css';
import { App } from './App';
import { Register } from './app/components/Register/register';
import { Login } from './app/components/Login/login';
import { Contact } from './app/components/Contact/contact';
import { AboutUs } from './app/components/AboutUs/aboutUs';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={App} />
      <Route path="register/*" element={Register} />
      <Route path="login/*" element={Login} />
      <Route path="contact/*" element={Contact} />
      <Route path="aboutUs/*" element={AboutUs} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
