import React, { useState } from "react";
import image1 from "../assets/image1.png";

import {
  AlertCircle,
  Check,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  ShoppingCart,
  Sparkles,
  User,
  ArrowRight,
} from "lucide-react";

const ContactPage = () => {
  const WHATSAPP_NUMBER = "923014122192";

  const initialForm = {
    name: "",
    email: "",
    phone: "",
    product: "Luxury Perfume",
    message: "",
  };

  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);

  const products = [
    "Luxury Perfume",
    "Velvet Noir",
    "Royal Essence",
    "Midnight Oud",
    "Golden Aura",
  ];

  function showToast(text, kind = "success", duration = 2000) {
    setToast({ text, kind });

    setTimeout(() => {
      setToast(null);
    }, duration);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((s) => ({
      ...s,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSending(true);

    const message =
      `✨ Mushzani Luxury Inquiry\n\n` +
      `👤 Name: ${form.name}\n` +
      `📧 Email: ${form.email}\n` +
      `📱 Phone: ${form.phone}\n` +
      `🛍 Product: ${form.product}\n\n` +
      `💬 Message:\n${form.message}`;

    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(
      message
    )}`;

    setTimeout(() => {
      window.open(url, "_blank");

      setSending(false);
      setForm(initialForm);

      showToast("Message Sent Successfully");
    }, 1000);
  }

  return (
    <section className="relative overflow-hidden bg-black text-white">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

      {/* RED GLOW */}
      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[850px] h-[850px] bg-red-600/10 blur-[180px] rounded-full" />

      {/* WHITE LIGHT */}
      <div className="absolute bottom-[-200px] right-[-120px] w-[450px] h-[450px] bg-white/10 blur-[160px] rounded-full" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-24">

        {/* HEADER */}
        <div className="text-center mt-10 mb-20">

          <div className="inline-flex items-center gap-3 px-6 h-11 rounded-full border border-red-500/20 bg-red-500/10 backdrop-blur-2xl text-xs tracking-[0.35em] uppercase text-red-300">

            <Sparkles size={14} />
            Mushzani Luxury Contact

          </div>

          <h1 className="mt-8 text-4xl sm:text-5xl md:text-7xl font-light leading-tight tracking-[0.15em]">

            Contact
            <span className="text-red-500">
              {" "}Mushzani
            </span>

          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-zinc-500 text-sm md:text-base leading-relaxed">
            Connect with our luxury fragrance specialists for premium perfumes,
            private consultations and exclusive collections.
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[1.1fr_0.7fr] gap-8 lg:gap-12">

          {/* LEFT SIDE */}
          <div className="relative rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl overflow-hidden">

            {/* TOP LIGHT */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="p-6 md:p-10">

              {/* FORM HEADER */}
              <div className="flex items-center justify-between mb-10">

                <div>

                  <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                    Premium Inquiry
                  </p>

                  <h2 className="mt-3 text-3xl md:text-4xl font-light tracking-[0.1em]">
                    Get In Touch
                  </h2>

                </div>

                <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">

                  <Send size={20} />

                </div>

              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* ROW */}
                <div className="grid md:grid-cols-2 gap-5">

                  {/* NAME */}
                  <div>

                    <label className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                      Full Name
                    </label>

                    <div className="relative mt-3">

                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />

                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] pl-12 pr-4 outline-none focus:border-red-500/30 transition"
                      />

                    </div>

                  </div>

                  {/* EMAIL */}
                  <div>

                    <label className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                      Email Address
                    </label>

                    <div className="relative mt-3">

                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="example@gmail.com"
                        required
                        className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] pl-12 pr-4 outline-none focus:border-red-500/30 transition"
                      />

                    </div>

                  </div>

                </div>

                {/* ROW */}
                <div className="grid md:grid-cols-2 gap-5">

                  {/* PHONE */}
                  <div>

                    <label className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                      Phone Number
                    </label>

                    <div className="relative mt-3">

                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />

                      <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+92 xxx xxx xxxx"
                        required
                        className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] pl-12 pr-4 outline-none focus:border-red-500/30 transition"
                      />

                    </div>

                  </div>

                  {/* PRODUCT */}
                  <div>

                    <label className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                      Product Interest
                    </label>

                    <div className="relative mt-3">

                      <ShoppingCart className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4 z-10" />

                      <select
                        name="product"
                        value={form.product}
                        onChange={handleChange}
                        className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] pl-12 pr-4 appearance-none outline-none focus:border-red-500/30 transition"
                      >

                        {products.map((p) => (
                          <option
                            key={p}
                            value={p}
                            className="bg-black"
                          >
                            {p}
                          </option>
                        ))}

                      </select>

                    </div>

                  </div>

                </div>

                {/* MESSAGE */}
                <div>

                  <label className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                    Your Message
                  </label>

                  <textarea
                    rows={6}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your luxury fragrance preference..."
                    required
                    className="mt-3 w-full rounded-[28px] border border-white/10 bg-white/[0.03] p-5 resize-none outline-none focus:border-red-500/30 transition"
                  />

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={sending}
                  className="group w-full md:w-auto px-8 h-14 rounded-full bg-red-600 hover:bg-red-500 transition-all duration-500 text-xs tracking-[0.35em] uppercase shadow-lg shadow-red-600/20"
                >

                  <span className="flex items-center justify-center gap-3">

                    {sending ? "Sending..." : "Send via WhatsApp"}

                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />

                  </span>

                </button>

              </form>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* SHOWROOM CARD */}
            <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8">

              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-red-600/10 to-white/[0.03] p-8 flex justify-center">

                <div className="absolute w-[220px] h-[220px] bg-red-600/10 blur-[90px] rounded-full" />

                <img
                  src={image1}
                  alt="Luxury Perfume"
                  className="relative z-10 w-[220px] object-contain transition duration-700 hover:scale-105"
                />

              </div>

              <h3 className="mt-8 text-3xl font-light tracking-[0.08em]">
                Private Showroom
              </h3>

              <p className="mt-5 text-zinc-500 leading-relaxed">
                Discover premium fragrances crafted for elegance,
                identity and timeless sophistication.
              </p>

              {/* INFO */}
              <div className="mt-8 space-y-5">

                <div className="flex items-center gap-4 text-zinc-400">

                  <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                    <Phone size={17} />
                  </div>

                  <span>+92 301 4122192</span>

                </div>

                <div className="flex items-center gap-4 text-zinc-400">

                  <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                    <Mail size={17} />
                  </div>

                  <span>mushzani@luxury.com</span>

                </div>

                <div className="flex items-center gap-4 text-zinc-400">

                  <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                    <Clock size={17} />
                  </div>

                  <span>Mon - Sat / 10AM - 9PM</span>

                </div>

                <div className="flex items-center gap-4 text-zinc-400">

                  <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                    <MapPin size={17} />
                  </div>

                  <span>Lahore, Pakistan</span>

                </div>

              </div>

            </div>

            {/* SECOND CARD */}
            <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-gradient-to-br from-red-600/10 via-white/[0.03] to-black p-8">

              <div className="absolute right-[-80px] top-[-80px] w-[220px] h-[220px] rounded-full bg-red-600/10 blur-[100px]" />

              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                Luxury Experience
              </p>

              <h3 className="mt-5 text-4xl font-light leading-tight">

                Crafted For
                <br />

                <span className="text-red-500">
                  Modern Elegance
                </span>

              </h3>

              <p className="mt-5 text-zinc-500 leading-relaxed">
                Premium fragrances designed for unforgettable presence.
              </p>

              <button className="group mt-10 w-full h-14 rounded-full bg-white text-black text-xs tracking-[0.35em] uppercase hover:bg-red-600 hover:text-white transition-all duration-500">

                <span className="flex items-center justify-center gap-3">

                  Book Appointment

                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-1"
                  />

                </span>

              </button>

            </div>

          </div>

        </div>

      </div>

      {/* TOAST */}
      {toast && (
        <div
          className={`fixed top-6 right-6 z-50 px-5 py-4 rounded-2xl border backdrop-blur-xl flex items-center gap-3
          ${
            toast.kind === "error"
              ? "bg-red-500/10 border-red-500/20 text-red-300"
              : "bg-green-500/10 border-green-500/20 text-green-300"
          }`}
        >

          {toast.kind === "success" ? (
            <Check size={18} />
          ) : (
            <AlertCircle size={18} />
          )}

          <span className="text-sm tracking-wide">
            {toast.text}
          </span>

        </div>
      )}

    </section>
  );
};

export default ContactPage;