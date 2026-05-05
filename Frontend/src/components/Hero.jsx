import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        gsap.set(".reveal", { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1.2 },
      });

      tl.from(".reveal", {
        y: 100,
        opacity: 0,
        stagger: 0.15,
      });

      // Smooth Parallax (optimized with RAF)
      let xTo = gsap.quickTo(titleRef.current, "x", {
        duration: 1,
        ease: "power3.out",
      });
      let yTo = gsap.quickTo(titleRef.current, "y", {
        duration: 1,
        ease: "power3.out",
      });

      const handleMouseMove = (e) => {
        if (window.innerWidth < 1024) return;

        const x = (e.clientX / window.innerWidth - 0.5) * 40;
        const y = (e.clientY / window.innerHeight - 0.5) * 40;

        xTo(x);
        yTo(y);
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
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center px-6 sm:px-12 md:px-24 overflow-hidden"
    >
      <div className="max-w-6xl z-10 w-full">
        {/* Tagline */}
        <p className="reveal text-xs sm:text-sm font-bold tracking-[0.5em] uppercase text-white/40 mb-8 flex items-center gap-4">
          <span className="w-12 h-[1px] bg-white/20"></span>
          Creative Engineer & Developer
        </p>

        {/* Title */}
        <h1
          ref={titleRef}
          className="reveal text-5xl sm:text-7xl md:text-[7rem] font-black leading-[0.9] tracking-tight uppercase"
        >
          Building <span className="text-muted/30 italic">Cinematic</span>{" "}
          <br className="hidden md:block" />
          Full-Stack <span className="glow-text">Impact</span>
        </h1>

        {/* Description */}
        <p className="reveal mt-8 max-w-2xl text-lg sm:text-xl text-muted leading-relaxed">
          I craft high-performance digital products combining engineering
          precision with cinematic design — delivering scalable and impactful
          web solutions.
        </p>

        {/* Actions */}
        <div className="reveal mt-10 flex flex-wrap items-center gap-6">
          <a
            href="#projects"
            className="btn-primary px-10 py-4 text-base transition-all hover:scale-105"
          >
            Explore Work
          </a>

          <div className="flex gap-5 text-xl text-white/30">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-6 sm:left-12 text-white/20 text-xs tracking-widest uppercase">
        Scroll ↓
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[70vw] h-[70vw] bg-white/[0.02] blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[70vw] h-[70vw] bg-white/[0.01] blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>
    </section>
  );
};

export default Hero;
