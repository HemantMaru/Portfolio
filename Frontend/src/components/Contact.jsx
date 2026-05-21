import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: null,
    });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData,
      );

      if (res.data.success) {
        setStatus({
          loading: false,
          success: true,
          error: null,
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => {
          setStatus((prev) => ({
            ...prev,
            success: false,
          }));
        }, 4000);
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: err.response?.data?.error || "Something went wrong.",
      });

      setTimeout(() => {
        setStatus((prev) => ({
          ...prev,
          error: null,
        }));
      }, 4000);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-black text-white border-t border-white/10"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-white/[0.03] blur-[160px] rounded-full pointer-events-none" />

      {/* Main */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-28 md:py-40">
        {/* Header */}
        <div className="fade-up flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 mb-24">
          <div>
            <span className="uppercase tracking-[0.5em] text-white/30 text-xs block mb-6">
              Contact
            </span>

            <h2 className="text-5xl md:text-[8rem] font-black leading-none tracking-tight uppercase">
              LET'S
              <br />
              <span className="italic text-white/20">WORK</span> TOGETHER
            </h2>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition duration-300"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="fade-up grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Left */}
          <div className="space-y-8">
            <div>
              <label className="block text-sm uppercase tracking-[0.3em] text-white/30 mb-4">
                Your Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-transparent border border-white/10 rounded-2xl px-6 py-5 outline-none text-white placeholder:text-white/20 focus:border-white/30 transition"
              />
            </div>

            <div>
              <label className="block text-sm uppercase tracking-[0.3em] text-white/30 mb-4">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-transparent border border-white/10 rounded-2xl px-6 py-5 outline-none text-white placeholder:text-white/20 focus:border-white/30 transition"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col h-full">
            <label className="block text-sm uppercase tracking-[0.3em] text-white/30 mb-4">
              Project Details
            </label>

            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows="8"
              className="w-full flex-1 bg-transparent border border-white/10 rounded-2xl px-6 py-5 outline-none text-white placeholder:text-white/20 focus:border-white/30 transition resize-none"
            />

            {/* Button */}
            <div className="mt-8 flex items-center gap-6 flex-wrap">
              <button
                type="submit"
                disabled={status.loading}
                className="group inline-flex items-center gap-4 px-10 py-5 rounded-2xl bg-white text-black font-bold uppercase tracking-[0.2em] text-sm hover:bg-white/90 transition duration-300 disabled:opacity-50"
              >
                {status.loading ? "Sending..." : "Send Message"}

                {!status.loading && (
                  <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
                )}
              </button>

              {/* Status */}
              {status.success && (
                <span className="text-sm uppercase tracking-[0.2em] text-white/50">
                  Message Sent
                </span>
              )}

              {status.error && (
                <span className="text-sm uppercase tracking-[0.2em] text-white/40">
                  {status.error}
                </span>
              )}
            </div>
          </div>
        </form>
      </div>

      {/* Marquee */}
      <div className="border-t border-white/10 overflow-hidden py-8">
        <div className="marquee flex whitespace-nowrap">
          <h1 className="text-[12vw] font-black uppercase tracking-tight text-white/10 pr-10">
            HEMANT MARU — MERN STACK DEVELOPER —
          </h1>

          <h1 className="text-[12vw] font-black uppercase tracking-tight text-white/10 pr-10">
            HEMANT MARU — MERN STACK DEVELOPER —
          </h1>
        </div>
      </div>

      {/* Marquee CSS */}
      <style jsx>{`
        .marquee {
          animation: marquee 18s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
