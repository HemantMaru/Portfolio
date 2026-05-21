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
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiFramer,
  SiSocketdotio,
  SiDocker,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },

  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#539E43",
  },

  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#4FAA41",
  },

  {
    name: "Express",
    icon: SiExpress,
    color: "#EDEDED",
  },

  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },

  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },

  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#ffffff",
  },

  {
    name: "Redux",
    icon: SiRedux,
    color: "#764ABC",
  },

  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#38BDF8",
  },

  {
    name: "GSAP",
    icon: SiGreensock,
    color: "#88CE02",
  },

  {
    name: "Framer",
    icon: SiFramer,
    color: "#ffffff",
  },

  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
  },

  {
    name: "Socket.io",
    icon: SiSocketdotio,
    color: "#ffffff",
  },

  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },

  {
    name: "Git",
    icon: SiGit,
    color: "#F1502F",
  },

  {
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C37",
  },
];

const SkillCard = ({ skill, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Floating Animation
    gsap.to(cardRef.current, {
      y: index % 2 === 0 ? -14 : 14,

      duration: 2.5 + index * 0.08,

      repeat: -1,

      yoyo: true,

      ease: "sine.inOut",
    });

    // Mouse Move Tilt
    const card = cardRef.current;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;

      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(card, {
        rotateY: x / 18,
        rotateX: -y / 18,
        transformPerspective: 1000,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const reset = () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.7,
        ease: "power3.out",
      });
    };

    card.addEventListener("mousemove", handleMove);

    card.addEventListener("mouseleave", reset);

    return () => {
      card.removeEventListener("mousemove", handleMove);

      card.removeEventListener("mouseleave", reset);
    };
  }, [index]);

  const Icon = skill.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.04,
      }}
      viewport={{
        once: true,
      }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-7 md:p-8 flex flex-col items-center justify-center gap-5 transition duration-500 hover:bg-white/[0.05] will-change-transform"
    >
      {/* Ambient Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 blur-3xl"
        style={{
          background: `${skill.color}15`,
        }}
      />

      {/* Inner Border */}
      <div className="absolute inset-[1px] rounded-[2rem] border border-white/[0.04] pointer-events-none" />

      {/* Icon */}
      <div className="relative z-10">
        <Icon
          size={48}
          style={{
            color: skill.color,
          }}
          className="transition duration-500 group-hover:scale-125 group-hover:-translate-y-1"
        />
      </div>

      {/* Name */}
      <h3 className="relative z-10 text-sm md:text-[15px] font-semibold tracking-wide text-white/75 group-hover:text-white transition duration-300">
        {skill.name}
      </h3>

      {/* Hover Shine */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] translate-x-[-100%] group-hover:translate-x-[100%]" />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] text-white py-32 md:py-40 px-6 sm:px-12 md:px-20 lg:px-28"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-white/[0.02] blur-[180px] rounded-full" />

        {/* Extra */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-white/[0.015] blur-[180px] rounded-full" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      {/* Main */}
      <div className="relative z-10 max-w-[1700px] mx-auto">
        {/* Top */}
        <div className="flex flex-col xl:flex-row items-start xl:items-end justify-between gap-14 mb-24">
          {/* Left */}
          <div>
            <div className="flex items-center gap-5 mb-10">
              <span className="w-14 h-[1px] bg-white/15" />

              <p className="uppercase tracking-[0.45em] text-[10px] text-white/35 font-semibold">
                Technical Expertise
              </p>
            </div>

            <h2 className="text-[16vw] sm:text-[12vw] md:text-[8rem] xl:text-[10rem] leading-[0.82] tracking-[-0.08em] uppercase font-black">
              TECH
              <br />
              <span className="italic text-white/20">STACK</span>
            </h2>
          </div>

          {/* Right */}
          <div className="max-w-xl">
            <p className="text-lg md:text-xl leading-relaxed text-white/45">
              Building modern digital products using scalable frontend systems,
              backend architecture, animation frameworks, realtime technologies,
              and production-focused engineering workflows.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Bottom Strip */}
        <div className="mt-28 border-t border-white/5 pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="uppercase tracking-[0.35em] text-[10px] text-white/25">
            Full Stack Engineering • UI Systems • Performance Architecture
          </p>

          <p className="text-white/30 text-sm">
            React • MERN • GSAP • Modern UI/UX
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
