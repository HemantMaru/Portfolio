import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTailwindcss,
  SiGreensock,
  SiGit,
  SiFirebase,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", x: 10, y: 20 },
  { name: "Express", icon: SiExpress, color: "#ffffff", x: 70, y: 15 },
  { name: "React", icon: SiReact, color: "#61DAFB", x: 40, y: 10 },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", x: 80, y: 50 },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", x: 15, y: 60 },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", x: 50, y: 80 },
  { name: "GSAP", icon: SiGreensock, color: "#88CE02", x: 5, y: 45 },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", x: 85, y: 75 },
  { name: "Git", icon: SiGit, color: "#F05032", x: 30, y: 40 },
  { name: "Postman", icon: SiPostman, color: "#FF6C37", x: 65, y: 55 },
];

const Skills = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((el, i) => {
        // Floating animation (controlled)
        gsap.to(el, {
          y: "+=15",
          duration: 2 + (i % 3),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Fade + scale reveal
        gsap.from(el, {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.05,
          ease: "back.out(1.7)",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Heading */}
      <motion.div
        style={{ y: textY }}
        className="absolute z-20 text-center pointer-events-none"
      >
        <h2 className="text-7xl md:text-[10rem] font-black uppercase">
          TECH <br />
          <span className="text-white/20 italic">STACK</span>
        </h2>
      </motion.div>

      {/* Skills */}
      <div className="absolute inset-0 hidden md:block">
        {skills.map((skill, i) => {
          const Icon = skill.icon;

          return (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="absolute group p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md cursor-pointer"
              style={{
                left: `${skill.x}%`,
                top: `${skill.y}%`,
              }}
            >
              <Icon
                size={35}
                style={{ color: skill.color }}
                className="group-hover:scale-125 transition"
              />

              <p className="text-xs text-white/40 mt-2 text-center group-hover:text-white">
                {skill.name}
              </p>

              {/* glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl transition"
                style={{ backgroundColor: skill.color }}
              />
            </div>
          );
        })}
      </div>

      {/* Mobile Grid */}
      <div className="md:hidden grid grid-cols-3 gap-6 z-30 px-6">
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <skill.icon size={28} style={{ color: skill.color }} />
            <span className="text-[9px] text-white/50 uppercase font-bold">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Glow background */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full" />
    </section>
  );
};

export default Skills;
