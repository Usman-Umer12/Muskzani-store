import React from "react";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0f0f0f] text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#15110c] via-[#0f0f0f] to-black" />

      {/* Luxury Glows */}
      <div className="absolute top-[-250px] left-[-150px] w-[550px] h-[550px] rounded-full bg-[#c89f6a]/10 blur-[180px]" />

      <div className="absolute bottom-[-250px] right-[-150px] w-[550px] h-[550px] rounded-full bg-[#c89f6a]/10 blur-[180px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20 md:pt-24">

        {/* TOP AREA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 pb-16">

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-4">

              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#c89f6a]/20 bg-white/[0.03] flex items-center justify-center">

                <img
                  src={logo}
                  alt="WoodGig"
                  className="w-12 h-12 object-contain"
                />

              </div>

              <div>

                <h3 className="text-2xl uppercase tracking-[0.2em] font-light">
                  WoodGig
                </h3>

                <p className="text-[#c89f6a] text-[10px] uppercase tracking-[0.35em] mt-1">
                  Premium Woodcraft
                </p>

              </div>

            </div>

            <p className="mt-6 text-zinc-400 text-sm leading-relaxed max-w-sm">
              Handcrafted luxury wood creations designed for collectors,
              homeowners and businesses worldwide. Built with precision,
              artistry and timeless craftsmanship.
            </p>

          </div>

          {/* CATEGORIES */}
          <div>

            <h4 className="text-[#c89f6a] uppercase tracking-[0.3em] text-xs mb-6">
              Categories
            </h4>

            <ul className="space-y-4 text-sm text-zinc-400">

              {[
                "Luxury Canes",
                "Islamic Calligraphy",
                "Wall Art",
                "Charcuterie Boards",
                "Custom Gifts",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-[#c89f6a] transition cursor-pointer"
                >
                  {item}
                </li>
              ))}

            </ul>

          </div>

          {/* QUICK LINKS */}
         {/* QUICK LINKS */}
<div>
  <h4 className="text-[#c89f6a] uppercase tracking-[0.3em] text-xs mb-6">
    Quick Links
  </h4>

  <ul className="space-y-4 text-sm text-zinc-400">

    <li>
      <Link to="/" className="hover:text-[#c89f6a] transition">
        Home
      </Link>
    </li>

    <li>
      <Link to="/luxurycanes" className="hover:text-[#c89f6a] transition">
        Canes
      </Link>
    </li>

    <li>
      <Link to="/collections" className="hover:text-[#c89f6a] transition">
        Collections
      </Link>
    </li>

    <li>
      <Link to="/about" className="hover:text-[#c89f6a] transition">
        About
      </Link>
    </li>

    <li>
      <Link to="/contact" className="hover:text-[#c89f6a] transition">
        Contact
      </Link>
    </li>

  </ul>
</div>
          {/* CONTACT */}

          {/* CONTACT */}
          <div>
            <h4 className="text-[#c89f6a] uppercase tracking-[0.3em] text-xs mb-6">
              Contact
            </h4>

            <div className="space-y-5">

              <div className="flex items-start gap-3 text-zinc-400 text-sm">
                <MapPin size={18} className="text-[#c89f6a] mt-0.5" />
                <span>Punjab, Pakistan</span>
              </div>

              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <Phone size={18} className="text-[#c89f6a]" />
                <span>+92 300 1234567</span>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3 text-zinc-400 text-sm">
                <Mail size={18} className="text-[#c89f6a]" />
                <span>Muhammad.ahmadtx@gmail.com.com</span>
              </div>

              {/* SOCIAL (BELOW EMAIL - PROFESSIONAL ALIGNMENT) */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-[#c89f6a] uppercase tracking-[0.3em] text-[10px] mb-3">
                  Follow Us
                </p>

                <div className="flex gap-4">

                  {/* Facebook */}
                  <a href="https://www.facebook.com/share/1Efb1QZKUh/" className="hover:scale-110 transition">
                    <svg className="w-5 h-5 fill-white hover:fill-[#c89f6a]" viewBox="0 0 24 24">
                      <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.1V12h2.1V9.8c0-2.1 1.3-3.3 3.2-3.3.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12z" />
                    </svg>
                  </a>

                  {/* TikTok */}
                  <a href="https://www.tiktok.com/@woodgig.official?_r=1&_t=ZS-97IG0dNP2Ty" className="hover:scale-110 transition">
                    <svg className="w-5 h-5 fill-white hover:fill-[#c89f6a]" viewBox="0 0 24 24">
                      <path d="M12 2h3a6 6 0 006 6v3a8 8 0 01-5-2v7a6 6 0 11-6-6h1v3a3 3 0 103 3V2z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/muhammad-ahmad-82a6a0417?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="hover:scale-110 transition">
                    <svg className="w-5 h-5 fill-white hover:fill-[#c89f6a]" viewBox="0 0 24 24">
                      <path d="M4 3a2 2 0 100 4 2 2 0 000-4zm0 6h4v12H4V9zm7 0h4v2h.1a4 4 0 013.9-2c4 0 5 2.5 5 6v6h-4v-5c0-1.5 0-3.5-2.2-3.5S15 14 15 15.5V21h-4V9z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a href="https://www.youtube.com/@woodgig.official" className="hover:scale-110 transition">
                    <svg className="w-5 h-5 fill-white hover:fill-[#c89f6a]" viewBox="0 0 24 24">
                      <path d="M23 7s-.2-1.4-.8-2C21.5 4.2 20.5 4 20 4 16 3.7 12 3.7 12 3.7s-4 0-8 .3C3.5 4 2.5 4.2 1.8 5 1.2 5.6 1 7 1 7S.8 8.6.8 10.2v1.6C.8 13.4 1 15 1 15s.2 1.4.8 2c.7.8 1.7 1 2.2 1 4 .3 8 .3 8 .3s4 0 8-.3c.5 0 1.5-.2 2.2-1 .6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6C23.2 8.6 23 7 23 7zM10 14V8l6 3-6 3z" />
                    </svg>
                  </a>

                </div>
              </div>

            </div>
          </div>

        </div>


        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#c89f6a]/30 to-transparent" />

        {/* Bottom */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="flex items-center gap-2 text-zinc-500 text-sm">

            © {new Date().getFullYear()} WoodGig

           

            Crafted In Pakistan

          </p>

          <p className="uppercase tracking-[0.25em] text-[10px] text-zinc-600 text-center">
            Designed By Code Sphere Technology
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;