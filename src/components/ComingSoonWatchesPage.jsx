import React, { useEffect, useRef } from "react";
import { comingSoonStyles } from "../assets/dummyStyles";
import { Link } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CS1 from "../assets/image1.png";
import CS2 from "../assets/image1.png";
import CS3 from "../assets/image1.png";
import CS4 from "../assets/image1.png";
import CS5 from "../assets/image1.png";

gsap.registerPlugin(ScrollTrigger);

const watches = [
  { id: 1, name: "OUDIEPIE ", price: 16000, imgUrl: CS1 },
  { id: 2, name: "OUDIEPIE ", price: 16000, imgUrl: CS2 },
  { id: 3, name: "OUDIEPIE ", price: 16000, imgUrl: CS3 },
  { id: 4, name: "OUDIEPIE ", price: 16000, imgUrl: CS4 },
  { id: 5, name: "OUDIEPIE ", price: 16000, imgUrl: CS5 },
];

const formatINR = comingSoonStyles.formatINR;

const ComingSoonWatchesPage = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 80,
          x: i % 2 === 0 ? -100 : 100,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden text-white py-28">

      {/* MAIN BACKGROUND */}
      <div className="absolute inset-0 bg-[#070707]" />

      {/* RED DOMINANT GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-[#120202] to-black opacity-95" />

      {/* BIG RED LIGHT */}
      <div className="absolute top-[-250px] left-[-150px] w-[750px] h-[750px] bg-red-600/25 blur-[180px] rounded-full" />

      {/* SIDE RED LIGHT */}
      <div className="absolute bottom-[-200px] right-[-100px] w-[550px] h-[550px] bg-red-500/20 blur-[180px] rounded-full" />

      {/* SMALL WHITE LIGHT */}
      <div className="absolute top-[20%] right-[10%] w-[250px] h-[250px] bg-white/10 blur-[120px] rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">

          <div>

            <p className="text-[11px] uppercase tracking-[0.5em] text-red-400">
              Exclusive Collection
            </p>

            <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.2em] leading-tight">

              Brand{" "}

              <span className="text-white">
                Articale
              </span>

            </h2>

            <p className="mt-5 text-zinc-300/70 text-sm md:text-base max-w-xl leading-relaxed">
              Crafted for modern luxury lovers who appreciate timeless
              elegance, bold identity and premium fragrance artistry.
            </p>

          </div>

          {/* BUTTON */}
          <a
            href="/watches"
            className="group w-fit px-8 h-12 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md text-xs uppercase tracking-[0.35em] hover:bg-white hover:text-black transition-all duration-500"
          >

            View All

          </a>

        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-14">

          {watches.map((w, i) => (
            <div
              key={w.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative flex flex-col items-center justify-center"
            >

              {/* IMAGE AREA */}
              <div className="relative w-full h-[340px] flex items-center justify-center">

                {/* RED GLOW */}
                <div className="absolute w-56 h-56 rounded-full bg-red-500/10 blur-[90px] opacity-0 group-hover:opacity-100 transition duration-700" />

                {/* WHITE LIGHT */}
                <div className="absolute w-28 h-28 rounded-full bg-white/10 blur-[60px]" />

                <img
                  src={w.imgUrl}
                  alt={w.name}
                  className="relative z-10 w-[85%] h-[85%] object-contain transition-all duration-700 group-hover:scale-110"
                />

              </div>

              {/* TEXT */}
              <div className="mt-2 text-center">

                <p className="text-[10px] uppercase tracking-[0.45em] text-red-300/70">
                  Luxury Perfume
                </p>

                <h3 className="mt-3 text-xl md:text-2xl font-light tracking-[0.12em] text-white">
                  {w.name}
                </h3>

                <p className="mt-3 text-sm text-zinc-300">
                  {formatINR(w.price)}
                </p>

                {/* LINE */}
                <div className="mt-5 w-0 h-[1px] bg-gradient-to-r from-red-500 to-white mx-auto group-hover:w-20 transition-all duration-500" />

                {/* BUTTON */}
                <a
                  href="/watches"
                  className="mt-6 inline-flex group w-fit px-8 h-12 rounded-full items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md text-xs uppercase tracking-[0.35em] hover:bg-white hover:text-black transition-all duration-500"
                >

                  Explore

                </a>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ComingSoonWatchesPage;