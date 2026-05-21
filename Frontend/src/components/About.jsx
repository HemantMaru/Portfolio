import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
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
      className="relative overflow-hidden bg-black text-white py-24 md:py-40 px-6 sm:px-12 md:px-24"
    >
      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Side */}
          <div className="lg:col-span-7">
            <span className="reveal text-xs tracking-[0.5em] uppercase text-white/30 block mb-8 font-semibold">
              About Me
            </span>

            <h2 className="reveal text-5xl sm:text-7xl md:text-[6rem] font-black leading-[0.9] tracking-tight uppercase">
              I build
              <br />
              <span className="italic text-white/20">modern</span> digital
              <br />
              products.
            </h2>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-5 lg:pt-16">
            {/* Intro */}
            <p className="reveal text-lg sm:text-xl text-white/80 leading-relaxed">
              I'm Hemant Maru, a MERN Stack Developer focused on creating
              modern, scalable, and visually refined web experiences using
              React, Node.js, MongoDB, and contemporary frontend technologies.
            </p>

            {/* Paragraphs */}
            <div className="reveal mt-10 border-l border-white/10 pl-6 space-y-6 text-white/50 leading-relaxed">
              <p>
                I enjoy building responsive interfaces, interactive animations,
                and full-stack applications that balance clean aesthetics with
                strong engineering principles.
              </p>

              <p>
                From ecommerce platforms to AI-powered products, my focus is
                always on performance, usability, and modern digital experiences
                that feel polished and reliable.
              </p>
            </div>

            {/* Stats */}
            <div className="reveal grid grid-cols-3 gap-8 pt-12 mt-12 border-t border-white/10">
              <div>
                <h3 className="text-4xl font-black italic">20+</h3>

                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black italic">MERN</h3>

                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Stack
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-black italic">AI</h3>

                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Products
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
