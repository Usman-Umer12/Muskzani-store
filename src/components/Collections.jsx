import React, { useEffect } from "react";
import { Sparkles, Phone, ArrowRight, Info } from "lucide-react";
import { useCart } from "../../CartContext";
import { useNavigate } from "react-router-dom";
import collectionVideo from "../assets/collectvideo.mp4";


const Collections = () => {

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const products = Array.from({ length: 104 }, (_, index) => ({
    id: index + 1,
    name: `Luxury CNC Design ${index + 1}`,
    img: `/collection${index + 1}.png`,
  }));

  const handleBookNow = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen text-white bg-gradient-to-br from-[#0f0d0b] via-[#1a1410] to-black overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative h-[85vh] w-full overflow-hidden">

        <video
          src={collectionVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />

        {/* DARK OVERLAY (40%) */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" />

        {/* HERO CONTENT */}
        <div className="relative z-10 h-full mt-15 flex items-center justify-center px-6 text-center">
          <div className="max-w-5xl reveal">

            <div className="flex justify-center mb-6">
              <span className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#c89f6a]/30 bg-black/40 backdrop-blur-xl text-xs tracking-[0.4em] uppercase text-[#c89f6a]">
                <Sparkles size={14} />
                AL-AHMED CNC PRODUCTS
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.12em]"
              style={{ fontFamily: "serif" }}
            >
              Crafted In
              <span className="block mt-5 text-[#c89f6a]">
                Wood & Precision
              </span>
            </h1>

            <p className="mt-8 text-zinc-300 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
              Luxury CNC creations crafted with precision, premium materials,
              and timeless design — built for modern luxury interiors and architectural spaces.
            </p>

            {/* BUTTONS */}
            <div className="flex justify-center gap-5 mt-10 flex-wrap">

              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-3 bg-[#c89f6a] text-black rounded-full flex items-center gap-2 font-medium hover:scale-105 transition"
              >
                <Phone size={18} />
                Contact
              </button>

              <button
                onClick={() => navigate("/about")}
                className="px-8 py-3 border border-white/30 rounded-full flex items-center gap-2 text-white hover:bg-white hover:text-black transition"
              >
                <Info size={18} />
                About
              </button>

              <button
                onClick={() =>
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 border border-white/30 rounded-full flex items-center gap-2 text-white hover:bg-white hover:text-black transition"
              >
                Explore
                <ArrowRight size={18} />
              </button>

            </div>
          </div>
        </div>
      </div>
      {/* ================= STATS BAR ================= */}
      <div className="absolute bottom-[-10] left-0 w-full z-20">
        <div className="backdrop-blur-xl bg-black/60 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 text-center gap-6">

            <div className="reveal">
              <h3 className="text-xl md:text-2xl font-semibold text-[#c89f6a]">50+</h3>
              <p className="text-xs md:text-sm text-zinc-300 mt-1">Categories</p>
            </div>

            <div className="reveal">
              <h3 className="text-xl md:text-2xl font-semibold text-[#c89f6a]">100%</h3>
              <p className="text-xs md:text-sm text-zinc-300 mt-1">Hand & CNC Crafted</p>
            </div>

            <div className="reveal">
              <h3 className="text-xl md:text-2xl font-semibold text-[#c89f6a]">Global</h3>
              <p className="text-xs md:text-sm text-zinc-300 mt-1">Custom Orders</p>
            </div>

            <div className="reveal">
              <h3 className="text-xl md:text-2xl font-semibold text-[#c89f6a]">Export</h3>
              <p className="text-xs md:text-sm text-zinc-300 mt-1">Intl. Shipping</p>
            </div>
          </div>
        </div>
      </div>


      {/* ================= PRODUCTS ================= */}
      <div id="products" className="max-w-7xl mt-30 mx-auto px-5 md:px-10 py-28">

        <div className="text-center mb-20 reveal">
          <h2
            className="text-3xl md:text-5xl font-light tracking-[0.18em]"
            style={{ fontFamily: "serif" }}
          >
            OUR <span className="text-[#c89f6a]">PRODUCTS</span>
          </h2>

          <p className="mt-5 text-zinc-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Explore our complete collection of handcrafted CNC wooden products,
            designed with precision, luxury, and architectural elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <div
              key={product.id}
              className="reveal group bg-white/5 border border-[#c89f6a]/10 rounded-2xl overflow-hidden backdrop-blur-xl hover:scale-[1.04] hover:border-[#c89f6a]/40 transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-[340px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-sm font-medium tracking-wide">
                  {product.name}
                </h3>

                <p className="text-zinc-500 text-xs mt-2">
                  Premium CNC Interior Design Product
                </p>

                <button
                  onClick={() => handleBookNow(product)}
                  className="mt-6 w-full py-3 rounded-lg bg-[#c89f6a] text-black font-semibold hover:bg-white transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(40px);
        }

        .reveal.show {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.9s ease;
        }
      `}</style>


      
    </section>
  );
};

export default Collections;