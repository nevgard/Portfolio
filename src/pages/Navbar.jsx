import React, { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { FiHome, FiTool } from "react-icons/fi";
import { PiFolderSimple, PiSuitcase } from "react-icons/pi";
import { Link } from "react-router-dom";
const Navbar = () => {
  const dataNav = [
    {
      icon: <FiHome size={20} />,
      name: "",
    },
    {
      icon: <PiSuitcase size={20} />,
      name: "Experience",
    },
    {
      icon: <PiFolderSimple size={20} />,
      name: "Projects",
    },
    {
      icon: <FiTool size={20} />,
      name: "Tools",
    },
  ];

  return (
    <div className="md:pl-24 md:ml-[780px] mt-12">
      <div className="bg-[#1C1A19] shadow-lg shadow-black/50 rounded-full flex gap-x-8  py-3 px-12 w-fit">
        {dataNav.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <Link
              to={`/${item.name}`}
              className="transition-all ease-in-out focus:text-lime-400 rounded-xl flex justify-center items-center focus:bg-neutral-700 p-2"
            >
              {item.icon}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
