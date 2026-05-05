import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple Slide Up - No heavy calculations
      gsap.from(".reveal", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-40 px-6 sm:px-12 md:px-24 bg-[#0a0a0a] text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left Column - Big Text */}
          <div className="lg:col-span-7">
            <span className="reveal text-xs font-bold tracking-[0.5em] text-white/30 uppercase block mb-8">
              Foundations & Philosophy
            </span>
            <h2 className="reveal text-5xl sm:text-7xl md:text-[6rem] font-black leading-[0.9] uppercase tracking-tighter italic">
              I build things <br />
              <span className="text-white/20 not-italic font-light">
                for a web people
              </span>{" "}
              <br />
              actually trust.
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-5 lg:pt-20 space-y-10">
            <p className="reveal text-xl sm:text-2xl text-white/80 font-medium leading-tight">
              I'm Hemant Maru, a MERN developer focused on architecting
              production-grade solutions that don't just work — they endure.
            </p>

            <div className="reveal space-y-6 text-white/40 leading-relaxed text-lg border-l border-white/10 pl-6">
              <p>
                In an era of mass-produced templates, I specialize in bespoke
                engineering. My approach blends industrial-strength backend
                stability with pixel-level frontend precision.
              </p>
              <p>
                Whether it's deploying a luxury e-commerce platform or
                optimizing critical logistics systems, my goal is Technical
                excellence.
              </p>
            </div>

            {/* Simple Stats Row */}
            <div className="reveal grid grid-cols-3 gap-8 pt-10 border-t border-white/5">
              <div>
                <div className="text-3xl font-black text-white italic">3+</div>
                <div className="text-[10px] font-bold tracking-widest text-white/20 uppercase mt-1">
                  Years
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-white italic">20+</div>
                <div className="text-[10px] font-bold tracking-widest text-white/20 uppercase mt-1">
                  Projects
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-white italic">
                  100%
                </div>
                <div className="text-[10px] font-bold tracking-widest text-white/20 uppercase mt-1">
                  Uptime
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
