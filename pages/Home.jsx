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
