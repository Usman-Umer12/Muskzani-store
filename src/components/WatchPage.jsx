import React, { useMemo, useState } from "react";
import { WATCHES, FILTERS as RAW_FILTERS } from "../assets/dummywdata";
import { useCart } from "../../CartContext";

import {
  Grid,
  User,
  Users,
  Minus,
  Plus,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

const ICON_MAP = { Grid, User, Users };

const FILTERS = RAW_FILTERS?.length
  ? RAW_FILTERS.map((f) => ({
      ...f,
      icon: ICON_MAP[f.iconName] ?? Grid,
    }))
  : [
      { key: "all", label: "All", icon: Grid },
      { key: "men", label: "Men", icon: User },
      { key: "women", label: "Women", icon: Users },
    ];

const WatchPage = () => {
  const [filter, setFilter] = useState("all");

  const { cart, addItem, increment, decrement, removeItem } =
    useCart();

  const filtered = useMemo(
    () =>
      WATCHES.filter((w) =>
        filter === "all" ? true : w.gender === filter
      ),
    [filter]
  );

  const getQty = (id) => {
    const it = cart.find((c) => String(c.id) === String(id));
    return it ? it.qty : 0;
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white bg-black">

      {/* 💎 LUXURY BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />

      {/* RED AMBIENT LIGHT */}
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-red-600/10 blur-[170px] rounded-full" />

      {/* WHITE LIGHT */}
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-white/10 blur-[150px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-28">

        {/* HEADER */}
        <div className="text-center mt-15 mb-20">

          <p className="text-xs tracking-[0.5em] uppercase text-zinc-500">
            Mushzani Luxury Collection
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-light tracking-[0.18em] leading-tight">
            Signature
            <span className="text-red-500 font-medium">
              {" "}Fragrance
            </span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base text-zinc-500 leading-relaxed">
            Crafted with elegance, emotion and timeless luxury.
            Premium fragrances designed for identity & presence.
          </p>

        </div>

        {/* FILTERS */}
        <div className="flex justify-center mb-20">

          <div className="flex flex-wrap justify-center gap-3 bg-white/5 border border-white/10 backdrop-blur-2xl p-3 rounded-full">

            {FILTERS.map((f) => {
              const Icon = f.icon;
              const active = filter === f.key;

              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`flex items-center gap-2 px-6 h-11 rounded-full text-xs tracking-[0.3em] uppercase transition-all duration-300
                  ${
                    active
                      ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={15} />
                  {f.label}
                </button>
              );
            })}

          </div>

        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {filtered.map((w) => {
            const sid = String(w.id);
            const qty = getQty(sid);

            return (
              <div
                key={sid}
                className="group relative"
              >

                {/* CARD */}
                <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_35px_120px_rgba(0,0,0,0.85)] hover:-translate-y-3 transition-all duration-500">

                  {/* RED GLOW HOVER */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-red-600/10 via-transparent to-white/5 transition duration-500" />

                  {/* PRODUCT IMAGE */}
                  <div className="relative h-[400px] flex items-center justify-center overflow-hidden">

                    {/* LIGHT CIRCLE */}
                    <div className="absolute w-72 h-72 rounded-full bg-red-600/10 blur-[80px]" />

                    <img
                      src={w.img}
                      alt={w.name}
                      className="relative z-10 w-[72%] object-contain transition duration-700 group-hover:scale-110"
                    />

                    {/* SHINE EFFECT */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                      <div className="absolute top-0 left-[-120%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 group-hover:left-[140%] transition-all duration-1000" />
                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="relative p-7">

                    {/* TOP */}
                    <div className="flex items-start justify-between gap-4">

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.45em] text-zinc-500">
                          Luxury Perfume
                        </p>

                        <h3 className="mt-3 text-2xl font-medium tracking-wide">
                          {w.name}
                        </h3>
                      </div>

                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <Sparkles
                          size={16}
                          className="text-red-500"
                        />
                      </div>

                    </div>

                    {/* DESC */}
                    <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                      {w.desc}
                    </p>

                    {/* BOTTOM */}
                    <div className="mt-7 flex items-center justify-between">

                      {/* PRICE */}
                      <div>

                        <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                          Price
                        </p>

                        <h4 className="mt-1 text-2xl font-semibold text-white">
                          1600 <span className="text-sm text-red-400">PKR</span>
                        </h4>

                      </div>

                      {/* CART */}
                      {qty > 0 ? (
                        <div className="flex items-center gap-3 bg-black/40 border border-white/10 px-4 py-2 rounded-full backdrop-blur-xl">

                          <button
                            onClick={() =>
                              qty > 1
                                ? decrement(sid)
                                : removeItem(sid)
                            }
                            className="hover:text-red-400 transition"
                          >
                            <Minus size={15} />
                          </button>

                          <span className="text-sm min-w-[20px] text-center">
                            {qty}
                          </span>

                          <button
                            onClick={() => increment(sid)}
                            className="hover:text-red-400 transition"
                          >
                            <Plus size={15} />
                          </button>

                        </div>
                      ) : (
                        <button
                          onClick={() =>
                            addItem({
                              id: sid,
                              name: w.name,
                              price: 1600,
                              img: w.img,
                            })
                          }
                          className="flex items-center gap-2 px-6 h-11 rounded-full bg-red-600 hover:bg-red-500 text-white text-xs tracking-[0.3em] uppercase transition shadow-lg shadow-red-600/20"
                        >

                          <ShoppingCart size={15} />
                          Add

                        </button>
                      )}

                    </div>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default WatchPage;