import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Background Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '5px'; // Prevent layout shift from scrollbar
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Process', href: '#process' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[1001] transition-all duration-700 ${scrolled ? 'bg-primary/70 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
          {/* Brand */}
          <button 
            onClick={() => handleNavClick('#home')}
            className="group relative flex flex-col items-start"
          >
            <span className="text-xl font-black tracking-tighter uppercase leading-none">
              HEMANT MARU
            </span>
            <span className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase mt-1 group-hover:text-white transition-colors duration-500">
              MERN Developer
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="relative text-[10px] font-bold tracking-[0.3em] text-white/40 hover:text-white transition-colors uppercase py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
              </button>
            ))}
            <button 
              onClick={() => navigate('/admin')}
              className="text-[10px] font-bold px-7 py-2.5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all uppercase tracking-[0.3em]"
            >
              Portal
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-2xl z-[1002] transition-transform duration-300 active:scale-90 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-primary z-[1000] flex flex-col items-center justify-start pt-32 pb-12 gap-10 md:hidden overflow-y-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
            
            {navLinks.map((link, idx) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleNavClick(link.href)}
                className="text-4xl font-black tracking-tighter uppercase hover:text-white/40 transition-colors"
              >
                {link.name}
              </motion.button>
            ))}
            
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => { navigate('/admin'); setIsOpen(false); }}
              className="mt-6 text-[10px] font-bold tracking-[0.6em] text-white/20 hover:text-white transition-colors uppercase border-t border-white/5 pt-10 w-2/3 text-center"
            >
              Access Secure Portal
            </motion.button>

            <div className="mt-auto text-[8px] font-bold tracking-[0.8em] text-white/5 uppercase">
                Hemant Maru Portfolio
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
