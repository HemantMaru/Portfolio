import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionWrapper = ({ children, id, className = "" }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth Fade + Lift
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 120,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Slight Parallax
      gsap.to(sectionRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Child Reveal
      gsap.utils
        .toArray(sectionRef.current.querySelectorAll(".reveal-item"))
        .forEach((item, i) => {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              y: 80,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              delay: i * 0.08,
              ease: "power4.out",
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
              },
            },
          );
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`
        relative
        overflow-hidden
        py-28
        md:py-40
        px-6
        sm:px-12
        md:px-20
        lg:px-28
        bg-[#050505]
        text-white
        ${className}
      `}
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-white/[0.02] blur-[180px] rounded-full" />

        <div className="absolute bottom-[-30%] left-[-10%] w-[700px] h-[700px] bg-white/[0.015] blur-[180px] rounded-full" />

        {/* Grid Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:90px_90px]" />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5" />

      {/* Content */}
      <div className="relative z-10 max-w-[1700px] mx-auto">{children}</div>
    </section>
  );
};

export default SectionWrapper;
