import React, { useEffect, useRef, useState } from "react";
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

// --- TechIcon Component (Individual Skill Card) ---
const TechIcon = ({ skill, index }) => {
  const cardRef = useRef(null);
  const { icon: Icon, name, color, x, y } = skill;

  useEffect(() => {
    // Floating Animation (GSAP)
    gsap.to(cardRef.current, {
      y: "random(-15, 15)",
      x: "random(-15, 15)",
      duration: `random(2, 4)`,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: index * 0.1,
    });
  }, [index]);

  // Magnetic effect on Mouse Move
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate distance from center
    const moveX = (clientX - centerX) * 0.3;
    const moveY = (clientY - centerY) * 0.3;

    gsap.to(cardRef.current, {
      x: moveX,
      y: moveY,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
      className="absolute p-4 md:p-6 rounded-2xl backdrop-blur-md border border-white/10 bg-white/5 group cursor-pointer"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        boxShadow: `0 0 20px -10px ${color}`,
      }}
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <Icon
          size={35}
          style={{ color }}
          className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:scale-125 transition-transform duration-300"
        />
        <span className="text-[10px] font-black tracking-widest uppercase text-white/40 group-hover:text-white transition-colors">
          {name}
        </span>
      </div>

      {/* Glow Effect on Hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl -z-10"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};

// --- Main Skills Component ---
const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);

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

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex items-center justify-center py-20"
    >
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50" />

      {/* Main Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 text-center select-none pointer-events-none"
      >
        <h4 className="text-blue-500 font-mono tracking-[0.5em] mb-4 text-sm md:text-base uppercase">
          My Technical Arsenal
        </h4>
        <h2 className="text-6xl md:text-[10rem] font-black text-white leading-none tracking-tighter">
          TECH <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white/50 to-white/5 italic">
            STACK
          </span>
        </h2>
      </motion.div>

      {/* Skills Canvas */}
      <div className="absolute inset-0 z-10 hidden md:block">
        {skills.map((skill, i) => (
          <TechIcon key={i} skill={skill} index={i} />
        ))}
      </div>

      {/* Mobile View: Simple Grid (Better UX for Phones) */}
      <div className="md:hidden grid grid-cols-3 gap-6 z-30 mt-10 px-6">
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <skill.icon size={30} style={{ color: skill.color }} />
            <span className="text-[8px] text-white/50 uppercase font-bold">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Ambient Decorative Light */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-600/20 blur-[120px] rounded-full" />
    </section>
  );
};

export default Skills;
