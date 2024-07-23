import React, { useState, useEffect } from "react";
import { animate, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ToTop = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      className="toTop fixed bottom-10 z-10 right-10 rounded-full p-3 shadow-md bg-primary cursor-pointer"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FaArrowUp size={25} color="#a3e635" />
    </motion.div>
  );
};

export default ToTop;
