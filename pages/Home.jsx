<<<<<<< HEAD
import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import Marquee from '../components/sections/Marquee';
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
      <SmartCourseFinder />
      <CareerPathVisualizer />
      <AlumniSuccess />
      <VirtualTour />
      <CampusMap />
      <StatsCounter />
      <Events />
      <Research />
      <Faculty />
      <Admissions />
      <News />
    </>
  );
}
=======
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import CourseFinder from '../components/CourseFinder';
import FeaturedCourses from '../components/FeaturedCourses';
import CareerPath from '../components/CareerPath';
import Alumni from '../components/Alumni';
import Stats from '../components/Stats';
import VirtualTour from '../components/VirtualTour';
import CampusMap from '../components/CampusMap';
import Research from '../components/Research';
import Faculty from '../components/Faculty';
import Admissions from '../components/Admissions';
import Events from '../components/Events';
import News from '../components/News';
import Chatbot from '../components/Chatbot';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <CourseFinder />
      <FeaturedCourses />
      <CareerPath />
      <Alumni />
      <Stats />
      <VirtualTour />
      <CampusMap />
      <Research />
      <Faculty />
      <Admissions />
      <Events />
      <News />
      <Chatbot />
      <Footer />
    </>
  );
};

export default Home;
>>>>>>> c6d1e4ee1b7b69940e3222b938f3964297e5aaeb
