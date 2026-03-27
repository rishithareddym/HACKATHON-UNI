<<<<<<< HEAD
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ApplyNow from './pages/ApplyNow';
import ThankYou from './pages/ThankYou';
import SoftwareEngineer from './pages/careers/SoftwareEngineer';
import MLEngineer from './pages/careers/MLEngineer';
import CareerDetail from './pages/careers/CareerDetail';
import EventsList from './pages/events/EventsList';
import EventRegister from './pages/events/EventRegister';
import CoursesAll from './pages/courses/CoursesAll';
import CoursesRecommendations from './pages/courses/CoursesRecommendations';
import CourseDetail from './pages/courses/CourseDetail';
import CourseApply from './pages/courses/CourseApply';
import { CustomCursor, BackToTop, Chatbot } from './components/Miscellaneous';
import './index.css'; 
=======
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import CoursesHub from './pages/CoursesHub';
import CourseDetail from './pages/CourseDetail';
import './index.css';
import './App.css';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
>>>>>>> c6d1e4ee1b7b69940e3222b938f3964297e5aaeb

function App() {
  return (
<<<<<<< HEAD
    <>
      {/* Visual Enhancers */}
      <CustomCursor />
      
      {/* Layout Start */}
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply" element={<ApplyNow />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/careers/software-engineer" element={<SoftwareEngineer />} />
          <Route path="/careers/ml-engineer" element={<MLEngineer />} />
          <Route path="/careers/:slug" element={<CareerDetail />} />
          <Route path="/events" element={<EventsList />} />
          <Route path="/events/:eventId/register" element={<EventRegister />} />
          <Route path="/courses" element={<CoursesAll />} />
          <Route path="/courses/recommendations" element={<CoursesRecommendations />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/courses/:courseId/apply" element={<CourseApply />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
      
      {/* Floating Elements layer */}
      <BackToTop />
      <Chatbot />
    </>
=======
    <div className="app-container">
      <CustomCursor />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesHub />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/apply" element={<div style={{ padding: '10rem 4rem', minHeight: '100vh', color: 'white', background: 'var(--deep)' }}><h1>Application Portal</h1><p>Coming soon...</p></div>} />
      </Routes>
    </div>
>>>>>>> c6d1e4ee1b7b69940e3222b938f3964297e5aaeb
  );
}

export default App;
