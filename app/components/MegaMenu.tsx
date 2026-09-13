"use client";

import React from "react";
import Link from "next/link";
import { MegaMenuCategory } from "@/data/furnitureData";
import { ArrowRight } from "lucide-react";
import { useStore } from "@/context/StoreContext";

interface MegaMenuProps {
  category: MegaMenuCategory;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ category, onClose }) => {
  const { setActiveCategoryFilter } = useStore();

  const handleLinkClick = (item: string) => {
    // Map item to a relevant category tab if needed
    if (category.name === "Living" || category.name === "Sofas") {
      setActiveCategoryFilter("Living");
    } else if (category.name === "Bedroom") {
      setActiveCategoryFilter("Bedroom");
    } else if (category.name === "Mattress") {
      setActiveCategoryFilter("Mattress");
    } else if (category.name === "Dining") {
      setActiveCategoryFilter("Dining");
    }
    onClose();
    // Scroll smoothly to category section
    const el = document.getElementById("category-grid-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        background: "#ffffff",
        borderTop: "1px solid #eaeaea",
        boxShadow: "0 18px 45px rgba(0, 0, 0, 0.12)",
        zIndex: 999,
        padding: "28px 0 34px 0",
        animation: "fadeIn 0.22s ease-out"
      }}
      onMouseLeave={onClose}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${category.columns.length}, minmax(140px, 1fr)) 310px`,
          gap: "28px",
          alignItems: "start"
        }}
      >
        {/* Navigation Link Columns */}
        {category.columns.map((col, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              flexDirection: "column",
              borderRight: idx < category.columns.length - 1 ? "1px solid #f2f2f2" : "none",
              paddingRight: "16px"
            }}
          >
            <h4
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#1f1f1f",
                marginBottom: "14px",
                textTransform: "capitalize",
                letterSpacing: "0.2px"
              }}
            >
              {col.heading}
            </h4>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {col.items.map((item, itemIdx) => (
                <li key={itemIdx} style={{ marginBottom: "8px" }}>
                  <button
                    onClick={() => handleLinkClick(item)}
                    style={{
                      fontSize: "12.8px",
                      color: "#525252",
                      textAlign: "left",
                      display: "block",
                      width: "100%",
                      padding: "2px 0",
                      transition: "color 0.15s ease, transform 0.15s ease",
                      lineHeight: "1.35"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#e26a2c";
                      e.currentTarget.style.transform = "translateX(3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#525252";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Right Promotional Visual Card matching Screenshot 2 & 3 */}
        {category.promo && (
          <div
            onClick={() => handleLinkClick("Promo")}
            style={{
              background: "#faf7f4",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid #ede4db",
              cursor: "pointer",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              position: "relative"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ position: "relative", height: "185px", width: "100%" }}>
              <img
                src={category.promo.image}
                alt={category.promo.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  background: "#e26a2c",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 800,
                  padding: "4px 10px",
                  borderRadius: "4px",
                  letterSpacing: "0.5px"
                }}
              >
                {category.promo.badge}
              </div>
            </div>

            <div style={{ padding: "16px" }}>
              <h5
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#2a1b12",
                  marginBottom: "4px",
                  lineHeight: "1.3"
                }}
              >
                {category.promo.title}
              </h5>
              <p style={{ fontSize: "12px", color: "#666666", marginBottom: "12px" }}>
                {category.promo.subtitle}
              </p>

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#e26a2c"
                }}
              >
                {category.promo.cta} <ArrowRight size={14} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
