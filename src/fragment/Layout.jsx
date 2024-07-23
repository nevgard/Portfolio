// src/fragment/Layout.js
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router-dom";
import Contact from "../pages/Contact";
import ToTop from "../components/ToTop";

const Layout = () => {
  return (
    <div className="flex flex-col justify-center items-center md:items-start">
      <Navbar />
      <Sidebar />
      <ToTop/>
      <div className="">
        <main className="">
          <Outlet />
        </main>
        <Contact />
      </div>
    </div>
  );
};

export default Layout;
