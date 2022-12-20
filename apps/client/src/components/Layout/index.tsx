import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Toastify from './Toastify';

const Layout = () => {
  return (
    <div className="flex justify-center rounded py-28 text-3xl font-bold">
      <Header />
      <Outlet />
      <Toastify />
    </div>
  );
};

export default Layout;
