import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  const steps = [
    {
      id: "01",
      title: "Discovery",
      desc: "Understanding objectives, users, and constraints to build a strong foundation.",
    },
    {
      id: "02",
      title: "Planning",
      desc: "Designing architecture, defining stack, and mapping user journeys.",
    },
    {
      id: "03",
      title: "Development",
      desc: "Building scalable, high-performance systems with clean code.",
    },
    {
      id: "04",
      title: "Deployment",
      desc: "Testing, optimizing, and deploying to production infrastructure.",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const stepsEl = gsap.utils.toArray(".process-step");

      // Reveal Animation
      gsap.from(stepsEl, {
        opacity: 0,
        y: 80,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Scale + fade while scrolling
      stepsEl.forEach((step) => {
        gsap.to(step, {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        });
      });

      // Vertical progress line animation
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 20%",
            end: "bottom 80%",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-32 sm:py-40 px-6 sm:px-12 md:px-24 bg-primary overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-20">
        {/* LEFT SIDE */}
        <div className="lg:col-span-5 sticky top-32 h-fit">
          <span className="text-xs font-bold tracking-[0.5em] text-white/20 uppercase block mb-10">
            The Methodology
          </span>

          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.85] uppercase tracking-tight">
            How <br />
            <span className="text-muted/30 italic">I Work</span>
          </h2>

          <p className="mt-10 text-white/30 text-xs tracking-widest uppercase">
            Strategy over templates.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-7 relative">
          {/* Animated vertical line */}
          <div className="absolute left-3 top-0 w-[2px] h-full bg-white/10">
            <div ref={lineRef} className="w-full bg-white origin-top h-0"></div>
          </div>

          <div className="space-y-20">
            {steps.map((step, i) => (
              <div key={i} className="process-step relative pl-12 group">
                {/* Dot */}
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-white/30 group-hover:bg-white transition"></div>

                <div className="flex flex-col gap-4">
                  <span className="text-3xl font-black text-white/10 group-hover:text-white transition">
                    {step.id}
                  </span>

                  <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-base sm:text-lg text-muted/60 leading-relaxed max-w-lg">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-white/[0.02] blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </section>
  );
};

export default Process;
