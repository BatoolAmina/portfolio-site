import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div
      className="min-h-screen text-gray-200 font-sans"
      style={{
        background: `radial-gradient(circle at center,
          #05081a 0%,    /* very very dark navy center */
          #020414 70%,   /* almost black navy */
          #00010a 100%   /* near pure black navy edges */
        )`,
      }}
    >
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}



export default App;
