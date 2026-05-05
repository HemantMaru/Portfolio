import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });
    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData,
      );
      if (res.data.success) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: "", email: "", message: "" });
        setTimeout(
          () => setStatus((prev) => ({ ...prev, success: false })),
          5000,
        );
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: err.response?.data?.error || "Connection failed. Try again.",
      });
      setTimeout(() => setStatus((prev) => ({ ...prev, error: null })), 5000);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-[#050505] text-white pt-32 overflow-hidden flex flex-col justify-between min-h-screen border-t border-white/5"
    >
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-12 z-10 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 fade-up">
          <div>
            <span className="text-[10px] font-bold tracking-[0.5em] text-white/30 uppercase block mb-4">
              Collaboration
            </span>
            <h2 className="text-6xl md:text-[7rem] font-black uppercase tracking-tighter leading-none">
              LET'S <span className="italic text-white/20">TALK.</span>
            </h2>
          </div>
          <div className="flex gap-6 mt-8 md:mt-0 text-white/40">
            <a
              href="https://github.com/hemant"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/hemant-maru"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors text-2xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* The Interactive Letter Form (Pro Level Vibe) */}
        <form onSubmit={handleSubmit} className="w-full fade-up relative">
          <p className="text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.6] md:leading-[1.8] text-white/40 max-w-5xl">
            Hi Hemant, my name is
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="[ Your Name ]"
              className="bg-transparent border-b-2 border-white/20 text-white placeholder:text-white/20 outline-none focus:border-white transition-colors w-full md:w-auto md:min-w-[300px] text-center pb-1 mx-0 md:mx-4 my-4 md:my-0 focus:bg-white/[0.02]"
            />
            and I'm looking to discuss
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="[ Project / Opportunity ]"
              className="bg-transparent border-b-2 border-white/20 text-white placeholder:text-white/20 outline-none focus:border-white transition-colors w-full md:w-auto md:min-w-[450px] text-center pb-1 mx-0 md:mx-4 my-4 md:my-0 focus:bg-white/[0.02]"
            />
            .
            <br className="hidden md:block" />
            You can reach me at
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="[ Email Address ]"
              className="bg-transparent border-b-2 border-white/20 text-white placeholder:text-white/20 outline-none focus:border-white transition-colors w-full md:w-auto md:min-w-[350px] text-center pb-1 mx-0 md:mx-4 my-4 md:my-0 focus:bg-white/[0.02]"
            />
            to get things started.
          </p>

          <div className="mt-16 flex items-center gap-8">
            <button
              type="submit"
              disabled={status.loading}
              className="group flex items-center justify-center gap-4 bg-white text-black px-12 py-6 font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#e0e0e0] transition-colors disabled:opacity-50"
            >
              {status.loading ? "Sending..." : "Send Message"}
              {!status.loading && (
                <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              )}
            </button>

            {status.success && (
              <span className="text-emerald-400 text-sm font-mono tracking-widest uppercase">
                ✓ Received
              </span>
            )}
            {status.error && (
              <span className="text-red-400 text-sm font-mono tracking-widest uppercase">
                X {status.error}
              </span>
            )}
          </div>
        </form>
      </div>

      {/* Mic-Drop Infinite Marquee Footer */}
      <div className="w-full overflow-hidden border-t border-white/5 py-6 bg-[#030303] mt-auto">
        <div className="marquee-container flex whitespace-nowrap opacity-20">
          <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-none pr-8">
            HEMANT MARU — MERN STACK ENGINEER — OPEN FOR OPPORTUNITIES —
          </h1>
          <h1 className="text-[10vw] font-black uppercase tracking-tighter leading-none pr-8">
            HEMANT MARU — MERN STACK ENGINEER — OPEN FOR OPPORTUNITIES —
          </h1>
        </div>
      </div>

      {/* Simple CSS for Marquee - Add this to your globals.css or keep it here */}
      <style jsx>{`
        .marquee-container {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        input::placeholder {
          font-style: italic;
          opacity: 0.5;
        }
      `}</style>
    </section>
  );
};

export default Contact;
