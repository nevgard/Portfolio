import React from "react";
import Heading from "../components/Heading";
import ButtonPrimary from "../components/ButtonPrimary";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero w-full h-screen flex-1 flex justify-center items-center  "
    >
      <div className="container max-w-3xl mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <img src="src\assets\profile.svg" className="h-72 -mb-14 md:h-96 md:-mb-12 opacity-55 -z-20 "/>
          <h1 className="text-4xl text-center md:text-6xl font-bold leading-tight mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-sm md:text-xl mb-8">
            I'm a Frontend Developer passionate about creating modern web
            applications.
          </p>
          <ButtonPrimary text="Contact Me" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
