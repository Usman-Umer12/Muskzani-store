// src/pages/AboutPage.jsx

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import about from "../assets/about.png";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { opacity: 0, x: -120 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power4.out" }
    );

    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: 120, scale: 0.85 },
      { opacity: 1, x: 0, scale: 1, duration: 1.3, ease: "power4.out" },
      "-=0.9"
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden text-white py-24"
    >
      {/* 🌑 WOOD + BLACK LUXURY BACKGROUND (60% INTERIOR BROWN) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a120b] to-[#3b2a1a]" />

      {/* SOFT WOOD GLOW */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-[#b08968]/25 blur-[160px]" />
      <div className="absolute bottom-[-140px] right-[-140px] w-[380px] h-[380px] bg-[#5c3b1e]/30 blur-[170px]" />

      {/* TOP WAVE (WOOD COLOR) */}
      <div className="absolute mt-20 top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[110px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.44C197.8 89.94 91.66 111.84 0 103.59V0h1200v27.35c-82.39 26.26-168.19 36.74-252.45 27.61-86.17-9.33-172.53-39.29-258.86-42.87-131.91-5.49-259.18 44.33-367.3 44.35z"
            className="fill-[#5c3b1e]"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative mt-20 z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT TEXT */}
          <div ref={textRef}>

            {/* TAG */}
            <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#b08968] animate-pulse" />
              <p className="uppercase tracking-[0.35em] text-[10px] text-zinc-300">
                About Woodgig
              </p>
            </div>

            {/* HEADING */}
            <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-light leading-[1.2] tracking-[0.12em]">
              Crafted With{" "}
              <span className="text-[#b08968] font-medium">
                Wood & Precision
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 text-zinc-300 text-base leading-relaxed max-w-2xl">
              Woodgig is a premium woodworking brand founded by Muhammad Ahmad,
              specializing in handcrafted and CNC-carved wooden art, luxury walking canes,
              home décor, custom gifts, and 3D relief carvings.
            </p>

            <p className="mt-5 text-zinc-400 text-sm leading-relaxed max-w-2xl">
              Every creation blends traditional craftsmanship with modern CNC precision,
              turning raw wood into timeless luxury pieces.
            </p>

            {/* DETAILS */}
            <div className="mt-8 space-y-2 text-sm text-zinc-400">
              <p><span className="text-[#b08968]">Founder:</span> Muhammad Ahmad</p>
              <p><span className="text-[#b08968]">Company:</span> Al Ahmad CNC</p>
              <p><span className="text-[#b08968]">Location:</span> Pakistan (Worldwide Shipping)</p>
              <p><span className="text-[#b08968]">Email:</span> muhammad.ahmadtx@gmail.com</p>
              <p><span className="text-[#b08968]">Phone:</span> +92 324 0655287</p>
            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <Link to="/collections">
                <button className="px-8 h-12 rounded-full bg-[#b08968] text-black uppercase text-xs tracking-[0.25em] hover:scale-105 transition-all shadow-lg">
                  Explore Work
                </button>
              </Link>

              <Link to="/contact">
                <button className="px-8 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white uppercase text-xs tracking-[0.25em] hover:bg-white hover:text-black transition-all">
                  Contact Us
                </button>
              </Link>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div ref={imageRef} className="relative flex justify-center">

            {/* WOOD GLOW */}
            <div className="absolute w-[320px] h-[320px] bg-[#b08968]/25 blur-[130px]" />

            <img
              src={about}
              alt="About Woodgig"
              className="relative z-10 w-full h-220 rounded-2xl max-w-[460px] object-contain drop-shadow-[0_0_40px_rgba(176,137,104,0.25)]"
            />
          </div>

        </div>
      </div>

      {/* BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[110px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66 92.83C906.67 72 823.78 31 743.84 14.19c-82.26-17.34-168.06-9.16-250.45 8.75C375.11 48.47 287.46 87.93 200 96.73 121.81 104.59 46.73 93.58 0 72.9V120h1200V95.8c-67.54 25.79-143.46 23.17-214.34-2.97z"
            className="fill-[#3b2a1a]"
          />
        </svg>
      </div>
    </section>
  );
};

export default AboutPage;