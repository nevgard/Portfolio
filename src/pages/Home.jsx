import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
import Skill from "./Skill";

import ScrollAnimation from "react-animate-on-scroll";
const Home = () => {
  return (
    <section id="Home">
      <div className="">
        <Hero />
        <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true}>
          <Experience />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true}>
          <Projects />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={1} animateOnce={true}>
          <Skill />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Home;
