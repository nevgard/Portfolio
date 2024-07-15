import { useState } from 'react';
import Navbar from './section/Navbar';
import Hero from './section/Hero';
import About from './section/About';
import Projects from './section/Projects';
import Skill from './section/Skill'
import Contact from './section/Contact';




function App() {
  const [darkMode, setDarkMode] = useState(false);



  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar/>
     <Hero/>
     <About/>
     <Projects/>
     <Skill/>
     <Contact/>

    </div>
  );
}

export default App;
