"use client";

import React, { useRef, useEffect } from "react";
import { CATEGORY_GRID_ITEMS } from "@/data/furnitureData";
import { useStore } from "@/context/StoreContext";

const TABS = ["All", "Living", "Bedroom", "Dining", "Mattress", "Decor"];

export const CategoryGrid: React.FC = () => {
  const { activeCategoryFilter, setActiveCategoryFilter } = useStore();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".category-card-item");
    cards.forEach((c) => observer.observe(c));

    return () => observer.disconnect();
  }, [activeCategoryFilter]);

  const filteredItems = CATEGORY_GRID_ITEMS.filter((item) => {
    if (activeCategoryFilter === "All") return true;
    if (activeCategoryFilter === "Decor") return item.name.includes("COFFEE") || item.name.includes("BOOKSHELVES");
    return item.category.toLowerCase() === activeCategoryFilter.toLowerCase();
  });

  return (
    <section
      id="category-grid-section"
      ref={sectionRef}
      style={{
        padding: "30px 0 64px 0",
        background: "#ffffff"
      }}
    >
      <div className="container">
        {/* Filter Tabs matching Screenshot 4 with generous breathing room */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            marginBottom: "44px",
            flexWrap: "wrap"
          }}
        >
          {TABS.map((tab) => {
            const isSelected = activeCategoryFilter.toLowerCase() === tab.toLowerCase();

            return (
              <button
                key={tab}
                onClick={() => setActiveCategoryFilter(tab)}
                style={{
                  padding: "8px 28px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: isSelected ? 500 : 400,
                  border: isSelected ? "1.5px solid #e26a2c" : "1.5px solid #e2e2e2",
                  backgroundColor: "#ffffff",
                  color: isSelected ? "#e26a2c" : "#555555",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = "#c0c0c0";
                    e.currentTarget.style.color = "#111111";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.borderColor = "#e2e2e2";
                    e.currentTarget.style.color = "#555555";
                  }
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* 12-Card Category Grid matching Screenshot 4 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: "28px 20px",
            alignItems: "start"
          }}
          className="category-grid-responsive"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="category-card-item reveal-on-scroll"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                transitionDelay: `${index * 30}ms`
              }}
              onClick={() => {
                const el = document.getElementById("featured-bestsellers");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {/* Product Card Image Container */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1.25 / 1",
                  borderRadius: "10px",
                  overflow: "hidden",
                  backgroundColor: "#f5f3f0",
                  marginBottom: "14px",
                  position: "relative",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.03)";
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>

              {/* Uppercase Category Label */}
              <h3
                style={{
                  fontSize: "12.5px",
                  fontWeight: 500,
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  color: "#222222",
                  textAlign: "center",
                  lineHeight: "1.3"
                }}
              >
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1200px) {
          .category-grid-responsive {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .category-grid-responsive {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 20px 14px !important;
          }
        }
        @media (max-width: 480px) {
          .category-grid-responsive {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};
