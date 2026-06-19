import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { MessageCircle, ArrowUp } from "lucide-react";

// images
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import home4 from "../assets/home4.png";
import home5 from "../assets/home5.png";

const images = [home1, home2, home3, home4, home5];

const headings = [
  { line1: "Where Wood", line2: "Becomes Art" },
  { line1: "Luxury Wood", line2: "Craft Redefined" },
  { line1: "Precision CNC", line2: "Masterpieces" },
  { line1: "Timeless", line2: "Handcrafted" },
  { line1: "Art in Every", line2: "Detail" },
];

const BannerHome = () => {
  const [index, setIndex] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const titleRef = useRef(null);

  // WhatsApp
  const openWhatsApp = () => {
    window.open("https://wa.me/923014122192", "_blank");
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // IMAGE SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // HEADING ANIMATION
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, [index]);

  // SCROLL LISTENER
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);

      if (y > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden text-white">

      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-all duration-1000"
        style={{ backgroundImage: `url(${images[index]})` }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black/95" />

      {/* CONTENT */}
      <div className="relative mt-10 z-20 flex items-center h-full px-6">

        <div className="max-w-5xl ml-0 lg:ml-20">

          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-[#c89f6a] mb-4">
            Handcrafted with Pride in Pakistan
          </p>

          <h1
            ref={titleRef}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-light leading-tight tracking-[0.15em]"
          >
            {headings[index].line1} <br />
            <span className="text-[#c89f6a] font-medium">
              {headings[index].line2}
            </span>
          </h1>

          <p className="mt-6 text-xs sm:text-sm md:text-base lg:text-lg text-zinc-300 max-w-2xl leading-relaxed">
            Traditional craftsmanship meets modern creativity. Every piece is
            handcrafted or CNC-carved with precision and passion.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">

            <Link to="/collections">
              <button className="px-8 h-12 rounded-full bg-[#c89f6a] text-black text-xs tracking-[0.3em] uppercase hover:scale-105 transition">
                Explore Product
              </button>
            </Link>

            <Link to="/about">
              <button className="px-8 h-12 rounded-full border border-[#c89f6a]/40 text-[#c89f6a] text-xs tracking-[0.3em] uppercase hover:bg-[#c89f6a] hover:text-black transition">
                About
              </button>
            </Link>

          </div>

          <p className="mt-6 text-[10px] tracking-[0.3em] text-zinc-500 uppercase">
            Customs Clearance & Tariffs Are On Us
          </p>

        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-[#c89f6a] scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* ================= WHATSAPP BUTTON ================= */}
      <div
        className="fixed right-6 z-50 transition-all duration-300"
        style={{
          bottom: scrollY > 200 ? "5rem" : "1.5rem", // 👈 smooth mt-20 effect
        }}
      >
        <button
          onClick={openWhatsApp}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-all duration-300 group"
        >
          <MessageCircle size={26} className="text-white" />

          <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping"></span>

          <span className="absolute right-16 bg-black/80 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
            Chat on WhatsApp
          </span>
        </button>
      </div>

     

    </section>
  );
};

export default BannerHome;