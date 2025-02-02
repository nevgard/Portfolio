import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMailchimp,
  FaTwitter,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

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
    <div className="md:fixed md:top-0 md:left-0 h-full w-full md:w-[40%] flex flex-col pt-12 px-6 items-end">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.7 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="bg-white md:w-2/3 rounded-xl p-12 flex flex-col items-center border-2 border-primary dark:border-0"
      >
        <img
          src="https://i.ibb.co.com/XJ7tXwL/potrait.jpg"
          alt=""
          loading="lazy"
          className="border h-80 w-full  object-cover object-top rounded-xl"
        />
        <h1 className="text-3xl font-bold text-black text-center mt-6">
          Fahmi Faza
        </h1>
        <div className="mt-4 flex flex-col justify-center">
          <span className="text-center text-black">
            A Front End Developer passionate about building exceptional user
            experiences.
          </span>
          <div className="flex justify-center mt-4 gap-x-3">
            {sosialMedia.map((sosial) => (
              <div
                className="group p-2 hover:bg-slate-200 rounded-xl transition-all ease-in-out"
                key={sosial.id}
              >
                <a
                  href={sosial.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-black group-hover:text-red-400 transition-all ease-in-out "
                >
                  {sosial.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
