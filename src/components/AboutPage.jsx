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
      {
        opacity: 0,
        x: -120,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.3,
        ease: "power4.out",
      }
    );

    tl.fromTo(
      imageRef.current,
      {
        opacity: 0,
        x: 120,
        scale: 0.8,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.4,
        ease: "power4.out",
      },
      "-=1"
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black text-white py-24"
    >
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#080808] to-black" />

      {/* RED GLOW */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-red-600/20 blur-[140px]" />

      {/* WHITE GLOW */}
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-white/10 blur-[160px]" />

      {/* WAVE TOP */}
      <div className="absolute mt-20 top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[110px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.44C197.8 89.94 91.66 111.84 0 103.59V0h1200v27.35c-82.39 26.26-168.19 36.74-252.45 27.61-86.17-9.33-172.53-39.29-258.86-42.87-131.91-5.49-259.18 44.33-367.3 44.35z"
            className="fill-red-600"
          ></path>
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative mt-20 z-10 max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE TEXT */}
          <div ref={textRef}>

            {/* SMALL TAG */}
            <div className="inline-flex mt-12 items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full">

              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />

              <p className="tracking-[0.35em] uppercase text-[10px] sm:text-xs text-zinc-300">
                Our Story
              </p>

            </div>

            {/* HEADING */}
            <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl font-light leading-[1.1] tracking-[0.15em]">

              Crafted With{" "}

              <span className="text-red-500 font-medium drop-shadow-[0_0_20px_rgba(239,68,68,0.5)]">
                Passion
              </span>

            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl">

              At our luxury fragrance house, every perfume is more than
              just a scent — it is an emotion, an identity, and a lasting
              impression. Inspired by elegance and modern sophistication,
              we create premium fragrances crafted for those who want
              to stand out with confidence and timeless style.

            </p>

            <p className="mt-6 text-zinc-500 text-sm md:text-base leading-relaxed max-w-2xl">

              Our red & white signature theme represents passion,
              purity, and luxury. From carefully selected ingredients
              to refined bottle aesthetics, every detail is designed
              to deliver a truly premium experience.

            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5">

              <Link
              to="/collections"
              >
              <button className="group relative overflow-hidden px-10 h-12 rounded-full bg-red-600 text-white text-xs tracking-[0.3em] uppercase transition-all duration-500 hover:scale-105 shadow-[0_0_35px_rgba(239,68,68,0.35)]">

                <span className="relative z-10">
                  Explore Collection
                </span>

                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              </button>
              </Link>

              <Link to="/contact">
              <button className="px-10 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500">

                Contact Us

              </button>
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div
            ref={imageRef}
            className="relative flex items-center justify-center"
          >

            {/* RED GLOW */}
            <div className="absolute w-[320px] h-[320px] bg-red-600/20 blur-[120px]" />

            {/* IMAGE */}
            <img
              src={about}
              alt="About"
              className="relative z-10 w-full max-w-[520px] object-contain drop-shadow-[0_0_45px_rgba(255,255,255,0.08)]"
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
            className="fill-red-600"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default AboutPage;