import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import video from "../assets/video.mp4";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";

const BannerHome = () => {
  const videoRef = useRef(null);

  const tagRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const reduceMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion && videoRef.current) {
      videoRef.current.pause();
    }

    // STORE STYLE SMOOTH ANIMATION
    const tl = gsap.timeline();

    tl.fromTo(
      tagRef.current,
      {
        opacity: 0,
        y: -40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    )

      .fromTo(
        headingRef.current,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.5"
      )

      .fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7"
      )

      .fromTo(
        btnRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.7"
      )

      .fromTo(
        scrollRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* VIDEO */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover scale-105"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* PREMIUM OVERLAYS */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/95" />

      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-black/20" />

      {/* RED LIGHT */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 blur-[140px]" />

      {/* WHITE LIGHT */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 blur-[160px]" />

      {/* CONTENT */}
      <div className="relative z-20 flex items-center justify-center h-full px-6">
        <div className="text-center max-w-5xl">
          {/* SMALL TAG */}
          <div
            ref={tagRef}
            className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full"
          >
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />

            <p className="tracking-[0.35em] uppercase text-[10px] sm:text-xs text-zinc-300">
              Exclusive Red & White Perfume House
            </p>
          </div>

          {/* HEADING */}
          <h1
            ref={headingRef}
            className="mt-30 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1] tracking-[0.18em]"
          >
            Pure{" "}
            <span className="text-red-500 font-medium drop-shadow-[0_0_25px_rgba(239,68,68,0.5)]">
              Luxury
            </span>
            <br />
            Fragrance
          </h1>

          {/* DESCRIPTION */}
          <p
            ref={textRef}
            className="mt-8 text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto"
          >
            Crafted with emotion, elegance, and identity. A signature scent
            designed to leave a lasting impression before you even speak.
          </p>

          {/* BUTTONS */}
          <div
            ref={btnRef}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <Link to="/collections">
              <button className="group relative overflow-hidden px-10 h-12 rounded-full bg-red-600 text-white text-xs tracking-[0.3em] uppercase transition-all duration-500 hover:scale-105 shadow-[0_0_35px_rgba(239,68,68,0.35)]">
                <span className="relative z-10">
                  Explore Collection
                </span>

                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              </button>
            </Link>

            <Link to="/about">
              <button className="px-10 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500">
                Our Story
              </button>
            </Link>
          </div>

          {/* SCROLL INDICATOR */}
          <div
            ref={scrollRef}
            className="mt-16 flex flex-col items-center justify-center"
          >
            {/* LINE */}
            <div className="w-[1px] h-12 bg-gradient-to-b from-red-500 to-transparent" />

            {/* ARROW */}
            <div className="mt-2 animate-bounce">
              <ChevronDown className="w-5 h-5 text-white/70" />
            </div>

            {/* TEXT */}
            <p className="text-[10px] tracking-[0.35em] uppercase text-zinc-500 mt-2">
              Scroll Down
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;