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

  return (
    <div className="app-container">
      <CustomCursor />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesHub />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/apply" element={<div style={{ padding: '10rem 4rem', minHeight: '100vh', color: 'white', background: 'var(--deep)' }}><h1>Application Portal</h1><p>Coming soon...</p></div>} />
      </Routes>
    </div>
  );
}
