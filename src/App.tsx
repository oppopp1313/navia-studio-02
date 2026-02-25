import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CalooSupport from './components/CalooSupport';

function HomePage() {
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

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/caloo-support" element={<CalooSupport />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
