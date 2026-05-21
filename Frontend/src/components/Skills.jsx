import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

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
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
];

const SkillCard = ({ skill, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      y: index % 2 === 0 ? -12 : 12,
      duration: 2 + index * 0.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, [index]);

  const Icon = skill.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.08,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-white/10"
      style={{
        boxShadow: `0 0 25px -15px ${skill.color}`,
      }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-2xl transition duration-500"
        style={{
          backgroundColor: skill.color,
        }}
      />

      <Icon
        size={50}
        style={{
          color: skill.color,
        }}
        className="relative z-10 transition-transform duration-300 group-hover:scale-125"
      />

      <h3 className="relative z-10 text-sm md:text-base font-semibold tracking-wide text-white/80 group-hover:text-white">
        {skill.name}
      </h3>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden py-24 px-6 md:px-16">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-20">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.4em] text-cyan-400 text-sm mb-5"
        >
          My Technical Arsenal
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-8xl font-black leading-none"
        >
          TECH
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 italic">
            STACK
          </span>
        </motion.h2>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Skills;
