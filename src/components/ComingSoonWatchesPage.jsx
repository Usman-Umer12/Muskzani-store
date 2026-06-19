import React from 'react'
import caneImg from "../assets/cans.png";
import { Link } from "react-router-dom";

const ComingSoonWatchesPage = () => {


  const countries = [
    "USA",
    "Canada",
    "UK",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "UAE",
    "Saudi Arabia",
    "Qatar",
    "Oman",
    "Kuwait",
    "Bahrain",
  ];

  return (
    <div>
      <section className="relative overflow-hidden py-28 bg-gradient-to-b from-[#17120d] via-[#211910] to-[#0f0f0f]">

        {/* Luxury Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c89f6a]/10 blur-[180px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div>

              <p className="uppercase tracking-[0.45em] text-[#c89f6a] text-[11px]">
                Signature Series
              </p>

              <h2 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.12em] leading-tight text-white">
                Luxury
                <span className="block text-[#c89f6a]">
                  Walking Canes
                </span>
              </h2>

              <p className="mt-8 text-zinc-400 leading-relaxed max-w-xl">
                Hand-carved functional art crafted from premium hardwoods.
                From regal eagle heads to intricate dragon carvings,
                every cane is designed for stability, prestige and
                timeless craftsmanship.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mt-10">

                {[
                  "Traditional Wood",
                  "Wood & Resin",
                  "Eagle & Wolf Heads",
                  "Arabic Inspired",
                  "Dragon Carved",
                  "Medieval Fantasy",
                  "Royal Luxury",
                  "Ergonomic Handles",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center text-zinc-300 text-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#c89f6a] mr-3" />
                    {item}
                  </div>
                ))}

              </div>

              {/* Customizations */}
              <div className="mt-12">

                <h4 className="uppercase tracking-[0.35em] text-[#c89f6a] text-xs mb-5">
                  Customizations
                </h4>

                <div className="flex flex-wrap gap-3">

                  {[
                    "Custom Length",
                    "Premium Hardwood",
                    "Name Engraving",
                    "Resin Inlays",
                    "Gift Packaging",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full border border-[#c89f6a]/20 bg-white/[0.03] text-zinc-300 text-xs tracking-wide"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

              {/* Button */}
              <Link to="/luxuryCanes">

                <button
                  className="
            mt-10
            px-8
            h-12
            rounded-full
            border
            border-[#c89f6a]
            text-[#c89f6a]
            text-xs
            uppercase
            tracking-[0.3em]
            transition-all
            duration-300
            hover:bg-[#c89f6a]
            hover:text-black
          "
                >
                  Request Custom Cane
                </button>

              </Link>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-[350px] h-[350px] bg-[#c89f6a]/20 rounded-full blur-[120px]" />
              </div>

              <img
                src={caneImg}
                alt="Luxury Cane"
                className="relative z-10 w-full max-w-[600px] mx-auto object-contain"
              />

              {/* Floating Badge */}
              <div
                className="
          absolute
          bottom-10
          left-0
          bg-black/40
          backdrop-blur-xl
          border
          border-[#c89f6a]/20
          rounded-2xl
          p-5
          z-20
        "
              >

                <p className="text-[#c89f6a] uppercase text-[10px] tracking-[0.3em]">
                  Premium Craft
                </p>

                <h4 className="mt-2 text-white text-lg">
                  Wood Texture Detailing
                </h4>

              </div>

            </div>

          </div>

        </div>

      </section>


   <section className="relative w-full min-h-[45vh] flex items-center overflow-hidden bg-gradient-to-r from-[#111111] via-[#1b1712] to-[#111111]">

  {/* Luxury Glow */}
  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#c89f6a]/10 blur-[140px] rounded-full" />

  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#c89f6a]/10 blur-[140px] rounded-full" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

    {/* Label */}
    <div className="flex justify-center">

      <span className="px-5 mt-8 py-2 rounded-full border border-[#c89f6a]/20 bg-white/[0.03] backdrop-blur-xl text-[#c89f6a] text-[10px] uppercase tracking-[0.35em]">
        Global Export Network
      </span>

    </div>

    {/* Heading */}
    <div className="mt-8 text-center">

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.08em] text-white leading-tight">

        Luxury Walking Canes

        <span className="block mt-2 text-[#c89f6a]">
          Exported Worldwide
        </span>

      </h2>

      <p className="mt-5 text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
        Trusted by collectors, retailers and luxury buyers across
        North America, Europe and the Gulf Region.
      </p>

    </div>

    {/* Countries Line */}
    <div className="mt-10 flex justify-center">

      <div
        className="
        px-6 md:px-10
        py-4
        rounded-full
        border
        border-[#c89f6a]/15
        bg-white/[0.03]
        backdrop-blur-xl
        text-center
        "
      >

        <p className="text-zinc-300 text-xs md:text-sm tracking-[0.18em] leading-relaxed">

          USA • Canada • UK • Germany • France • Italy • Spain • UAE •
          Saudi Arabia • Qatar • Oman • Kuwait • Bahrain

        </p>

      </div>

    </div>

    {/* Bottom Accent Line */}
    <div className="mt-10 flex justify-center">

      <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-[#c89f6a] to-transparent" />

    </div>

  </div>

</section>
    </div>
  )
}

export default ComingSoonWatchesPage