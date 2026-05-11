import { Heart, Shield, Truck } from "lucide-react";
import F1 from "../assets/image1.png";
import { useState, useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FashionPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    Days: 2,
    Hours: 12,
    Minutes: 45,
    Seconds: 18,
  });

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const cardRef = useRef([]);

  useEffect(() => {
    const toTotalSeconds = (t) =>
      t.Days * 86400 + t.Hours * 3600 + t.Minutes * 60 + t.Seconds;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const total = toTotalSeconds(prev);

        if (total <= 0) {
          clearInterval(timer);
          return { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 };
        }

        const next = total - 1;

        return {
          Days: Math.floor(next / 86400),
          Hours: Math.floor((next % 86400) / 3600),
          Minutes: Math.floor((next % 3600) / 60),
          Seconds: Math.floor(next % 60),
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      {
        opacity: 0,
        x: -120,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      rightRef.current,
      {
        opacity: 0,
        x: 120,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
        },
      }
    );

    cardRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 text-white">

      {/* MAIN BG */}
      <div className="absolute inset-0 bg-black" />

      {/* RED DOMINANT LUXURY BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_25%),linear-gradient(to_bottom,#0b0b0b,#170303,#000)]" />

      {/* TOP WAVE */}
      <div className="absolute top-0 left-0 w-full rotate-180 overflow-hidden leading-none">

        <svg
          className="relative block w-[calc(100%+1.3px)] h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39 56.44C191.82 97.28 0 0 0 0V120H1200V0s-191.82 97.28-321.39 56.44C758.47 17.15 641.53-17.15 321.39 56.44z"
            fill="rgba(255,255,255,0.03)"
          />
        </svg>

      </div>

      {/* RED LIGHT */}
      <div className="absolute top-[-200px] left-[-120px] w-[700px] h-[700px] rounded-full bg-red-600/20 blur-[180px]" />

      {/* WHITE LIGHT */}
      <div className="absolute bottom-[-200px] right-[-100px] w-[450px] h-[450px] rounded-full bg-white/10 blur-[180px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div ref={leftRef}>

            <p className="text-[11px] uppercase tracking-[0.45em] text-red-400">
              Exclusive Limited Drop
            </p>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-[0.12em]">

              Premium{" "}

              <span className="font-medium text-white">
                Luxury
              </span>

              <br />

              Perfume Collection

            </h1>

            <p className="mt-7 text-zinc-300/70 text-sm sm:text-base leading-relaxed max-w-xl">
              Crafted for elegance, identity and timeless luxury.
              A signature fragrance experience designed for modern lifestyle.
            </p>

            {/* COUNTDOWN */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">

              {Object.entries(timeLeft).map(([unit, value], i) => (
                <div
                  key={unit}
                  ref={(el) => (cardRef.current[i] = el)}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl py-6 text-center hover:border-red-500/30 transition-all duration-500"
                >

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-red-600/15 to-transparent transition duration-500" />

                  <div className="relative z-10 text-3xl font-light tracking-[0.08em]">
                    {String(value).padStart(2, "0")}
                  </div>

                  <div className="relative z-10 mt-2 text-[10px] uppercase tracking-[0.4em] text-zinc-500">
                    {unit}
                  </div>

                </div>
              ))}

            </div>

            {/* FEATURES */}
            <div className="mt-12 flex flex-wrap gap-5">

              <div className="flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-xl px-5 h-12 rounded-full">

                <Truck size={17} className="text-red-500" />

                <span className="text-sm text-zinc-300">
                  Free Shipping
                </span>

              </div>

              <div className="flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-xl px-5 h-12 rounded-full">

                <Shield size={17} className="text-red-500" />

                <span className="text-sm text-zinc-300">
                  Premium Quality
                </span>

              </div>

              <div className="flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-xl px-5 h-12 rounded-full">

                <Heart size={17} className="text-red-500" />

                <span className="text-sm text-zinc-300">
                  Luxury Experience
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div
            ref={rightRef}
            className="relative flex justify-center"
          >

            <div className="relative flex items-center justify-center w-full max-w-lg">

              <div className="absolute w-[380px] h-[380px] rounded-full bg-red-600/20 blur-[130px]" />

              <div className="absolute top-16 w-40 h-40 rounded-full bg-white/10 blur-[80px]" />

              <img
                src={F1}
                alt="product"
                className="relative z-10 w-full max-w-[420px] object-contain transition-all duration-700 hover:scale-105 hover:-translate-y-3"
              />

              <div className="absolute bottom-8 left-4 sm:left-0 z-20 border border-white/10 bg-black/40 backdrop-blur-2xl px-6 py-4 rounded-3xl">

                <p className="text-xs text-zinc-500 line-through">
                  $899
                </p>

                <p className="mt-1 text-2xl font-light tracking-[0.08em]">
                  $432
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-red-400">
                  Limited Offer
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM WAVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">

        <svg
          className="relative block w-[calc(100%+1.3px)] h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39 56.44C191.82 97.28 0 0 0 0V120H1200V0s-191.82 97.28-321.39 56.44C758.47 17.15 641.53-17.15 321.39 56.44z"
            fill="rgba(255,255,255,0.03)"
          />
        </svg>

      </div>

    </section>
  );
};

export default FashionPage;