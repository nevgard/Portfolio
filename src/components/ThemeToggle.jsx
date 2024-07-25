import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { FaLightbulb, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <motion.div
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 0.5 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
      className="fixed bottom-10 z-10 left-10 rounded-full p-3 shadow-md bg-primary cursor-pointer transition-all ease-in-out"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <FaLightbulb size={25} /> : <FaMoon size={25} />}
    </motion.div>
  );
};

export default ThemeToggle;
