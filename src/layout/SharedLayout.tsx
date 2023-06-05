import React from 'react';
import Header from '../pages/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer';

const SharedLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
