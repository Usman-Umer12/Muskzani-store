import React, { useState } from "react";
import { useCart } from "../../CartContext";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  ShieldCheck,
  Truck,
  CreditCard,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartPage = () => {
  const {
    cart,
    increment,
    decrement,
    removeItem,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [note, setNote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleMobileChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobile(digitsOnly);
  };

  const isFormValid = () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !address.trim() ||
      !mobile.trim() ||
      !paymentMethod.trim()
    ) {
      return false;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const phoneOk = /^[0-9]{10}$/.test(mobile);

    return emailOk && phoneOk;
  };

  const processPayment = (method) => {
    if (method === "Cash on Delivery") return true;
    if (method === "Online") return Math.random() < 0.75;
    return false;
  };


   const handleSubmit = (e) => {
  e.preventDefault();

  if (!isFormValid()) {
    toast.error("Please fill all required fields correctly.", {
      position: "top-right",
    });
    return;
  }

  if (!cart.length) {
    toast.error("Your cart is empty.", {
      position: "top-right",
    });
    return;
  }

  // 🟢 PRODUCTS MESSAGE
  const orderItems = cart
    .map(
      (item, index) =>
        `🛍 Product ${index + 1}
━━━━━━━━━━━━━━
📦 Name: ${item.name}
💰 Price: ${item.price}
🔢 Qty: ${item.qty}
`
    )
    .join("\n");

  const total = (totalPrice * 1.08).toFixed(2);

  const message = `
✨ NEW ORDER RECEIVED ✨

👤 Name: ${name}
📧 Email: ${email}
📱 Mobile: ${mobile}
📍 Address: ${address}

💳 Payment: ${paymentMethod}

🛒 ORDER DETAILS:
${orderItems}

💵 Total Bill: ₹${total}

📝 Note:
${note || "No note provided"}

`;

  // ✅ WHATSAPP NUMBER
  const phoneNumber = "923014122192";

  // 🔥 OPEN WHATSAPP
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");

  // PAYMENT
  const paymentOk = processPayment(paymentMethod);

  if (paymentOk) {
    clearCart();

    setName("");
    setEmail("");
    setAddress("");
    setMobile("");
    setNote("");
    setPaymentMethod("");

    toast.success("Order placed successfully.", {
      position: "top-right",
    });
  } else {
    toast.error("Payment failed. Please try again.", {
      position: "top-right",
    });
  }
};
  

  /* EMPTY CART */
  if (!cart.length) {
    return (
      <>
        <ToastContainer />

        <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

          {/* BG */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[180px] rounded-full" />

          <div className="relative z-10 w-full max-w-xl rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-10 text-center">

            <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto">
              <ShoppingBag size={40} />
            </div>

            <h2 className="mt-8 text-4xl font-light tracking-[0.15em]">
              Your Cart is Empty
            </h2>

            <p className="mt-4 text-zinc-500 leading-relaxed">
              Explore our premium luxury collection and discover timeless
              fragrances crafted with elegance.
            </p>

            <Link
              to="/watches"
              className="mt-10 inline-flex items-center justify-center px-8 h-14 rounded-full bg-white text-black text-xs tracking-[0.3em] uppercase hover:bg-zinc-300 transition-all duration-500 hover:scale-105"
            >
              Browse Collection
            </Link>

          </div>

        </section>
      </>
    );
  }

  return (
    <>
      <ToastContainer />

     {/* ========================= PREMIUM CART PAGE UI ========================= */}

<section className="relative min-h-screen overflow-hidden bg-black text-white">

  {/* PREMIUM BACKGROUND */}
  <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

  {/* RED GLOW */}
  <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-red-600/10 blur-[180px] rounded-full" />

  {/* WHITE LIGHT */}
  <div className="absolute bottom-[-150px] right-[-100px] w-[450px] h-[450px] bg-white/5 blur-[150px] rounded-full" />

  {/* GRID */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage:
        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
      backgroundSize: "90px 90px",
    }}
  />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">

    {/* ================= HEADER ================= */}
    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-10 mb-16">

      <div>

        {/* BACK BTN */}
        <Link
          to="/watches"
          className="group inline-flex items-center gap-3 text-zinc-400 hover:text-white transition-all duration-500"
        >
          <div className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
            <ArrowLeft size={16} />
          </div>

          <span className="tracking-[0.25em] uppercase text-xs">
            Continue Shopping
          </span>
        </Link>

        {/* TITLE */}
        <h1 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-light tracking-[0.15em] leading-tight">

          Luxury
          <span className="text-red-500"> Cart</span>

        </h1>

        <p className="mt-6 max-w-2xl text-zinc-500 leading-relaxed text-sm sm:text-base">
          Review your premium fragrance collection and complete your order
          with a seamless luxury checkout experience.
        </p>

      </div>

      {/* CLEAR BUTTON */}
      <button
        onClick={clearCart}
        className="group flex items-center justify-center gap-3 h-14 px-8 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 hover:bg-red-600 hover:text-white transition-all duration-500"
      >

        <Trash2
          size={16}
          className="transition duration-500 group-hover:rotate-12"
        />

        <span className="uppercase tracking-[0.3em] text-xs">
          Clear Cart
        </span>

      </button>

    </div>

    {/* ================= MAIN GRID ================= */}
    <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-10">

      {/* ================= LEFT SIDE ================= */}
      <div>

        {/* ================= FORM ================= */}
        <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-5 sm:p-8 lg:p-10">

          {/* TOP LIGHT */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* HEADER */}
          <div className="flex items-center justify-between gap-5 flex-wrap mb-10">

            <div>

              <div className="inline-flex items-center gap-3 px-5 h-10 rounded-full border border-red-500/20 bg-red-500/10 text-red-300 text-[11px] uppercase tracking-[0.35em]">

                <Sparkles size={14} />

                Secure Checkout

              </div>

              <h2 className="mt-6 text-3xl sm:text-4xl font-light tracking-[0.12em]">
                Checkout Details
              </h2>

            </div>

            <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
              <ShoppingBag size={28} />
            </div>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* ROW */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 outline-none focus:border-red-500/40 focus:bg-white/[0.05] transition-all"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 outline-none focus:border-red-500/40 focus:bg-white/[0.05] transition-all"
              />

            </div>

            {/* MOBILE */}
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobile}
              onChange={handleMobileChange}
              className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 outline-none focus:border-red-500/40 focus:bg-white/[0.05] transition-all"
            />

            {/* ADDRESS */}
            <textarea
              rows={5}
              placeholder="Delivery Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full rounded-[28px] border border-white/10 bg-white/[0.03] px-5 py-5 outline-none resize-none focus:border-red-500/40 focus:bg-white/[0.05] transition-all"
            />

            {/* PAYMENT */}
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 outline-none focus:border-red-500/40 transition-all"
            >

              <option value="">Select Payment Method</option>

              <option value="Online">
                Online Payment
              </option>

              <option value="Cash on Delivery">
                Cash on Delivery
              </option>

            </select>

            {/* NOTE */}
            <textarea
              rows={4}
              placeholder="Additional Delivery Notes"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full rounded-[28px] border border-white/10 bg-white/[0.03] px-5 py-5 outline-none resize-none focus:border-red-500/40 focus:bg-white/[0.05] transition-all"
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="group relative overflow-hidden w-full h-14 rounded-2xl bg-white text-black uppercase tracking-[0.35em] text-xs hover:bg-red-500 hover:text-white transition-all duration-500"
            >

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-1000">

                <div className="absolute top-0 left-[-120%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:left-[140%] transition-all duration-1000" />

              </div>

              <span className="relative z-10">
                Place Order
              </span>

            </button>

          </form>

        </div>

        {/* ================= PRODUCTS ================= */}
        <div className="mt-10 space-y-6">

          {cart.map((item) => (

            <div
              key={item.id}
              className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
            >

              {/* HOVER */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-br from-red-600/10 via-transparent to-white/5" />

              <div className="relative p-5 sm:p-6">

                <div className="flex flex-col lg:flex-row gap-6">

                  {/* IMAGE */}
                  <div className="relative w-full lg:w-[220px] h-[240px] rounded-[28px] overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 to-black/40 flex items-center justify-center">

                    {/* GLOW */}
                    <div className="absolute w-[200px] h-[200px] rounded-full bg-red-600/10 blur-[80px]" />

                    <img
                      src={item.img}
                      alt={item.name}
                      className="relative z-10 w-[75%] object-contain transition duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 flex flex-col justify-between">

                    <div>

                      <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                        Luxury Fragrance
                      </p>

                      <h3 className="mt-4 text-2xl sm:text-3xl font-light tracking-wide">
                        {item.name}
                      </h3>

                      <p className="mt-4 text-zinc-400 leading-relaxed text-sm">
                        Premium long lasting fragrance crafted with elegance
                        and timeless luxury notes.
                      </p>

                    </div>

                    {/* BOTTOM */}
                    <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                      {/* QTY */}
                      <div className="flex items-center gap-5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 w-fit">

                        <button
                          onClick={() => decrement(item.id)}
                          className="hover:text-red-400 transition"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="text-lg">
                          {item.qty}
                        </span>

                        <button
                          onClick={() => increment(item.id)}
                          className="hover:text-red-400 transition"
                        >
                          <Plus size={16} />
                        </button>

                      </div>

                      {/* PRICE + REMOVE */}
                      <div className="flex items-center gap-5 flex-wrap">

                        <h4 className="text-2xl font-light">
                          ₹{item.price}
                        </h4>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="flex items-center gap-2 text-red-400 hover:text-red-300 transition"
                        >

                          <Trash2 size={16} />

                          Remove

                        </button>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* ================= RIGHT SIDE ================= */}
      <div className="xl:sticky xl:top-10 h-fit">

        <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 sm:p-8">

          {/* GLOW */}
          <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] bg-red-600/10 blur-[100px] rounded-full" />

          <div className="relative">

            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Premium Billing
            </p>

            <h2 className="mt-5 text-3xl font-light tracking-[0.12em]">
              Order Summary
            </h2>

            {/* SUMMARY */}
            <div className="mt-10 space-y-6">

              <div className="flex items-center justify-between text-zinc-400">
                <span>Subtotal ({totalItems} items)</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between text-zinc-400">
                <span>Shipping Fee</span>
                <span>Free</span>
              </div>

              <div className="flex items-center justify-between text-zinc-400">
                <span>Tax (8%)</span>
                <span>₹{(totalPrice * 0.08).toFixed(2)}</span>
              </div>

            </div>

            {/* TOTAL */}
            <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">

              <span className="uppercase tracking-[0.25em] text-sm">
                Grand Total
              </span>

              <span className="text-4xl font-light text-red-400">
                ₹{(totalPrice * 1.08).toFixed(2)}
              </span>

            </div>

            {/* FEATURES */}
            <div className="mt-10 space-y-6">

              {/* ITEM */}
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
                  <Truck size={20} />
                </div>

                <div>

                  <h4 className="text-sm uppercase tracking-[0.25em]">
                    Free Delivery
                  </h4>

                  <p className="text-zinc-500 text-sm mt-1">
                    Premium fast shipping available
                  </p>

                </div>

              </div>

              {/* ITEM */}
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
                  <ShieldCheck size={20} />
                </div>

                <div>

                  <h4 className="text-sm uppercase tracking-[0.25em]">
                    Secure Checkout
                  </h4>

                  <p className="text-zinc-500 text-sm mt-1">
                    Protected encrypted transactions
                  </p>

                </div>

              </div>

              {/* ITEM */}
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
                  <CreditCard size={20} />
                </div>

                <div>

                  <h4 className="text-sm uppercase tracking-[0.25em]">
                    Flexible Payment
                  </h4>

                  <p className="text-zinc-500 text-sm mt-1">
                    Online payment & COD support
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>  
    </>
  );
};

export default CartPage;