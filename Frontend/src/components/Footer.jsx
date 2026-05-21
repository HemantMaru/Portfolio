import React from "react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import { HiArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black border-t border-white/10">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-20">
        {/* Top */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 border-b border-white/10 pb-14">
          {/* Left */}
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm mb-5">
              Let’s Build Something
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-none text-white">
              HAVE AN
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 italic">
                IDEA?
              </span>
            </h2>
          </div>

          {/* Button */}
          <button className="group px-8 py-4 rounded-2xl bg-cyan-500 text-black font-bold text-lg flex items-center gap-3 hover:scale-105 transition duration-300">
            Start Project
            <HiArrowUpRight
              size={24}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"
            />
          </button>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10">
          {/* Logo */}
          <div>
            <h3 className="text-2xl font-black tracking-tight text-white">
              Hemant<span className="text-cyan-400">.</span>
            </h3>

            <p className="text-white/40 mt-2 text-sm">
              MERN Stack Developer • Building Modern Web Experiences
            </p>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-8 text-white/60 text-sm font-medium">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>

            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/HemantMaru"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/hemant-maru-63012029a/"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://instagram.com/hemantkumawat213"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/30 text-sm">
          © 2026 Hemant Maru. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
