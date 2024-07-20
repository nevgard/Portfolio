// src/fragment/Layout.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../pages/Navbar';
import { Outlet } from 'react-router-dom';
import Contact from '../pages/Contact';

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="">
        <Navbar />
        <main className="">
          <Outlet /> 
        </main>
        <Contact />
      </div>
    </div>
  );
};

export default Layout;
