"use client";

import React from "react";
import { useStore } from "@/context/StoreContext";

const ROW_1 = [
  { name: "Sofas", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop&q=80", category: "Living" },
  { name: "Beds", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&auto=format&fit=crop&q=80", category: "Bedroom" },
  { name: "Mattresses", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&auto=format&fit=crop&q=80", category: "Mattress" },
  { name: "Dining", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&auto=format&fit=crop&q=80", category: "Dining" },
  { name: "TV Units", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&auto=format&fit=crop&q=80", category: "Living" },
  { name: "Coffee Tables", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=400&auto=format&fit=crop&q=80", category: "Living" }
];

const ROW_2 = [
  { name: "Benches", image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&auto=format&fit=crop&q=80", category: "Living" },
  { name: "Sofa Cum Bed", image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&auto=format&fit=crop&q=80", category: "Living" },
  { name: "Recliners", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&auto=format&fit=crop&q=80", category: "Living" },
  { name: "Lounge Chairs", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&auto=format&fit=crop&q=80", category: "Living" },
  { name: "Cabinets", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&auto=format&fit=crop&q=80", category: "Living" },
  { name: "Wardrobes", image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&auto=format&fit=crop&q=80", category: "Bedroom" }
];

export const MobileCategorySection: React.FC = () => {
  const { setActiveCategoryFilter } = useStore();

  const handleCategoryClick = (cat: string) => {
    setActiveCategoryFilter(cat);
    const el = document.getElementById("featured-bestsellers");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mobile-category-scroll-container">
      {/* Row 1 Scroll */}
      <div className="scroll-row">
        {ROW_1.map((item, idx) => (
          <div
            key={idx}
            className="mobile-cat-pill"
            onClick={() => handleCategoryClick(item.category)}
          >
            <div className="img-box">
              <img src={item.image} alt={item.name} />
            </div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* Row 2 Scroll */}
      <div className="scroll-row" style={{ marginTop: "12px" }}>
        {ROW_2.map((item, idx) => (
          <div
            key={idx}
            className="mobile-cat-pill"
            onClick={() => handleCategoryClick(item.category)}
          >
            <div className="img-box">
              <img src={item.image} alt={item.name} />
            </div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .mobile-category-scroll-container {
          display: none;
          padding: 14px 0 10px 0;
          background: #ffffff;
        }

        .scroll-row {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding: 0 16px;
          white-space: nowrap;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }

        .scroll-row::-webkit-scrollbar {
          display: none;
        }

        .mobile-cat-pill {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          flex-shrink: 0;
          width: 80px;
        }

        .img-box {
          width: 78px;
          height: 60px;
          border-radius: 8px;
          overflow: hidden;
          background: #f2f2f2;
          margin-bottom: 6px;
        }

        .img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .mobile-cat-pill span {
          font-size: 11px;
          font-weight: 500;
          color: #333333;
          text-align: center;
          line-height: 1.2;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
        }

        @media (max-width: 992px) {
          .mobile-category-scroll-container {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};
