import React, { useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import HelixInsights from './pages/HelixInsights';
import Resume from './pages/Resume';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const cursorRef = useRef();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const moveCursor = (e) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="bg-white text-dark min-h-screen flex flex-col font-sans relative">
      {/* Cursor Trail */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 bg-secondary rounded-full pointer-events-none opacity-70 blur-md z-[9999] transition-transform duration-200 hidden md:block"
      ></div>

      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* About merged into the landing page; keep old links working. */}
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/helix-insights" element={<HelixInsights />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;