import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import brands from "../assets/CategoriesHomedata";

gsap.registerPlugin(ScrollTrigger);

const CategoriesHome = () => {
  const cardsRef = useRef([]);

  const premiumProducts = brands.slice(0, 4);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: i % 2 === 0 ? -120 : 120,
        },
        {
          opacity: 1,
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

  const handleHover = (i, enter) => {
    gsap.to(cardsRef.current[i], {
      y: enter ? -18 : 0,
      scale: enter ? 1.03 : 1,
      duration: 0.45,
      ease: "power3.out",
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-black text-white py-28">

      {/* DARK BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#070707] to-black" />

      {/* RED GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-700/10 blur-[180px]" />

      {/* WHITE GLOW */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[180px]" />

      {/* TITLE */}
      <div className="relative z-10 text-center px-6 mb-20">

        <p className="text-red-500 uppercase tracking-[0.45em] text-[11px]">
          Exclusive Collection
        </p>

        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.22em] leading-tight">

          Premium{" "}

          <span className="text-white">
            Fragrance
          </span>

        </h1>

        <p className="mt-5 text-zinc-500 text-sm md:text-base tracking-wide max-w-2xl mx-auto">
          Luxury crafted perfumes designed for elegance,
          confidence and timeless identity.
        </p>

      </div>

      {/* GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

          {premiumProducts.map((item, i) => (
            <Link
              key={item.id}
              to={item.link}
              ref={(el) => (cardsRef.current[i] = el)}
              onMouseEnter={() => handleHover(i, true)}
              onMouseLeave={() => handleHover(i, false)}
              className="group"
            >

              {/* CARD */}
              <div className="relative h-[420px] flex flex-col items-center justify-center">

                {/* IMAGE */}
                <div className="relative flex items-center justify-center w-full h-[320px]">

                  {/* GLOW */}
                  <div className="absolute w-52 h-52 rounded-full bg-red-600/10 blur-[90px] opacity-0 group-hover:opacity-100 transition duration-700" />

                  <img
                    src={item.image}
                    alt={item.name}
                    className="relative z-10 w-[85%] h-[85%] object-contain transition-all duration-700 group-hover:scale-110"
                  />

                </div>

                {/* TEXT */}
                <div className="mt-2 text-center">

                  <p className="text-[10px] uppercase tracking-[0.45em] text-zinc-600">
                    Luxury Perfume
                  </p>

                  <h2 className="mt-3 text-2xl font-light tracking-[0.12em] text-white">
                    {item.name}
                  </h2>

                  {/* LINE */}
                  <div className="mt-4 w-0 group-hover:w-20 h-[1px] bg-gradient-to-r from-red-500 to-white mx-auto transition-all duration-500" />

                  {/* BUTTON */}
                  <button className="mt-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 px-8 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white text-[11px] uppercase tracking-[0.35em] hover:bg-white hover:text-black">

                    View Product

                  </button>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
};

export default CategoriesHome;