import React from "react";
import Heading from "../components/Heading";
import ButtonPrimary from "../components/ButtonPrimary";

const Hero = () => {
  return (
    <section id="Home" className="hero h-screen mt-12 pl-24 ml-[780px]">
      <div>
        <h1 className="head1">FRONTEND</h1>
        <h1 className="head1 text-neutral-700 -mt-16">DEVELOPER</h1>
        <p className="text-neutral-400 max-w-md -mt-4">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>

      <div className="mt-6">
        <h1 className="head1 text-lime-400">+1</h1>
        <p className="text-neutral-400">Years of experience</p>

        <h1 className="head1 text-lime-400">+8</h1>
        <p className="text-neutral-400">Projects completed</p>
      </div>
    </section>
  );
};

export default Hero;
