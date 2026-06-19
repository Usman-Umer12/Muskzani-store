import React, { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import about from "../assets/about.png";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // ✅ static content (no re-creation)
  const details = useMemo(
    () => [
      { label: "Founder", value: "Muhammad Ahmad" },
      { label: "Company", value: "Al Ahmad CNC" },
      { label: "Location", value: "Pakistan (Worldwide Shipping)" },
      { label: "Email", value: "muhammad.ahmadtx@gmail.com" },
      { label: "Phone", value: "+92 324 0655287" },
    ],
    []
  );

  // ================= GSAP (OPTIMIZED) =================
  useEffect(() => {
    let ctx;

    const runAnimation = async () => {
      const gsapLib = gsap;

      ctx = gsapLib.context(() => {
        const tl = gsapLib.timeline();

        tl.fromTo(
          textRef.current,
          { opacity: 0, x: -60 },
          { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" }
        );

        tl.fromTo(
          imageRef.current,
          { opacity: 0, x: 60, scale: 0.92 },
          { opacity: 1, x: 0, scale: 1, duration: 1 },
          "-=0.6"
        );
      });
    };

    runAnimation();

    return () => {
      if (ctx) ctx.revert?.();
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden text-white py-24">

      {/* BACKGROUND (lighter GPU load) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a120b] to-[#3b2a1a]" />

      {/* SOFT GLOW (reduced blur for performance) */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-[#b08968]/20 blur-[120px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#5c3b1e]/25 blur-[120px]" />

      {/* TOP WAVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="w-full h-[90px]" viewBox="0 0 1200 120">
          <path
            d="M321.39 56.44C197.8 89.94 91.66 111.84 0 103.59V0h1200v27.35..."
            className="fill-[#5c3b1e]"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div ref={textRef}>

            {/* TAG */}
            <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#b08968] animate-pulse" />
              <p className="uppercase tracking-[0.35em] text-[10px] text-zinc-300">
                About Woodgig
              </p>
            </div>

            {/* TITLE */}
            <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-light leading-[1.2] tracking-[0.12em]">
              Crafted With{" "}
              <span className="text-[#b08968] font-medium">
                Wood & Precision
              </span>
            </h1>

            {/* TEXT */}
            <p className="mt-8 text-zinc-300 text-base leading-relaxed max-w-2xl">
              Woodgig is a premium woodworking brand specializing in CNC carved luxury designs.
            </p>

            <p className="mt-5 text-zinc-400 text-sm leading-relaxed max-w-2xl">
              Every creation blends traditional craftsmanship with modern CNC precision.
            </p>

            {/* DETAILS */}
            <div className="mt-8 space-y-2 text-sm text-zinc-400">
              {details.map((d) => (
                <p key={d.label}>
                  <span className="text-[#b08968]">{d.label}:</span> {d.value}
                </p>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <Link to="/collections">
                <button className="px-8 h-12 rounded-full bg-[#b08968] text-black uppercase text-xs tracking-[0.25em] hover:scale-105 transition">
                  Explore Work
                </button>
              </Link>

              <Link to="/contact">
                <button className="px-8 h-12 rounded-full border border-white/20 bg-white/5 text-white uppercase text-xs tracking-[0.25em] hover:bg-white hover:text-black transition">
                  Contact Us
                </button>
              </Link>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div ref={imageRef} className="relative flex justify-center">

            <div className="absolute w-[280px] h-[280px] bg-[#b08968]/20 blur-[100px]" />

            <img
              src={about}
              alt="About"
              loading="lazy"
              decoding="async"
              className="relative z-10 w-full max-w-[420px] object-contain rounded-xl drop-shadow-[0_0_30px_rgba(176,137,104,0.2)]"
            />
          </div>

        </div>
      </div>

      {/* BOTTOM WAVE (lighter) */}
      <div className="absolute bottom-0  left-0 w-full overflow-hidden leading-none">
        <svg className="w-full h-[90px]" viewBox="0 0 1200 120">
          <path
            d="M985.66 92.83C906.67 72 823.78 31 743.84 14.19..."
            className="fill-[#3b2a1a]"
          />
        </svg>
      </div>

    </section>
  );
};

export default AboutPage;