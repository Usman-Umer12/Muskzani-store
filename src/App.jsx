import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Collect from "./pages/Collect";
import About from "./pages/About";
import Luxury from "./pages/Luxury";
import { ArrowUp } from "lucide-react";

/* =========================
   SCROLL TO TOP
========================= */
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

/* =========================
   PROTECTED ROUTE (FIXED)
========================= */
function ProtectedRoute({ children }) {
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("authToken");
      setIsAuth(!!token);
    };

    checkAuth();

    window.addEventListener("storage", checkAuth);
    window.addEventListener("authChanged", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("authChanged", checkAuth);
    };
  }, []);

  if (isAuth === null) return null;

  return isAuth ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}

/* =========================
   MAIN APP
========================= */
const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowButton(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Prevent horizontal scroll issues */
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    html.style.overflowX = "hidden";
    body.style.overflowX = "hidden";
    body.style.margin = "0";
    body.style.padding = "0";
    html.style.scrollbarGutter = "stable";

    return () => {
      html.style.overflowX = "";
      body.style.overflowX = "";
      body.style.margin = "";
      body.style.padding = "";
      html.style.scrollbarGutter = "";
    };
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="min-h-screen w-full overflow-x-hidden antialiased bg-white text-slate-600">

      <ScrollToTopOnRouteChange />

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/luxurycanes" element={<Luxury />} />
        <Route path="/collections" element={<Collect />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* AUTH ROUTES */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* PROTECTED ROUTE */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

      </Routes>

      {/* SCROLL TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed right-6 bottom-6 z-50 flex items-center justify-center p-3 rounded-full shadow-lg transition-all duration-300
        ${
          showButton
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
        bg-gray-600 text-white hover:bg-black`}
      >
        <ArrowUp size={18} />
      </button>

    </div>
  );
};

export default App;