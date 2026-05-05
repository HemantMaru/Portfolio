import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "NeuroVault",
    role: "Full-Stack Architect",
    description:
      "A 'Second Brain' ecosystem designed to organize digital content, seamlessly integrating YouTube videos and PDFs into a centralized, searchable vault.",
    problem:
      "Information fragmentation across platforms leads to lost context and reduced productivity.",
    solution:
      "Engineered a bespoke MERN architecture with robust JWT/cookie authentication for secure content retention.",
    image: "/images/neurovault.png",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    demo: "#",
    github: "#",
    theme: "#050505", // Deepest Black
  },
  {
    title: "Moodifier",
    role: "Frontend Engineer",
    description:
      "A real-time intelligent application that interfaces with webcams to detect facial expressions and dynamically maps them to curated music selections.",
    problem:
      "Static playlists fail to adapt dynamically to a user's current emotional state.",
    solution:
      "Integrated real-time ML facial recognition pipelines with dynamic audio routing algorithms.",
    image: "/images/moodifier.png",
    tech: ["React", "Face API", "JavaScript", "Tailwind"],
    demo: "#",
    github: "#",
    theme: "#0a0a0a", // Slightly lighter black
  },
  {
    title: "QueryAI",
    role: "Full-Stack Developer",
    description:
      "An advanced AI query interface inspired by Perplexity, designed for deep-dive information retrieval and contextual data synthesis.",
    problem:
      "Standard search outputs isolated links rather than synthesized, immediate answers.",
    solution:
      "Built a high-performance UI wrapping complex LLM API calls with real-time streaming responses.",
    image: "/images/queryai.png",
    tech: ["React", "Node.js", "Tailwind", "REST API"],
    demo: "#",
    github: "#",
    theme: "#080808", // Industrial Black
  },
];

const ProjectCard = ({ project, index, total }) => {
  const innerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple text reveal when card becomes visible
      gsap.from(".reveal-text", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: innerRef.current,
          start: "top 70%",
        },
      });
    }, innerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="sticky top-0 min-h-screen w-full flex items-center justify-center border-t border-white/5 overflow-hidden"
      style={{ backgroundColor: project.theme }}
    >
      <div
        ref={innerRef}
        className="max-w-[1400px] mx-auto w-full px-6 sm:px-12 md:px-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
      >
        {/* Left: Content */}
        <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1 mt-10 lg:mt-0">
          <div className="space-y-4">
            <span className="reveal-text inline-block text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">
              0{index + 1} / 0{total} — {project.role}
            </span>
            <h3 className="reveal-text text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
              {project.title}
            </h3>
          </div>

          <p className="reveal-text text-lg text-white/60 font-medium leading-relaxed">
            {project.description}
          </p>

          <div className="reveal-text space-y-4 border-l border-white/10 pl-6 hidden sm:block">
            <p className="text-sm text-white/40">
              <strong className="text-white">Challenge:</strong>{" "}
              {project.problem}
            </p>
            <p className="text-sm text-white/40">
              <strong className="text-white">Execution:</strong>{" "}
              {project.solution}
            </p>
          </div>

          <div className="reveal-text flex flex-wrap gap-2 pt-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[10px] font-bold px-4 py-2 rounded-none bg-white/[0.03] border border-white/10 uppercase text-white/50 hover:bg-white/10 hover:text-white transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="reveal-text flex items-center gap-8 mt-6">
            <a
              href={project.demo}
              className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white border-b border-white/20 pb-1 hover:border-white transition-all"
            >
              View Live{" "}
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href={project.github}
              className="text-xl text-white/30 hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="lg:col-span-7 order-1 lg:order-2 reveal-text">
          <div className="relative group w-full aspect-[4/3] md:aspect-[16/10] bg-[#111] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
              onError={(e) =>
                (e.target.src =
                  "https://via.placeholder.com/1200x800/111/333?text=Project+Visual")
              }
            />
            {/* Minimal overlay lines */}
            <div className="absolute inset-0 border border-white/10 pointer-events-none mix-blend-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <div id="projects" className="relative bg-[#050505] text-white">
      {/* Intro Section */}
      <section className="h-[60vh] w-full flex flex-col justify-center px-6 md:px-24">
        <div className="max-w-7xl mx-auto w-full">
          <span className="text-[10px] font-bold tracking-[0.5em] text-white/30 uppercase block mb-6">
            Selected Archives
          </span>
          <h2 className="text-6xl md:text-[9rem] font-black tracking-tighter uppercase leading-[0.8]">
            THE <br /> <span className="text-white/20 italic">WORK</span>.
          </h2>
        </div>
      </section>

      {/* Projects Stack (Natively Sticky) */}
      <div className="relative w-full z-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            total={projects.length}
          />
        ))}
      </div>

      {/* Outro Section */}
      <section className="min-h-[80vh] w-full flex flex-col items-center justify-center text-center px-6 bg-[#030303] relative z-20">
        <div className="max-w-4xl space-y-12">
          <h4 className="text-5xl md:text-[6rem] font-black uppercase tracking-tighter leading-[0.85]">
            Ready to <br />
            <span className="text-transparent stroke-text italic">Build?</span>
          </h4>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="mailto:hello@example.com"
              className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-[#ddd] transition-colors"
            >
              Initialize Contact
            </a>
            <a
              href="https://github.com"
              className="px-10 py-5 bg-transparent border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white/5 flex items-center justify-center gap-3 transition-colors"
            >
              GitHub <FaGithub />
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Projects;
