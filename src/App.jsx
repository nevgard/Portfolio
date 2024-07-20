// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './fragment/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skill from './pages/Skill';
import Contact from './pages/Contact';
import Experience from './pages/Experience';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Skill" element={<Skill />} />
          <Route path="Tools" element={<Skill />} />       
          <Route path="Experience" element={<Experience />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
