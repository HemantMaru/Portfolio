import React, { useState, useEffect } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock Scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const el = document.querySelector(href);

        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      const el = document.querySelector(href);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          scrolled
            ? "bg-black/60 backdrop-blur-2xl border-b border-white/5 py-5"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-[1700px] mx-auto px-6 sm:px-12 md:px-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="group flex flex-col items-start"
          >
            <h1 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-[-0.08em] text-white leading-none">
              HEMANT
              <span className="text-white/20">.</span>
            </h1>

            <span className="text-[9px] uppercase tracking-[0.5em] text-white/30 mt-2 group-hover:text-white/60 transition duration-300">
              MERN Developer
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="group relative text-[11px] uppercase tracking-[0.35em] text-white/40 hover:text-white transition duration-300"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-3 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] px-6 py-3 rounded-2xl transition duration-300"
            >
              <span className="uppercase tracking-[0.3em] text-[10px] text-white font-semibold">
                Let's Talk
              </span>

              <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white transition" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[1002] text-white text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="fixed inset-0 z-[999] bg-[#050505] flex flex-col justify-between px-8 py-12 md:hidden"
          >
            {/* Noise */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Top */}
            <div className="flex items-center justify-between relative z-10">
              <div>
                <h2 className="text-2xl font-black tracking-[-0.08em]">
                  HEMANT.
                </h2>

                <p className="text-[9px] uppercase tracking-[0.5em] text-white/30 mt-2">
                  Portfolio
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-3xl text-white/70"
              >
                <FaTimes />
              </button>
            </div>

            {/* Links */}
            <div className="relative z-10 flex flex-col gap-8 mt-10">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.name}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: idx * 0.08,
                  }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-5xl font-black uppercase tracking-[-0.08em] text-white/80 hover:text-white transition duration-300"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            {/* Footer */}
            <div className="relative z-10 pt-12 border-t border-white/5 flex items-center justify-between">
              <p className="text-[9px] uppercase tracking-[0.4em] text-white/20">
                MERN Stack Developer
              </p>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-[10px] uppercase tracking-[0.3em] text-white/40"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
