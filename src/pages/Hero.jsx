import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="Home"
      className="hero md:h-screen mt-12 md:pl-24 md:ml-[780px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{
          duration: 0.5,
        }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
      >
        <div className="text-center md:text-start">
          <h1 className="head1">FRONTEND</h1>
          <h1 className="head1 text-neutral-700 -mt-16">DEVELOPER</h1>
          <p className="text-neutral-400 max-w-md -mt-4">
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </p>
        </div>
      </motion.div>

      <div className="mt-6 flex md:flex-col items-center md:items-start px-4 justify-center md:justify-start md:px-0 ">
        <motion.div
          initial={{ opacity: 0, y: 100, }}
          transition={{ duration: 0.5, delay: 0.2 }}
          animate={{ opacity: 1, y: 0,  }}
          exit={{ opacity: 0 }}
        >
          <h1 className="head1 text-lime-400 mr-2 md:mr-0">+1</h1>
          <p className="text-neutral-400">Years of experience</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <h1 className="head1 text-lime-400 mr-2 md:mr-0">+8</h1>
          <p className="text-neutral-400">Projects completed</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
