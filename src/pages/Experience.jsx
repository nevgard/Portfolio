import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

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
    <section id="Experience" className="mt-12 h-screen ml-[780px] pl-24">
      <h1 className="head1 ">1 YEARS OF</h1>
      <h1 className="head1 text-neutral-700 -mt-16"> EXPERIENCE</h1>
      <div className="mt-6">
        {dataExperience.map((experience) => (
          <div className="group rounded-2xl hover:bg-neutral-800 cursor-pointer w-fit px-6 py-4 flex">
            <div>
              <h1 className="font-bold text-2xl">{experience.company}</h1>
              <h1 className="text-neutral-400">{experience.name}</h1>
              <p className="text-neutral-400 mt-2 max-w-lg">
                {experience.description}
              </p>
              <p className="text-neutral-400 mt-2">{experience.date}</p>
            </div>
            <div className="ml-24">
              <FaLocationArrow
                size={20}
                className="transition-all ease-in-out group-hover:scale-110  text-neutral-400 mt-2 group-hover:text-lime-400 group-hover:translate-x-3 group-hover:-translate-y-2"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
