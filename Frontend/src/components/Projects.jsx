import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaGithub, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "NeuroVault",
    role: "Full Stack Architecture",
    description:
      "An intelligent digital vault designed to centralize YouTube videos, PDFs, notes, and web resources into a seamless second-brain ecosystem.",
    problem:
      "Modern workflows suffer from fragmented information scattered across platforms and tools.",
    solution:
      "Built a scalable MERN ecosystem with secure JWT authentication, content organization systems, and modern responsive UI architecture.",
    image: "/images/Neurovault.png",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    demo: "https://frontend-khaki-nu-22.vercel.app/",
    github: "https://github.com/HemantMaru/second-brain",
  },

  {
    title: "Vexora",
    role: "Frontend Engineering",
    description:
      "A premium fashion ecommerce experience focused on cinematic layouts, smooth interactions, and luxury-inspired product presentation.",
    problem:
      "Traditional ecommerce interfaces often feel generic, cluttered, and visually outdated.",
    solution:
      "Created a modern frontend experience with immersive layouts, responsive architecture, and smooth GSAP-powered interactions.",
    image: "/images/Vexora.png",
    tech: ["React", "Tailwind", "GSAP", "JavaScript"],
    demo: "https://vexora-in.vercel.app",
    github: "https://github.com/HemantMaru/vexora",
  },

  {
    title: "AI Interview Platform",
    role: "MERN + AI Systems",
    description:
      "A real-time AI powered interview platform designed for technical assessments, practice sessions, and intelligent interview workflows.",
    problem:
      "Traditional interview preparation lacks realistic interaction and intelligent feedback systems.",
    solution:
      "Developed scalable interview workflows with AI integrations, authentication systems, and modern dashboard experiences.",
    image: "/images/interview.png",
    tech: ["React", "Node.js", "MongoDB", "AI APIs"],
    demo: "#",
    github: "#",
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-reveal", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 75%",
        },
      });

      // Image Scale
      gsap.to(".project-image", {
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={cardRef}
      className="relative min-h-screen flex items-center border-t border-white/5 overflow-hidden bg-[#050505]"
    >
      {/* Ambient Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-white/[0.02] blur-[180px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1700px] mx-auto w-full px-6 sm:px-12 md:px-20 lg:px-28 grid lg:grid-cols-12 gap-16 items-center">
        {/* LEFT */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Index */}
          <div className="project-reveal flex items-center gap-5">
            <span className="w-14 h-[1px] bg-white/15" />

            <p className="uppercase tracking-[0.45em] text-[10px] text-white/35 font-semibold">
              0{index + 1}
            </p>
          </div>

          {/* Heading */}
          <div>
            <span className="project-reveal uppercase tracking-[0.35em] text-[10px] text-white/30">
              {project.role}
            </span>

            <h2 className="project-reveal mt-5 text-[15vw] sm:text-[10vw] md:text-[6rem] xl:text-[7rem] leading-[0.85] tracking-[-0.08em] uppercase font-black">
              {project.title}
            </h2>
          </div>

          {/* Description */}
          <p className="project-reveal text-lg md:text-xl leading-relaxed text-white/45 max-w-2xl">
            {project.description}
          </p>

          {/* Challenge */}
          <div className="project-reveal border-l border-white/10 pl-6 space-y-5">
            <p className="text-white/35 leading-relaxed">
              <span className="text-white font-semibold">Challenge:</span>{" "}
              {project.problem}
            </p>

            <p className="text-white/35 leading-relaxed">
              <span className="text-white font-semibold">Solution:</span>{" "}
              {project.solution}
            </p>
          </div>

          {/* Tech */}
          <div className="project-reveal flex flex-wrap gap-3 pt-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-5 py-3 border border-white/10 bg-white/[0.03] rounded-2xl uppercase tracking-[0.2em] text-[10px] text-white/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="project-reveal flex flex-wrap items-center gap-5 pt-6">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-2xl uppercase tracking-[0.25em] text-[10px] font-bold hover:scale-[1.03] transition duration-300"
            >
              Live Preview
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="group w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] flex items-center justify-center transition duration-300"
            >
              <FaGithub className="text-white/50 group-hover:text-white transition" />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-7">
          <div className="project-reveal relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] aspect-[16/10]">
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="project-image absolute inset-0 w-full h-full object-cover opacity-70 hover:opacity-100 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/20 to-transparent" />

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 border border-white/10 bg-black/40 backdrop-blur-2xl rounded-3xl px-8 py-6 max-w-sm">
              <p className="uppercase tracking-[0.35em] text-[9px] text-white/30 mb-4">
                Project Overview
              </p>

              <h3 className="text-2xl font-semibold text-white mb-3">
                Modern Product Engineering
              </h3>

              <p className="text-sm leading-relaxed text-white/40">
                Built with scalable frontend systems, clean UI architecture,
                responsive layouts, and modern interaction design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {/* Intro */}
      <section className="relative min-h-[70vh] flex items-center px-6 sm:px-12 md:px-20 lg:px-28 border-t border-white/5">
        <div className="max-w-[1700px] mx-auto w-full">
          {/* Label */}
          <div className="flex items-center gap-5 mb-10">
            <span className="w-14 h-[1px] bg-white/15" />

            <p className="uppercase tracking-[0.45em] text-[10px] text-white/35 font-semibold">
              Selected Projects
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-[16vw] sm:text-[12vw] md:text-[9rem] xl:text-[11rem] leading-[0.82] tracking-[-0.08em] uppercase font-black">
            FEATURED
            <br />
            <span className="italic text-white/20">WORK</span>
          </h1>
        </div>
      </section>

      {/* Projects */}
      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* Outro */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden border-t border-white/5">
        {/* Ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[180px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl">
          <p className="uppercase tracking-[0.45em] text-[10px] text-white/35 font-semibold mb-8">
            Let’s Create Something Exceptional
          </p>

          <h2 className="text-[14vw] sm:text-[9vw] md:text-[7rem] xl:text-[8rem] leading-[0.85] tracking-[-0.08em] uppercase font-black">
            READY
            <br />
            <span className="italic text-white/20">TO BUILD?</span>
          </h2>

          <p className="mt-10 text-lg md:text-xl leading-relaxed text-white/45 max-w-3xl mx-auto">
            Building modern digital experiences with scalable engineering,
            cinematic UI systems, and performance-focused architecture.
          </p>

          {/* Buttons */}
          <div className="mt-14 flex flex-wrap justify-center items-center gap-5">
            <a
              href="#contact"
              className="group flex items-center gap-4 bg-white text-black px-10 py-5 rounded-2xl uppercase tracking-[0.25em] text-[10px] font-bold hover:scale-[1.03] transition duration-300"
            >
              Start Project
              <FaArrowRight className="group-hover:translate-x-1 transition" />
            </a>

            <a
              href="https://github.com/HemantMaru"
              target="_blank"
              rel="noreferrer"
              className="px-10 py-5 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] rounded-2xl uppercase tracking-[0.25em] text-[10px] text-white/70 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
