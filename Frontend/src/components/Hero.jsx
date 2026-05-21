import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { HiArrowRight } from "react-icons/hi";

const Hero = () => {
  const containerRef = useRef(null);

  const titleRef = useRef(null);

  const glowRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animation
      gsap.from(".hero-item", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
      });

      // Desktop Only Mouse Effect
      if (window.innerWidth < 1024) return;

      const xTo = gsap.quickTo(titleRef.current, "x", {
        duration: 1.2,
        ease: "power3.out",
      });

      const yTo = gsap.quickTo(titleRef.current, "y", {
        duration: 1.2,
        ease: "power3.out",
      });

      const glowX = gsap.quickTo(glowRef.current, "x", {
        duration: 2,
        ease: "power3.out",
      });

      const glowY = gsap.quickTo(glowRef.current, "y", {
        duration: 2,
        ease: "power3.out",
      });

      const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 45;

        const y = (e.clientY / window.innerHeight - 0.5) * 45;

        xTo(x);
        yTo(y);

        glowX(x * 1.5);
        glowY(y * 1.5);
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white flex items-center pt-32 md:pt-40 px-6 sm:px-12 md:px-20 lg:px-28"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Glow */}
        <div
          ref={glowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-white/[0.03] blur-[180px] rounded-full"
        />

        {/* Ambient */}
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-white/[0.02] blur-[160px] rounded-full" />

        <div className="absolute bottom-[-30%] left-[-10%] w-[700px] h-[700px] bg-white/[0.015] blur-[160px] rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:80px_80px]" />

        {/* Noise */}
        <div className="absolute inset-0 opacity-[0.025] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1700px] mx-auto">
        {/* Label */}
        <div className="hero-item flex items-center gap-5 mb-10">
          <span className="w-16 h-[1px] bg-white/20" />

          <p className="uppercase tracking-[0.5em] text-[10px] md:text-xs text-white/40 font-semibold">
            Full Stack MERN Developer
          </p>
        </div>

        {/* Main Heading */}
        <div ref={titleRef} className="will-change-transform">
          <h1 className="hero-item text-[16vw] sm:text-[12vw] md:text-[9rem] lg:text-[10rem] xl:text-[11rem] leading-[0.82] tracking-[-0.08em] uppercase font-black">
            Crafting
            <br />
            <span className="italic text-white/20">Modern</span> Web
            <br />
            Experiences
          </h1>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col xl:flex-row items-start xl:items-end justify-between gap-16">
          {/* Description */}
          <div className="max-w-2xl">
            <p className="hero-item text-lg sm:text-xl md:text-2xl leading-relaxed text-white/50 font-light">
              I build scalable full-stack applications, cinematic interfaces,
              and modern digital experiences using React, Node.js, MongoDB,
              GSAP, and clean system architecture focused on performance and
              premium UI/UX.
            </p>

            {/* Buttons */}
            <div className="hero-item mt-12 flex flex-wrap items-center gap-5">
              {/* Primary */}
              <a
                href="#projects"
                className="group flex items-center gap-4 bg-white text-black px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold uppercase tracking-[0.25em] text-[10px] hover:scale-[1.03] transition duration-300"
              >
                View Projects
                <HiArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition"
                />
              </a>

              {/* Secondary */}
              <a
                href="#contact"
                className="px-8 md:px-10 py-4 md:py-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition duration-300 uppercase tracking-[0.25em] text-[10px] text-white/70"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Info */}
          <div className="hero-item flex flex-col items-start xl:items-end gap-10">
            {/* Socials */}
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/HemantMaru"
                target="_blank"
                rel="noreferrer"
                className="group w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] flex items-center justify-center transition duration-300"
              >
                <FaGithub
                  size={24}
                  className="text-white/50 group-hover:text-white transition"
                />
              </a>

              <a
                href="https://linkedin.com/in/hemant-maru-63012029a"
                target="_blank"
                rel="noreferrer"
                className="group w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] flex items-center justify-center transition duration-300"
              >
                <FaLinkedin
                  size={24}
                  className="text-white/50 group-hover:text-white transition"
                />
              </a>
            </div>

            {/* Mini Card */}
            <div className="border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-3xl px-8 py-6 max-w-sm">
              <p className="uppercase tracking-[0.35em] text-[9px] text-white/30 mb-4">
                Currently Building
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">
                AI Powered Web Platforms
              </h3>

              <p className="text-sm leading-relaxed text-white/40">
                Focused on MERN architecture, modern frontend systems, smooth
                interactions, and scalable backend engineering.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-6 sm:left-12 md:left-20 flex items-center gap-4">
        <div className="w-12 h-[1px] bg-white/10" />

        <p className="uppercase tracking-[0.35em] text-[9px] text-white/20">
          Scroll Down
        </p>
      </div>
    </section>
  );
};

export default Hero;
