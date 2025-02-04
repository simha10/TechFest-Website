import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Code, Brain, Mic, Presentation as PresentationScreen, Trophy, ChevronRight as ChessKnight, Map, Sparkles, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'events', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <Navbar activeSection={activeSection} setActiveSection={scrollToSection} />
      <div>
        <section id="home" className="min-h-screen">
          <Home scrollToSection={scrollToSection}/>
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="events" className="min-h-screen">
          <Events />
        </section>
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </div>
      < Footer/>
    </div>
  );
}

export default App;