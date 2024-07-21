// src/fragment/Layout.js
import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../pages/Navbar';
import { Outlet } from 'react-router-dom';
import Contact from '../pages/Contact';
import ScrollAnimation from 'react-animate-on-scroll';

const Layout = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start">
      <Navbar />
      <Sidebar />
      <div className="">
        
        <main className="">
          <Outlet /> 
        </main>
        <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true}>
        <Contact />
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Layout;
