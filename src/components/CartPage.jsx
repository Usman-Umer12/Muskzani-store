// src/pages/CartPage.jsx

import React, { useState } from "react";
import { useCart } from "../../CartContext";
import {
  ArrowLeft,
  Minus,
  Plus,
  Trash2,
  Home,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const CartPage = () => {
  const navigate = useNavigate();

  const {
    cart,
    increment,
    decrement,
    removeItem,
    clearCart,
    totalPrice,
  } = useCart();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [note, setNote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleMobile = (e) => {
    setMobile(e.target.value.replace(/\D/g, "").slice(0, 11));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cart.length) return toast.error("Cart is empty");

    if (!name || !email || !address || !mobile || !paymentMethod) {
      return toast.error("Please fill all fields");
    }

    const itemsText = cart
      .map(
        (item, i) => `
🪵 Product ${i + 1}
Name: ${item.name}
Qty: ${item.qty}
Price: ${item.price}
------------------`
      )
      .join("\n");

    const tax = totalPrice * 0.08;
    const total = totalPrice + tax;

    const message = `
🌳 WOODGIG ORDER SUMMARY 🌳

👤 Name: ${name}
📧 Email: ${email}
📱 Mobile: ${mobile}
📍 Address: ${address}

💳 Payment: ${paymentMethod}

🛒 PRODUCTS:
${itemsText}

💰 Subtotal: ${totalPrice.toFixed(2)}
📊 Tax: ${tax.toFixed(2)}
💎 TOTAL PRODUCTS: ${cart.length}
💰 FINAL TOTAL: ${total.toFixed(2)}

📝 Note:
${note || "None"}
`;

    const phone = "923014122192";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    clearCart();
    toast.success("Order placed successfully!");
  };

  return (
    <div className="min-h-screen relative text-white">

      <ToastContainer />

      {/* 🌳 WOOD BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a120b] to-[#3b2a1a]" />

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-white/60 hover:text-white transition"
      >
        <ArrowLeft size={18} /> Back
      </button>

      {/* EMPTY CART */}
      {!cart.length ? (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">

          <ShoppingBag size={70} className="text-white/20 mb-4" />

          <h2 className="text-2xl font-light">Your Cart is Empty</h2>

          <p className="text-white/40 mt-2">
            Add handcrafted luxury items to continue
          </p>

          <button
            onClick={() => navigate("/")}
            className="mt-6 px-6 py-3 rounded-full bg-[#b08968] text-black flex items-center gap-2 hover:scale-105 transition"
          >
            <Home size={18} /> Go Home
          </button>
        </div>
      ) : (
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 py-24 grid lg:grid-cols-[1.2fr_0.8fr] gap-10">

          {/* LEFT: PRODUCTS */}
          <div>

            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-[#b08968]" />
              <h2 className="text-3xl font-light tracking-[0.1em]">
                Your Cart Products
              </h2>
            </div>

            {/* PRODUCT LIST */}
            <div className="space-y-4">

              {cart.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md"
                >

                  <img
                    src={item.img}
                    className="w-20 h-20 object-cover rounded-xl border border-white/10"
                  />

                  <div className="flex-1">

                    <h3 className="text-sm font-light tracking-wide">
                      {item.name}
                    </h3>

                    <p className="text-white/50 text-xs mt-1">
                      Price: {item.price}
                    </p>

                    {/* QTY CONTROL */}
                    <div className="flex items-center gap-3 mt-3">

                      <button
                        onClick={() => decrement(item.id)}
                        className="w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center"
                      >
                        <Minus size={14} />
                      </button>

                      <span className="text-sm">{item.qty}</span>

                      <button
                        onClick={() => increment(item.id)}
                        className="w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center"
                      >
                        <Plus size={14} />
                      </button>

                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>
              ))}

            </div>

            {/* TOTAL */}
            <div className="mt-8 flex justify-between items-center border-t border-white/10 pt-5">

              <p className="text-white/50 text-sm">
                Total Products:{" "}
                <span className="text-[#b08968]">{cart.length}</span>
              </p>

              <p className="text-lg">
                Total:{" "}
                <span className="text-[#b08968]">
                  {totalPrice.toFixed(2)}
                </span>
              </p>

            </div>

          </div>

          {/* RIGHT: CHECKOUT */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md space-y-4"
          >

            <h2 className="text-2xl font-light mb-4">
              Checkout Details
            </h2>

            <input
              placeholder="Name"
              className="w-full h-12 px-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-[#b08968]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Email"
              className="w-full h-12 px-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-[#b08968]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Mobile"
              className="w-full h-12 px-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-[#b08968]"
              value={mobile}
              onChange={handleMobile}
            />

            <textarea
              placeholder="Address"
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-[#b08968]"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <select
              className="w-full h-12 px-4 rounded-xl bg-black/40 border border-white/10"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Payment Method</option>
              <option value="COD">Cash on Delivery</option>
              <option value="Online">Online</option>
            </select>

            <textarea
              placeholder="Note"
              className="w-full p-4 rounded-xl bg-black/40 border border-white/10"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

            <button className="w-full h-12 rounded-full bg-[#b08968] text-black uppercase tracking-[0.2em] hover:scale-105 transition">
              Place Order on WhatsApp
            </button>

          </form>

        </div>
      )}

    </div>
  );
};

export default CartPage;