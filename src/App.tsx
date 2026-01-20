import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <div className="grain-overlay" />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;