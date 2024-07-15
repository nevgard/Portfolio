import React from "react";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import Heading from "../components/Heading";

const Skill = () => {
  return (
    <section id="skill" className="w-full h-screen items-center flex justify-center">
      <div className="container max-w-3xl mx-auto px-4">
        <div className=" w-full items-center justify-center flex-col flex text-center">
          <Heading text="My Skills" />
          
          <p className="text-sm md:text-lg mb-8 mt-4">
            I am a passionate programmer who loves to learn and explore new
            things. I am always seeking out new challenges and experiences. I am
            interested in web development and design. I am currently learning
            React and Tailwind. I am also learning Flutter.
          </p>
          <div className="w-full flex justify-evenly gap-x-4 ">
            <FaReact className="iconSkill w-12 h-12 hover:text-sky-500 " />
            <FaHtml5 className="iconSkill w-12 h-12 hover:text-orange-500" />
            <FaCss3 className="iconSkill w-12 h-12 hover:text-blue-500" />
            <FaNodeJs className="iconSkill w-12 h-12 hover:text-green-500" />
            <FaJs className="iconSkill w-12 h-12 hover:text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
