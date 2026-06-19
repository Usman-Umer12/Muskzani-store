import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { EyeOff, Eye, ArrowLeft, User, Mail, Lock } from "lucide-react";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return toast.error("Please fill all fields");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return toast.error("Invalid email");
    }

    toast.success("Account created successfully!");

    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0f0e] text-white px-4 relative">

      <ToastContainer />

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 flex items-center gap-2 text-white/70 hover:text-white transition"
      >
        <ArrowLeft size={20} /> Back
      </button>

      {/* CARD */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">

        <h1 className="text-3xl font-semibold mb-6 text-center">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* NAME */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-white/50" size={18} />
            <input
              placeholder="Full Name"
              className="w-full pl-10 p-3 rounded-lg bg-white/10 outline-none focus:ring-2 ring-[#c8a165]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-white/50" size={18} />
            <input
              placeholder="Email"
              className="w-full pl-10 p-3 rounded-lg bg-white/10 outline-none focus:ring-2 ring-[#c8a165]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-white/50" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-10 p-3 rounded-lg bg-white/10 outline-none focus:ring-2 ring-[#c8a165]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-white/60"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* CHECKBOX */}
          <label className="flex items-center gap-2 text-sm text-white/70">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>

          {/* BUTTON */}
          <button className="w-full py-3 rounded-lg bg-[#c8a165] text-black font-semibold hover:bg-[#b08d55] transition">
            Sign Up
          </button>

          <p
            onClick={() => navigate("/login")}
            className="text-center text-sm text-white/60 cursor-pointer hover:text-white"
          >
            Already have an account? Login
          </p>

        </form>
      </div>
    </div>
  );
};

export default SignUpPage;