import React from "react";
import {  FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaMailchimp, FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FiMail } from "react-icons/fi";

const Sidebar = () => {
  const sosialMedia = [
    {
      id: 1,
      name: <FaGithub size={20} />,
      url: "https://github.com/nevgard",
    },
    {
      id: 2,
      name: <FaLinkedin size={20} />,
      url: "https://linkedin.com/in/ahmadfahmifaza",
    },
    {
      id: 3,
      name: <FiMail size={20} />,
      url: "mailto:fahmifaza6@gmail.com",
    },
    {
      id: 4,
      name: <FaInstagram size={20} />,
      url: "https://www.instagram.com/fahmifaza_/",
    },
  ];
  return (
    <div className="md:fixed md:top-0 left-0 h-full w-full md:w-[780px]  flex flex-col pt-12 px-6 items-end">
      <div className="bg-white md:w-1/2 rounded-xl p-12  flex flex-col items-center">
        <img
          src="src\assets\potrait.jpg"
          alt=""
          className="border h-80 w-full  object-cover object-top rounded-xl"
        />
        <div className="mt-24 flex flex-col justify-center">
          <span className="text-center text-black">
            A Front End Developer passionate about building exceptional user
            experiences.
          </span>
          <div className="flex justify-center mt-4 gap-x-3">
            {sosialMedia.map((sosial) => (
              <div className="group p-2 hover:bg-slate-200 rounded-xl transition-all ease-in-out" key={sosial.id}>
                <a href={sosial.url} target="_blank" rel="noreferrer" className="text-black group-hover:text-red-400 transition-all ease-in-out ">
                  {sosial.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
