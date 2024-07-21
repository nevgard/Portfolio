import React from "react";
import Heading from "../components/Heading";
import ButtonPrimary from "../components/ButtonPrimary";

const Hero = () => {
  return (
    <section id="Home" className="hero md:h-screen mt-12 md:pl-24 md:ml-[780px]">
      <div className="text-center md:text-start">
        <h1 className="head1">FRONTEND</h1>
        <h1 className="head1 text-neutral-700 -mt-16">DEVELOPER</h1>
        <p className="text-neutral-400 max-w-md -mt-4">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>

      <div className="mt-6 flex md:flex-col items-center md:items-start px-4 justify-center md:justify-start md:px-0 ">
        <h1 className="head1 text-lime-400 mr-2 md:mr-0">+1</h1>
        <p className="text-neutral-400">Years of experience</p>

        <h1 className="head1 text-lime-400 mr-2 md:mr-0">+8</h1>
        <p className="text-neutral-400">Projects completed</p>
      </div>
    </section>
  );
};

export default Hero;
