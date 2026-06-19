import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
{
name: "Robert D.",
country: "USA",
review:
"The custom Eagle Head walking cane I ordered for my father is simply breathtaking. The weight, the finish, and the detailing are beyond premium. A true work of art shipped seamlessly to the US.",
},
{
name: "Fatima S.",
country: "UAE",
review:
"We commissioned a large Islamic Calligraphy panel for our new home. The CNC precision mixed with hand-finishing gave it a luxurious depth. Highly recommend WoodGig.",
},
{
name: "Michael T.",
country: "UK",
review:
"I ordered custom charcuterie boards for my restaurant. The quality of the wood and the engraved logos are spectacular. They elevate the entire dining experience.",
},
{
name: "Sarah J.",
country: "Canada",
review:
"The 3D mountain relief art I received is stunning. The lighting hits the different layers perfectly. Excellent communication throughout the custom order process.",
},
];

const fashionPage = () => {
const [active, setActive] = useState(0);

const nextSlide = () => {
setActive((prev) => (prev + 1) % testimonials.length);
};

const prevSlide = () => {
setActive(
(prev) => (prev - 1 + testimonials.length) % testimonials.length
);
};

return ( <section className="relative overflow-hidden py-14 md:py-16 bg-gradient-to-b from-[#0f0f0f] via-[#17120d] to-[#0f0f0f]">

  {/* Luxury Glow */}
  <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#c89f6a]/10 blur-[140px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#c89f6a]/10 blur-[140px] rounded-full" />

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto">

      <p className="uppercase tracking-[0.35em] text-[#c89f6a] text-[11px]">
        Client Impressions
      </p>

      <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.08em] text-white">
        Revered By
        <span className="block text-[#c89f6a]">
          Collectors Worldwide
        </span>
      </h2>

      <p className="mt-4 text-zinc-400 text-sm md:text-base max-w-2xl mx-auto">
        Every handcrafted creation tells a story. Discover why
        collectors, homeowners and luxury buyers trust our
        craftsmanship around the world.
      </p>

    </div>

    {/* Testimonial Card */}
    <div className="mt-10 flex justify-center">

      <div className="relative w-full max-w-3xl">

        <div
          className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-[#c89f6a]/15
          bg-white/[0.03]
          backdrop-blur-xl
          p-6 md:p-8
          shadow-[0_10px_40px_rgba(200,159,106,0.08)]
        "
        >

          <Quote
            size={42}
            className="text-[#c89f6a]/30 mb-4"
          />

          <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
            "{testimonials[active].review}"
          </p>

          <div className="mt-6">

            <h4 className="text-white text-lg md:text-xl tracking-wide">
              {testimonials[active].name}
            </h4>

            <p className="mt-1 text-[#c89f6a] uppercase tracking-[0.25em] text-[11px]">
              {testimonials[active].country}
            </p>

          </div>

        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="
          absolute
          -left-2
          md:-left-14
          top-1/2
          -translate-y-1/2
          w-11
          h-11
          rounded-full
          border
          border-[#c89f6a]/20
          bg-black/40
          backdrop-blur-xl
          flex
          items-center
          justify-center
          text-[#c89f6a]
          hover:bg-[#c89f6a]
          hover:text-black
          transition-all
          duration-300
        "
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="
          absolute
          -right-2
          md:-right-14
          top-1/2
          -translate-y-1/2
          w-11
          h-11
          rounded-full
          border
          border-[#c89f6a]/20
          bg-black/40
          backdrop-blur-xl
          flex
          items-center
          justify-center
          text-[#c89f6a]
          hover:bg-[#c89f6a]
          hover:text-black
          transition-all
          duration-300
        "
        >
          <ChevronRight size={20} />
        </button>

      </div>

    </div>

    {/* Dots */}
    <div className="mt-6 flex justify-center gap-3">

      {testimonials.map((_, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`h-2 rounded-full transition-all duration-300 ${
            active === index
              ? "w-8 bg-[#c89f6a]"
              : "w-2 bg-white/20"
          }`}
        />
      ))}

    </div>

  </div>

</section>


);
};

export default fashionPage;
