// src/fragment/Layout.js
import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router-dom";
import Contact from "../pages/Contact";
import ToTop from "../components/ToTop";
import ThemeToggle from "../components/ThemeToggle";

const Layout = () => {
  return (
    <div className="dark:bg-[#141517] bg-white justify-center items-center md:items-start">
      <Navbar />
      <Sidebar />
      <ToTop/>
   
      <div className="">
        <main className="">
          <Outlet />
        </main>
        <Contact />
      </div>
      <ThemeToggle/>
    </div>
  );
};

export default Layout;
