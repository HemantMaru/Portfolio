import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Process from '../components/Process';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Process />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home;
