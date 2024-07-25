import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
import Skill from "./Skill";
import ToTop from "../components/ToTop";

const Home = () => {
  return (
    <section id="Home">
      <div className="">
        <Hero />
        <Experience />
        <Projects />
        <Skill />
      </div>
    </section>
  );
};

export default Home;
