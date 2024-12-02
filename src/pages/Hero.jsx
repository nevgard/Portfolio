import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="Home" className="hero md:h-screen md:pl-24 md:ml-[40%]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{
          duration: 0.5,
        }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
      >
        <div className="text-center md:text-start">
          <h1 className="head1 text-black dark:text-white">FRONTEND</h1>
          <h1 className="head1 text-black dark:text-neutral-700 -mt-16">DEVELOPER</h1>
          <p className="dark:text-neutral-400 max-w-md -mt-4 text-black">
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </p>
        </div>
      </motion.div>

      <div className="mt-6 flex md:flex-col items-center md:items-start  justify-center gap-x-4 md:justify-start">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className=" text-center md:text-start"
        >
          <h1 className="head1 text-black dark:text-lime-400 mr-2 md:mr-0">+1</h1>
          <p className="text-black dark:text-neutral-400 md:base text-sm">
            Years of experience
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className=" text-center md:text-start"
        >
          <h1 className="head1 text-black dark:text-lime-400 mr-2 md:mr-0">+8</h1>
          <p className="text-black dark:text-neutral-400 md:text-base text-sm">
            Projects completed
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
