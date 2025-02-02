import React from "react";
import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import Heading from "../components/Heading";
import {
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";

const Skill = () => {
  const dataSkill = [
    {
      icon: <FaHtml5 size={30} color="black" />,
      name: "HTML",
    },
    {
      icon: <FaCss3 size={30} color="black" />,
      name: "CSS",
    },
    {
      icon: <FaJs size={30} color="black" />,
      name: "Javascript",
    },
    {
      icon: <SiTypescript size={30} color="black" />,
      name: "TypeScript",
    },
    {
      icon: <FaNodeJs size={30} color="black" />,
      name: "Node Js",
    },
    {
      icon: <FaReact size={30} color="black" />,
      name: "React Js",
    },
    {
      icon: <FaReact size={30} color="black" />,
      name: "React Native",
    },
    {
      icon: <SiNextdotjs size={30} color="black" />,
      name: "Next Js",
    },
    {
      icon: <SiMysql size={30} color="black" />,
      name: "MySQL",
    },
    {
      icon: <SiPostgresql size={30} color="black" />,
      name: "PostgreSQL",
    },
    {
      icon: <FaGitAlt size={30} color="black" />,
      name: "Git",
    },
  ];
  const fadeInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1 * index,
      },
    }),
  };
  return (
    <section id="tools" className="md:h-screen mt-12 md:mt-0 md:pl-24 md:ml-[40%]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "all" }}
      >
        <div className="text-center md:text-start">
          <h1 className="head1 text-black dark:text-white ">SKILL</h1>
          <h1 className="head1 -mt-16 text-black dark:text-neutral-700">SET</h1>
        </div>
      </motion.div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-y-3 gap-x-6 mt-6 mx-12">
        {dataSkill.map((skill, index) => (
          <motion.div
            variants={fadeInAnimation}
            custom={index}
            initial="initial"
            whileInView="animate"
            key={index}
            viewport={{ once: true, amount: "all" }}
          >
          <div className="group  transition-all ease-in-out cursor-pointer border-neutral-700 border flex items-center bg-white dark:bg-neutral-700 px-4 py-3 rounded-xl gap-x-2 dark:hover:bg-neutral-400 dark:hover:border-white hover:scale-105">
            <div key={index} className="bg-white rounded-xl max-w-fit p-3">
              {skill.icon}
            </div>
            <span className="text-black dark:text-white">{skill.name}</span>
          </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
