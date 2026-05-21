import React from "react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import { HiArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050505] border-t border-white/5">
      {/* Massive Ambient Glow */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-white/[0.03] blur-[180px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full">
        {/* Top CTA */}
        <div className="w-full border-b border-white/5 px-6 md:px-16 py-24 md:py-32">
          <div className="max-w-[1700px] mx-auto flex flex-col xl:flex-row items-start xl:items-end justify-between gap-16">
            {/* Left */}
            <div className="max-w-5xl">
              <span className="uppercase tracking-[0.5em] text-white/30 text-xs block mb-8">
                Open For Opportunities
              </span>

              <h2 className="text-[18vw] sm:text-[12vw] md:text-[9rem] xl:text-[11rem] leading-[0.85] font-black uppercase tracking-[-0.06em] text-white">
                LET'S
                <br />
                <span className="italic text-white/20">BUILD</span> TOGETHER
              </h2>
            </div>

            {/* Button */}
            <a
              href="#contact"
              className="group flex items-center gap-4 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] px-10 py-5 rounded-2xl transition duration-300"
            >
              <span className="uppercase tracking-[0.3em] text-sm font-semibold text-white">
                Start Project
              </span>

              <HiArrowUpRight
                size={24}
                className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-300"
              />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="px-6 md:px-16 py-14">
          <div className="max-w-[1700px] mx-auto flex flex-col xl:flex-row items-start xl:items-center justify-between gap-12">
            {/* Branding */}
            <div>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-none">
                Hemant
                <span className="text-white/20">.</span>
              </h3>

              <p className="mt-4 text-white/40 text-sm md:text-base max-w-md leading-relaxed">
                MERN Stack Developer focused on creating modern digital
                products, cinematic interfaces, and scalable web experiences.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap items-center gap-8 md:gap-12">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white/40 hover:text-white text-sm uppercase tracking-[0.3em] transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/HemantMaru"
                target="_blank"
                rel="noreferrer"
                className="group w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center transition duration-300"
              >
                <FaGithub
                  size={22}
                  className="text-white/60 group-hover:text-white transition"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/hemant-maru-63012029a/"
                target="_blank"
                rel="noreferrer"
                className="group w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center transition duration-300"
              >
                <FaLinkedin
                  size={22}
                  className="text-white/60 group-hover:text-white transition"
                />
              </a>

              <a
                href="https://instagram.com/hemantkumawat213"
                target="_blank"
                rel="noreferrer"
                className="group w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center transition duration-300"
              >
                <FaInstagram
                  size={22}
                  className="text-white/60 group-hover:text-white transition"
                />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-white/5 my-10" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-white/20 text-xs uppercase tracking-[0.3em]">
              © 2026 Hemant Maru
            </p>

            <p className="text-white/20 text-xs uppercase tracking-[0.3em]">
              Crafted With React • GSAP • Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
