import React from "react";


import logo from "../assets/logo.png";
// import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import {
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden text-white bg-black">

      {/* 💎 LUXURY BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

      {/* RED GLOW */}
      <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-600/10 blur-[170px] rounded-full" />

      {/* WHITE LIGHT */}
      <div className="absolute bottom-[-200px] right-[-120px] w-[500px] h-[500px] bg-white/10 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-10">

        {/* NEWSLETTER */}
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-12 mb-24">

          {/* glow inside */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-white/5" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* LEFT */}
            <div className="max-w-xl">

              <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500">
                Premium Newsletter
              </p>

              <h2 className="mt-4 text-3xl md:text-5xl font-light leading-tight tracking-[0.15em]">
                Discover the Art of
                <span className="text-red-500"> Luxury Fragrance</span>
              </h2>

              <p className="text-zinc-400 mt-5 text-sm md:text-base leading-relaxed">
                Subscribe for exclusive perfume launches, luxury collections
                and premium fragrance experiences.
              </p>

            </div>

            {/* RIGHT */}
            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">

              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:w-[320px] h-14 rounded-full bg-black/40 border border-white/10 px-6 outline-none text-sm placeholder:text-zinc-500 focus:border-red-500/40 transition"
                />
              </div>

              <button className="h-14 px-8 rounded-full bg-red-600 hover:bg-red-500 transition text-xs tracking-[0.35em] uppercase flex items-center justify-center gap-2 shadow-lg shadow-red-600/20">

                Subscribe
                <ArrowRight size={16} />

              </button>

            </div>

          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-20">

          {/* BRAND */}
          <div>

            {/* LOGO */}
            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center overflow-hidden">
                <img
                  src={logo}
                  alt="Mushzani"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div>
                <h3 className="text-2xl tracking-[0.35em] uppercase">
                  Mushzani
                </h3>

                <p className="text-[10px] tracking-[0.4em] uppercase text-red-400 mt-1">
                  Luxury Perfume
                </p>
              </div>

            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mt-6 max-w-sm">
              Crafted for elegance, identity and timeless presence.
              Mushzani blends luxury fragrance with modern sophistication.
            </p>

            {/* SOCIALS */}
           

          </div>

          {/* COLLECTIONS */}
          <div>

            <h4 className="text-sm tracking-[0.45em] uppercase text-zinc-500 mb-6">
              Collections
            </h4>

            <ul className="space-y-4">

              {[
                "Luxury Oud",
                "Royal Essence",
                "Limited Edition",
                "Premium Collection",
                "New Arrivals",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm text-zinc-300 hover:text-red-400 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}

            </ul>

          </div>

          {/* SUPPORT */}
          <div>

            <h4 className="text-sm tracking-[0.45em] uppercase text-zinc-500 mb-6">
              Support
            </h4>

            <ul className="space-y-4">

              {[
                "Contact Us",
                "Shipping",
                "Returns",
                "Privacy Policy",
                "FAQ",
              ].map((item) => (
                <li
                  key={item}
                  className="text-sm text-zinc-300 hover:text-red-400 transition cursor-pointer"
                >
                  {item}
                </li>
              ))}

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h4 className="text-sm tracking-[0.45em] uppercase text-zinc-500 mb-6">
              Contact
            </h4>

            <div className="space-y-5">

              <div className="flex items-start gap-3 text-sm text-zinc-300">
                <MapPin
                  size={17}
                  className="text-red-500 mt-0.5"
                />
                <span>Punjab, Pakistan</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <Phone
                  size={17}
                  className="text-red-500"
                />
                <span>+92 300 1234567</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <Mail
                  size={17}
                  className="text-red-500"
                />
                <span>info@mushzani.com</span>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-zinc-500 flex items-center gap-2">
            © {new Date().getFullYear()} Mushzani
            <Heart size={14} className="text-red-500" />
            Crafted with luxury in Pakistan
          </p>

          <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-600">
            Designed by Code Sphere Technology
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;