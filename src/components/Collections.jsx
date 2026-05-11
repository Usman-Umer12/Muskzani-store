import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/image1.png";

import {
  ArrowRight,
  Sparkles,
  Star,
  Waves,
  Droplets,
} from "lucide-react";

const Collections = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">

      {/* 🌑 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

      {/* 🔴 RED GLOW */}
      <div className="absolute top-[-200px] md:top-[-260px] left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] md:w-[800px] h-[320px] sm:h-[500px] md:h-[800px] bg-red-600/10 blur-[120px] md:blur-[180px] rounded-full" />

      {/* ⚪ WHITE GLOW */}
      <div className="absolute bottom-[-120px] right-[-80px] md:right-[-120px] w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-white/10 blur-[100px] md:blur-[150px] rounded-full" />

      {/* 🌊 TOP WAVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none opacity-[0.06]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[90px] sm:h-[120px] md:h-[180px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22,103.59,32.17,158,28,
            70.36-5.37,136.33-33.31,206.8-37.5,
            C438.64,32.43,512.34,53.67,583,72.05,
            c69.27,18,138.3,24.88,209.4,13.08,
            36.15-6,69.85-17.84,104.45-29.34,
            C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28">

        {/* HEADER */}
        <div className="text-center mt-16 sm:mt-24 md:mt-32 mb-16 md:mb-24">

          <div className="flex justify-center mb-6">

            <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 h-10 sm:h-11 rounded-full border border-red-500/20 bg-red-500/10 backdrop-blur-2xl text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.4em] uppercase text-red-300 shadow-lg shadow-red-600/10">

              <Sparkles size={14} />
              Mushzani Collection

            </div>

          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-light tracking-[0.08em] sm:tracking-[0.12em] md:tracking-[0.18em] leading-tight">

            Luxury In
            <span className="text-red-500"> Every Drop</span>

          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-zinc-500 text-sm sm:text-base leading-relaxed px-2">
            Discover premium fragrances crafted with elegance,
            mystery and timeless sophistication for modern identity.
          </p>

        </div>

        {/* MAIN SHOWCASE */}
        <div className="grid lg:grid-cols-2 gap-14 md:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">

            {/* MINI TAG */}
            <div className="flex items-center gap-3 text-red-400 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.4em] uppercase mb-8 md:mb-10">

              <Waves size={16} />
              Signature Perfume Series

            </div>

            {/* TITLE */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight tracking-[0.08em] md:tracking-[0.12em]">

              Designed For
              <br />

              <span className="text-zinc-300">
                Timeless Presence
              </span>

            </h2>

            {/* DESC */}
            <p className="mt-6 md:mt-8 text-zinc-500 leading-relaxed max-w-xl text-sm sm:text-base">

              Every fragrance is a reflection of luxury,
              confidence and individuality. Crafted with rare
              ingredients and modern sophistication.

            </p>

            {/* FEATURES */}
            <div className="mt-10 md:mt-12 space-y-5 md:space-y-6">

              {/* FEATURE */}
              <div className="group flex items-start gap-4 md:gap-5">

                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center group-hover:bg-red-600 transition duration-500 shrink-0">

                  <Droplets size={18} />

                </div>

                <div>

                  <h4 className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                    Premium Essence
                  </h4>

                  <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
                    Crafted using rare oils and luxurious notes.
                  </p>

                </div>

              </div>

              {/* FEATURE */}
              <div className="group flex items-start gap-4 md:gap-5">

                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center group-hover:bg-red-600 transition duration-500 shrink-0">

                  <Star size={18} />

                </div>

                <div>

                  <h4 className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                    Elegant Packaging
                  </h4>

                  <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
                    Minimal luxury bottle design with premium finish.
                  </p>

                </div>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="mt-12 md:mt-14 flex flex-col sm:flex-row gap-4 sm:gap-5">

              <Link
              to="/about"
              >

              <button className="group flex items-center justify-center gap-3 px-8 h-12 rounded-full bg-red-600 hover:bg-red-500 transition text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase shadow-lg shadow-red-600/20">

                About

                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                  />

              </button>
                  </Link>

              <Link
              to="/contact"
              >
              <button className="px-8 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white hover:text-black transition text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase">

                Contact

              </button>
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center order-1 lg:order-2">

            {/* GLOW */}
            <div className="absolute w-[260px] sm:w-[380px] md:w-[500px] h-[260px] sm:h-[380px] md:h-[500px] bg-red-600/10 blur-[100px] md:blur-[140px] rounded-full" />

            {/* FLOATING WAVES */}
            <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 border border-red-500/10 rounded-full animate-pulse" />

            <div className="absolute bottom-0 right-0 w-32 sm:w-40 md:w-52 h-32 sm:h-40 md:h-52 border border-white/10 rounded-full animate-pulse" />

            {/* BACK GLASS */}
            <div className="absolute inset-0 rounded-[30px] md:rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl rotate-6 scale-95" />

            {/* MAIN CARD */}
            <div className="relative group rounded-[30px] md:rounded-[42px] overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-black/40 backdrop-blur-2xl p-5 sm:p-8 md:p-10 shadow-[0_30px_120px_rgba(0,0,0,0.85)]">

              {/* SHINE */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-1000">

                <div className="absolute top-0 left-[-120%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-[140%] transition-all duration-1000" />

              </div>

              {/* PRODUCT */}
              <img
                src={image1}
                alt="Luxury Perfume"
                className="relative z-10 w-full max-w-[240px] sm:max-w-[320px] md:max-w-[430px] object-contain transition duration-700 group-hover:scale-110 group-hover:rotate-2"
              />

            </div>

          </div>

        </div>

        {/* 🔥 PRODUCTS */}
        <div className="relative mt-24 md:mt-36">

          {/* HEADER */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-14 md:mb-16">

            <div className="text-center lg:text-left">

              <p className="text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-zinc-500">
                Premium Products
              </p>

              <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.08em] md:tracking-[0.12em]">

                Featured
                <span className="text-red-500"> Fragrances</span>

              </h2>

            </div>

            <button className="group flex items-center gap-3 px-8 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-red-600 transition-all duration-500 text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase">

              View All

              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />

            </button>

          </div>

          {/* PRODUCTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {[...Array(8)].map((_, i) => (

              <div
                key={i}
                className="group relative rounded-[28px] md:rounded-[34px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-2xl hover:-translate-y-3 transition-all duration-700 shadow-[0_20px_100px_rgba(0,0,0,0.7)]"
              >

                {/* RED HOVER */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-red-600/10 via-transparent to-white/5" />

                {/* IMAGE */}
                <div className="relative h-[280px] sm:h-[320px] md:h-[340px] flex items-center justify-center overflow-hidden">

                  {/* GLOW */}
                  <div className="absolute w-[180px] md:w-[240px] h-[180px] md:h-[240px] rounded-full bg-red-600/10 blur-[80px]" />

                  <img
                    src={image1}
                    alt="Luxury Perfume"
                    className="relative z-10 w-[72%] sm:w-[78%] object-contain transition duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />

                  {/* TAG */}
                  <div className="absolute top-4 left-4 px-3 sm:px-4 h-7 sm:h-8 rounded-full border border-red-500/20 bg-red-600/10 backdrop-blur-xl flex items-center text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-red-300">

                    New Arrival

                  </div>

                </div>

                {/* INFO */}
                <div className="relative p-5 md:p-6">

                  <p className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.35em] uppercase text-zinc-500">
                    Luxury Perfume
                  </p>

                  <h3 className="mt-3 text-lg md:text-xl tracking-wide font-light">
                    Velvet Noir Essence
                  </h3>

                  <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                    Deep woody accords blended with floral luxury notes.
                  </p>

                  {/* PRICE */}
                  <div className="mt-6 flex items-center justify-between">

                    <div>

                      <p className="text-zinc-500 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em]">
                        Price
                      </p>

                      <h4 className="mt-1 text-lg sm:text-xl font-medium">
                        1600
                        <span className="text-red-400 text-sm ml-1">
                          PKR
                        </span>
                      </h4>

                    </div>

                    {/* BTN */}
                   <Link
                   to="/watches"
                   >
                    <button className="group/button w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-red-600 transition-all duration-500">

                      <ArrowRight
                        size={16}
                        className="transition-all duration-500 group-hover/button:translate-x-1"
                        />

                    </button>
                        </Link> 

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* 🌊 BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none opacity-[0.08]">

        <svg
          className="relative block w-[calc(100%+1.3px)] h-[90px] sm:h-[120px] md:h-[180px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >

          <path
            d="M0,0V46.29c47.79,22,103.59,32.17,
            158,28,70.36-5.37,136.33-33.31,
            206.8-37.5C438.64,32.43,512.34,
            53.67,583,72.05c69.27,18,138.3,
            24.88,209.4,13.08,36.15-6,
            69.85-17.84,104.45-29.34C989.49,
            25,1113-14.29,1200,52.47V120H0Z"
            fill="currentColor"
          />

        </svg>

      </div>

    </section>
  );
};

export default Collections;