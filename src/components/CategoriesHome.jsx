import React, { useMemo } from "react";
import { Link } from "react-router-dom";

// images
import home3 from "../assets/kitchen.png";
import home2 from "../assets/home4.png";
import desk from "../assets/desk.png";
import art1 from "../assets/art1.png";
import decorate from "../assets/decote.png";
import decorate1 from "../assets/islamic.png";
import office from "../assets/officedesk.png";
import gift from "../assets/gift.png";
import gift2 from "../assets/gift2.png";
import colect from "../assets/colect.png";
import colect1 from "../assets/colect1.png";
import colect2 from "../assets/colect2.png";

const CategoriesHome = () => {

  // ✅ STABLE DATA (NO RE-CREATION)
  const categories = useMemo(
    () => [
      {
        title: "Home & Decor",
        image: decorate,
        hoverImage: decorate1,
        items: [
          "CNC Wall Panels",
          "Islamic Calligraphy",
          "Family Name Signs",
          "Number Plaques",
          "Wooden Clocks",
        ],
      },
      {
        title: "Kitchen & Dining",
        image: home3,
        hoverImage: home2,
        items: [
          "Serving Trays",
          "Charcuterie Boards",
          "Cheese Boards",
          "Coasters",
          "Tea Box Organizers",
        ],
      },
      {
        title: "Office & Desk",
        image: desk,
        hoverImage: office,
        items: [
          "Card Holders",
          "Pen Stands",
          "Desk Organizers",
          "Laptop Stands",
          "Phone Docks",
        ],
      },
      {
        title: "Gifts & Keepsakes",
        image: gift,
        hoverImage: gift2,
        items: [
          "Wedding Gifts",
          "Anniversary Plaques",
          "Baby Boards",
          "Quran Stands",
          "Jewelry Boxes",
        ],
      },
      {
        title: "Collectibles",
        image: colect,
        hoverImage: colect1,
        items: [
          "Viking Shields",
          "Medieval Shields",
          "Dragon Plaques",
          "Gaming Art",
          "Treasure Chests",
        ],
      },
      {
        title: "3D Relief Art",
        image: art1,
        hoverImage: colect2,
        items: [
          "Mountain Landscapes",
          "Wildlife Scenes",
          "Lion Reliefs",
          "Waterfall Panels",
          "Portrait Carvings",
        ],
      },
    ],
    []
  );

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-[#0f0f0f] via-[#17120d] to-[#241b14]">

      {/* GLOW (static - no re-render impact) */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-[#c89f6a]/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#c89f6a]/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">

        {/* HEADING */}
        <div className="mx-auto mb-16 md:mb-20 max-w-4xl text-center">

          <p className="uppercase tracking-[0.4em] text-[#c89f6a] text-[11px] md:text-xs">
            Premium Woodworking Products
          </p>

          <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.12em] text-white">
            Masterpiece
            <span className="block text-[#c89f6a]">Products</span>
          </h2>

          <p className="mt-6 text-zinc-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Explore premium woodworking collection crafted with elegance and precision.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {categories.map((category, index) => (
            <div
              key={category.title} // ✅ better key than index
              className="group overflow-hidden rounded-[30px] bg-white/[0.03] backdrop-blur-xl border border-[#c89f6a]/15 transition-all duration-500 hover:-translate-y-3 hover:border-[#c89f6a]/40"
            >

              {/* IMAGE SECTION */}
              <div className="relative h-[260px] sm:h-[300px] overflow-hidden">

                {/* MAIN IMAGE */}
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-110 absolute inset-0"
                />

                {/* HOVER IMAGE */}
                <img
                  src={category.hoverImage}
                  alt={category.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110 absolute inset-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 md:p-8">

                <h3 className="mb-5 text-2xl md:text-3xl font-light tracking-[0.05em] text-[#c89f6a]">
                  {category.title}
                </h3>

                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center text-zinc-300 text-sm"
                    >
                      <span className="mr-3 h-2 w-2 rounded-full bg-[#c89f6a]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link to="/collections">
                  <button className="mt-8 h-11 px-6 rounded-full border border-[#c89f6a] text-[#c89f6a] text-[11px] uppercase tracking-[0.3em] transition-all duration-300 hover:bg-[#c89f6a] hover:text-black">
                    Explore Products
                  </button>
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CategoriesHome;