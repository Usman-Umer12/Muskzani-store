import React, { useEffect, useState } from "react";
import {
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../CartContext";
import logo from "../assets/logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Perfume", href: "/watches" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const { totalItems } = useCart();

  const [active, setActive] = useState(location.pathname || "/");

  useEffect(() => {
    setActive(location.pathname || "/");
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 lg:px-8 pt-4">

      {/* NAVBAR */}
      <nav
        className={`max-w-7xl mx-auto transition-all duration-500 rounded-3xl border overflow-hidden ${
          scrolled
            ? "bg-black/75 backdrop-blur-2xl border-white/10 shadow-[0_10px_60px_rgba(0,0,0,0.6)]"
            : "bg-black/40 backdrop-blur-xl border-white/5"
        }`}
      >

        <div className="relative h-20 flex items-center justify-between px-5 lg:px-10">

          {/* RED GLOW */}
          <div className="absolute top-0 left-0 w-52 h-52 bg-red-600/10 blur-[100px]" />

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => handleNavClick("/")}
            className="relative z-10 flex items-center gap-3"
          >

            <div className="relative">

              <img
                src={logo}
                alt="logo"
                className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_20px_rgba(239,68,68,0.35)]"
              />

            </div>

            <div className="leading-tight">

              <h1 className="text-lg ml-[-20px] sm:text-xl md:text-2xl font-semibold uppercase tracking-[0.28em] bg-gradient-to-r from-white via-zinc-100 to-red-400 bg-clip-text text-transparent">
                MushZani
              </h1>

              <p className="text-[10px] ml-[-20px] tracking-[0.4em] uppercase text-red-400">
                Luxury Perfume
              </p>

            </div>

          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10 relative z-10">

            {navItems.map((item) => {
              const isActive = active === item.href;

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative text-[12px] uppercase tracking-[0.3em] transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >

                  {item.name}

                  {/* ACTIVE LINE */}
                  <span
                    className={`absolute left-0 -bottom-2 h-[2px] rounded-full transition-all duration-500 ${
                      isActive
                        ? "w-full bg-gradient-to-r from-red-500 to-white"
                        : "w-0 bg-white"
                    }`}
                  />

                </Link>
              );
            })}

          </div>

          {/* RIGHT SIDE */}
          <div className="relative z-10 flex items-center gap-3">

            {/* CART */}
            <Link
              to="/cart"
              className="relative w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-all duration-300"
            >

              <ShoppingBag className="w-5 h-5 text-white" />

              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white text-[10px] font-bold flex items-center justify-center shadow-lg shadow-red-500/40">
                  {totalItems}
                </span>
              )}

            </Link>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/10 transition"
            >

              {open ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}

            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            open ? "max-h-screen" : "max-h-0"
          }`}
        >

          <div className="bg-black/95 backdrop-blur-2xl border-t border-white/10 px-6 py-6 space-y-5">

            {navItems.map((item) => {
              const isActive = active === item.href;

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block text-sm uppercase tracking-[0.3em] transition-all duration-300 ${
                    isActive
                      ? "text-red-400"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >

                  {item.name}

                </Link>
              );
            })}

          </div>

        </div>

      </nav>

    </header>
  );
};

export default Navbar;