import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AdminPane from './pages/AdminPane';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Lenis smooth scroll + GSAP Sync
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.2, // Slightly more responsive
    });

    // Integration with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Sync with GSAP Ticker for ultra-smooth rendering
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  // Loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Scroll reset on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] bg-primary flex items-center justify-center">
        <div className="loader-circle"></div>
      </div>
    );
  }

  const isAdmin = location.pathname === '/admin';

  return (
    <div className="min-h-screen bg-primary text-white selection:bg-white/10 selection:text-white">
      {!isAdmin && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPane />} />
      </Routes>
      {!isAdmin && <Footer />}
    </div>
  );
};

export default App;