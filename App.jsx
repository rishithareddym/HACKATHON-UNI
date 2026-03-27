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
import AlumniDetail from './pages/alumni/AlumniDetail';
import { CustomCursor, BackToTop, Chatbot } from './components/Miscellaneous';
import './index.css'; 

function App() {
  return (
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
          <Route path="/alumni/:id" element={<AlumniDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
      
      {/* Floating Elements layer */}
      <BackToTop />
      <Chatbot />
    </>
  );
}

export default App;
