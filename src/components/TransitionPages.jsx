import React from "react";
import { motion } from "framer-motion";

const TransitionPages = ({ children }) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const transition = {
    duration: 0.5,
    ease: "easeInOut",
  };

  const pageTransition = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: "exit",
    variants,
    transition,
  };

  const pageTransition2 = {
    initial: "hidden",
    animate: "visible",
    exit: "exit",
    variants,
    transition,
  };

  return <motion.div {...pageTransition}  >{children}</motion.div>;
};

export default TransitionPages;
