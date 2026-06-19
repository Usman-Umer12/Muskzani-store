import React, { useEffect, useState } from "react";
import { ShoppingBag, Menu, X, User, LogOut } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../../CartContext";
import logo from "../assets/logo.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Canes", href: "/luxurycanes" },
  { name: "Product", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const isHome = location.pathname === "/";

  const [active, setActive] = useState(location.pathname || "/");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  useEffect(() => {
    const token =
      localStorage.getItem("authToken") ||
      localStorage.getItem("isLoggedIn");

    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 md:px-6 pt-4">

      <nav
        className={`
          max-w-7xl mx-auto
          flex items-center justify-between
          h-[78px]
          px-5 lg:px-8
          rounded-2xl
          border
          transition-all duration-500

          ${
            isHome && !scrolled
              ? "bg-transparent border-transparent shadow-none backdrop-blur-0"
              : "bg-white/[0.06] backdrop-blur-[26px] border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
          }
        `}
      >

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-4">

          <img
            src={logo}
            alt="WoodGig"
           className="h-14 md:h-16 w-auto object-contain rounded-2xl"
          />

          <div className="hidden sm:block leading-tight">
            <h1 className="text-white text-lg tracking-[0.25em] font-light">
              WOODGIG
            </h1>
            <p className="text-[#c89f6a] text-[10px] uppercase tracking-[0.35em]">
              Al-USMAN-CNC
            </p>
          </div>

        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">

          {navItems.map((item) => {
            const isActive = active === item.href;

            return (
              <Link
                key={item.name}
                to={item.href}
                className="relative text-[11px] uppercase tracking-[0.3em]"
              >
                <span
                  className={`transition ${
                    isActive
                      ? "text-[#c89f6a]"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </span>

                <span
                  className={`
                    absolute left-0 -bottom-2 h-[1px]
                    bg-[#c89f6a] transition-all duration-300
                    ${isActive ? "w-full" : "w-0"}
                  `}
                />
              </Link>
            );
          })}

        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-3">

          <Link
            to="/cart"
            className="relative w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center hover:border-[#c89f6a]/40 transition"
          >
            <ShoppingBag className="w-5 h-5 text-white" />

            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#c89f6a] text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-11 h-11 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center"
          >
            {open ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-500
          ${open ? "max-h-[450px] opacity-100 mt-3" : "max-h-0 opacity-0"}
        `}
      >
        <div className="mx-2 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-[28px] shadow-2xl p-6">

          <div className="flex flex-col gap-4">

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.3em] text-zinc-300 hover:text-[#c89f6a]"
              >
                {item.name}
              </Link>
            ))}

          </div>

        </div>
      </div>

    </header>
  );
};

export default Navbar;