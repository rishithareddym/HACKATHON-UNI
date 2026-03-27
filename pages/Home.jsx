import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Marquee from '../components/sections/Marquee';
import About from '../components/sections/About';
import SmartCourseFinder from '../components/sections/SmartCourseFinder';
import CareerPathVisualizer from '../components/sections/CareerPathVisualizer';
import AlumniSuccess from '../components/sections/AlumniSuccess';
import VirtualTour from '../components/sections/VirtualTour';
import CampusMap from '../components/sections/CampusMap';
import StatsCounter from '../components/sections/StatsCounter';
import Events from '../components/sections/Events';
import Research from '../components/sections/Research';
import Faculty from '../components/sections/Faculty';
import Admissions from '../components/sections/Admissions';
import News from '../components/sections/News';
import Placements from '../components/sections/Placements';
import ClubsCarousel from '../components/sections/ClubsCarousel';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <SmartCourseFinder />
      <CareerPathVisualizer />
      <AlumniSuccess />
      <VirtualTour />
      <CampusMap />
      <StatsCounter />
      <Placements />
      <Events />
      <ClubsCarousel />
      <Research />
      <Faculty />
      <Admissions />
      <News />
    </>
  );
}

