// src/App.jsx
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Home from './screens/Home';
import About from './screens/About';
import Projects from './screens/Projects';
import Contact from './screens/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray('.panel-content');

    panels.forEach((panel, i) => {
      gsap.from(panel, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: panel,
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    // anima uma pequena escala no conteúdo ao carregar a primeira seção
    gsap.from(panels[0], {
      scale: 0.9,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      <section className="panel">
        <Home />
      </section>
      <section className="panel">
        <About />
      </section>
      <section className="panel">
        <Projects />
      </section>
      <section className="panel">
        <Contact />
      </section>
    </div>
  );
}
