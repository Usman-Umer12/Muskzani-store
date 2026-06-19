// src/pages/ContactPage.jsx

import React, { useState } from "react";
import image1 from "../assets/logo.png";
import {
  AlertCircle,
  Check,
  Clock,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Send,
  Sparkles,
  User,
  ShoppingCart,
} from "lucide-react";

const ContactPage = () => {
  const WHATSAPP_NUMBER = "923240655287";

  const initialForm = {
    name: "",
    email: "",
    phone: "",
    product: "Luxury Wood Craft",
    message: "",
  };

  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);

  const products = [
    "Luxury Wood Craft",
    "CNC Wall Art",
    "Walking Canes",
    "Islamic Wood Art",
    "Custom Gift Box",
  ];

  const showToast = (text, kind = "success") => {
    setToast({ text, kind });
    setTimeout(() => setToast(null), 2200);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const message =
      `🌳 Woodgig Inquiry\n\n` +
      `👤 Name: ${form.name}\n` +
      `📧 Email: ${form.email}\n` +
      `📱 Phone: ${form.phone}\n` +
      `🪵 Product: ${form.product}\n\n` +
      `💬 Message:\n${form.message}`;

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
      message
    )}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setForm(initialForm);
      setSending(false);
      showToast("Message Sent Successfully");
    }, 900);
  };

  return (
    <section className="relative overflow-hidden text-white bg-black">

      {/* 🌳 WOOD LUXURY BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a120b] to-[#3b2a1a]" />

      {/* GLOWS */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#b08968]/15 blur-[180px]" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[400px] h-[400px] bg-[#5c3b1e]/20 blur-[150px]" />

      {/* HEADER */}
      <div className="relative mt-20 text-center pt-28 pb-16 px-6">

        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs tracking-[0.3em] uppercase text-zinc-300">
          <Sparkles size={14} />
          Woodgig Contact
        </div>

        <h1 className="mt-8 text-4xl md:text-6xl font-light tracking-[0.15em]">
          Contact <span className="text-[#b08968]">Woodgig</span>
        </h1>

        <p className="mt-5 text-zinc-400 max-w-2xl mx-auto">
          Premium woodworking studio for custom CNC art, luxury décor and handcrafted wooden masterpieces.
        </p>

      </div>

      {/* MAIN GRID */}
      <div className="relative max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-[1.2fr_0.8fr] gap-10">

        {/* FORM CARD */}
        <div className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12">

          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-xs tracking-[0.3em] text-zinc-500 uppercase">
                Inquiry Form
              </p>
              <h2 className="text-3xl mt-2 font-light tracking-[0.1em]">
                Get Custom Quote
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-[#b08968]/20 flex items-center justify-center">
              <Send size={18} />
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-5">

              <input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="h-12 px-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-[#b08968]/50"
                required
              />

              <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="h-12 px-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-[#b08968]/50"
                required
              />

            </div>

            <input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="h-12 px-4 rounded-xl w-full bg-black/40 border border-white/10 outline-none focus:border-[#b08968]/50"
              required
            />

            <select
              name="product"
              value={form.product}
              onChange={handleChange}
              className="h-12 px-4 rounded-xl w-full bg-black/40 border border-white/10"
            >
              {products.map((p) => (
                <option key={p} className="bg-black">{p}</option>
              ))}
            </select>

            <textarea
              name="message"
              rows={5}
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              className="p-4 rounded-xl w-full bg-black/40 border border-white/10 outline-none focus:border-[#b08968]/50"
              required
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full h-12 rounded-full bg-[#b08968] text-black tracking-[0.2em] uppercase hover:scale-105 transition"
            >
              {sending ? "Sending..." : "Send Inquiry"}
            </button>

          </form>

        </div>

        {/* INFO CARD */}
        <div className="space-y-6">

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <img
              src={image1}
              className="w-full max-w-[220px] mx-auto mb-6"
            />

            <h3 className="text-2xl font-light">
              Woodgig Studio
            </h3>

            <p className="text-zinc-400 mt-3 text-sm">
              Premium CNC woodworking & custom luxury art studio.
            </p>

            <div className="mt-6 space-y-4 text-zinc-400 text-sm">

              <p>+92 324 0655287</p>
              <p>muhammad.ahmadtx@gmail.com</p>
              <p>Pakistan (Worldwide Shipping)</p>

            </div>

          </div>

        </div>

      </div>
      {/* ================= WOODGIG LOCATION ================= */}
<section className="relative px-6 pb-24">

  {/* Luxury Heading */}
  <div className="text-center mb-10">
    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#b08968]/20 bg-[#b08968]/10 text-[#d4b08c] text-xs uppercase tracking-[0.3em]">
      Visit Us
    </span>

    <h2 className="mt-6 text-4xl md:text-5xl font-light tracking-[0.08em]">
      Our <span className="text-[#b08968]">Location</span>
    </h2>

    <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
      Visit Woodgig Studio in Wazirabad for premium CNC woodworking,
      luxury décor, Islamic art and custom handcrafted creations.
    </p>
  </div>

  {/* Map Card */}
  <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl">

    {/* Glow Effects */}
    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#b08968]/10 blur-[140px]" />

    {/* Google Map */}
    <iframe
      title="Woodgig Studio Location"
      src="https://maps.google.com/maps?q=Arain%20Colony%20Opposite%20Cheema%20Colony%20Wazirabad%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
      loading="lazy"
      allowFullScreen
      className="w-full h-[350px] md:h-[550px]"
    />

    {/* Bottom Info */}
    <div className="grid md:grid-cols-3 gap-8 p-8 bg-black/80 backdrop-blur-xl border-t border-white/10">

      <div>
        <h4 className="text-[#b08968] uppercase tracking-[0.25em] text-xs mb-3">
          Address
        </h4>

        <p className="text-zinc-300 text-sm leading-relaxed">
          Arain Colony,
          Opposite Cheema Colony,
          Wazirabad,
          Punjab 52000,
          Pakistan
        </p>
      </div>

      <div>
        <h4 className="text-[#b08968] uppercase tracking-[0.25em] text-xs mb-3">
          Contact
        </h4>

        <p className="text-zinc-300 text-sm">
          +92 324 0655287
        </p>

        <p className="text-zinc-500 text-sm mt-2">
          Available 24 Hours
        </p>
      </div>

      <div>
        <h4 className="text-[#b08968] uppercase tracking-[0.25em] text-xs mb-3">
          Services
        </h4>

        <p className="text-zinc-300 text-sm">
          CNC Wood Art, Islamic Wall Art,
          Custom Furniture, Luxury Gifts &
          Worldwide Shipping.
        </p>
      </div>

    </div>
  </div>

</section>

      {/* TOAST */}
      {toast && (
        <div className="fixed top-6 right-6 px-4 py-3 rounded-xl bg-black border border-white/10 text-sm">
          {toast.text}
        </div>
      )}

    </section>
  );
};

export default ContactPage;