import React, { useEffect } from "react";
import { FaFolder } from "react-icons/fa";
import { FiHome, FiTool } from "react-icons/fi";
import { PiFolderSimple, PiSuitcase } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const dataNav = [
    {
      icon: <FiHome size={20} />,
      name: "",
      path: "/",
    },
    {
      icon: <PiSuitcase size={20} />,
      name: "Experience",
      path: "/Experience#experience",
    },
    {
      icon: <PiFolderSimple size={20} />,
      name: "Projects",
      path: "/Projects#projects",
    },
    {
      icon: <FiTool size={20} />,
      name: "Tools",
      path: "/Tools#tools",
    },
  ];

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="md:pl-24 md:ml-[40%] md:justify-start flex justify-center pt-12">
      <div className="bg-white border-2 border-primary rounded-full flex gap-x-8 py-3 px-12 w-fit dark:bg-[#1C1A19] dark:border-0 dark:shadow-lg dark:shadow-black/50 ">
        {dataNav.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <Link
              to={item.path}
              className={`transition-all ease-in-out rounded-xl flex justify-center items-center p-2 text-black dark:text-white ${
                location.pathname === item.path.split("#")[0]
                  ? "dark:text-lime-400 text-white bg-neutral-700"
                  : ""
              }`}
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
