import React, { useRef } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import TransitionPages from "../components/TransitionPages";
import { motion } from "framer-motion";

const Experience = () => {
  const dataExperience = [
    {
      id: 1,
      company: "PT. Publika Investa Karya",
      name: "Frontend Developer",
      date: "Mar 2024 - present",
      description:
        "Interned at PT Publika Investa Karya, where I worked on frontend development projects for both mobile and web, enhancing user interfaces and optimizing website performance.",
    },
  ];
  return (
    <section
      id="experience"
      className=" md:h-full mb-1 md:ml-[40%] md:pl-24 mt-12 md:mt-0"
    >
      <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "all" }}
      >
        <div className="text-center md:text-start">
          <h1 className="head1 text-black dark:text-white ">1 YEARS OF</h1>
          <h1 className="head1 text-black dark:text-neutral-700 -mt-16"> EXPERIENCE</h1>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "all" }}
      >
        <div className="mt-6 px-4 md:px-0">
          {dataExperience.map((experience) => (
            <div key={experience.id} className="group border-2 border-primary dark:border-0 rounded-2xl dark:hover:bg-neutral-800 cursor-pointer w-fit px-6 py-4 flex">
              <div>
                <h1 className="text-black font-bold text-lg md:text-2xl dark:text-white">
                  {experience.company}
                </h1>
                <h1 className="text-black dark:text-neutral-400 text-sm md:text-base">
                  {experience.name}
                </h1>
                <p className="text-black dark:text-neutral-400 mt-2 text-sm md:text-base max-w-lg">
                  {experience.description}
                </p>
                <p className="text-black dark:text-neutral-400 mt-2 text-xs md:text-base">
                  {experience.date}
                </p>
              </div>
              <div className="md:ml-24">
                <FaLocationArrow
                  size={20}
                  className="transition-all ease-in-out group-hover:scale-110  text-neutral-400 mt-2 group-hover:text-lime-400 group-hover:translate-x-3 group-hover:-translate-y-2"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
