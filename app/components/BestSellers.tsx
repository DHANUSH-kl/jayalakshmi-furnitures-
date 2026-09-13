"use client";

import React, { useRef, useEffect } from "react";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { FEATURED_PRODUCTS } from "@/data/furnitureData";
import { useStore } from "@/context/StoreContext";

export const BestSellers: React.FC = () => {
  const { addToCart, toggleWishlist, isWishlisted, setQuickViewProduct } = useStore();
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".scroll-anim-item");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="featured-bestsellers"
      style={{
        padding: "70px 0 84px 0",
        background: "#faf9f7",
        borderTop: "1px solid #f0f0f0",
        borderBottom: "1px solid #f0f0f0"
      }}
    >
      <div className="container">
        {/* Section Heading - Clean, breathable layout */}
        <div
          ref={titleRef}
          className="scroll-anim-item reveal-on-scroll"
          style={{
            textAlign: "center",
            maxWidth: "680px",
            margin: "0 auto 48px auto"
          }}
        >
          <div
            style={{
              fontSize: "12px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#e26a2c",
              marginBottom: "8px"
            }}
          >
            Handcrafted In Kodagu
          </div>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: 700,
              color: "#1f1f1f",
              lineHeight: "1.25",
              marginBottom: "12px"
            }}
          >
            Popular Designs in Kushalnagar
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#666666",
              lineHeight: "1.6",
              fontWeight: 400
            }}
          >
            Seasoned Indian Teak, Sheesham & Rosewood furniture engineered for lifelong durability.
          </p>
        </div>

        {/* Products Grid - Spacious and breathable */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "28px"
          }}
          className="bestsellers-grid"
        >
          {FEATURED_PRODUCTS.map((product, idx) => {
            const isFav = isWishlisted(product.id);

            return (
              <div
                key={product.id}
                className="scroll-anim-item reveal-on-scroll"
                style={{
                  background: "#ffffff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 2px 14px rgba(0,0,0,0.04)",
                  border: "1px solid #ececec",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  transitionDelay: `${idx * 40}ms`,
                  position: "relative"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 10px 26px rgba(0, 0, 0, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 14px rgba(0,0,0,0.04)";
                }}
              >
                {/* Image Container with Actions */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "230px",
                    backgroundColor: "#f7f7f7",
                    overflow: "hidden"
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />

                  {/* Clean Text Badge */}
                  {product.tag && (
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        background: product.tag.includes("DROP") ? "#e26a2c" : "#1f1f1f",
                        color: "#ffffff",
                        fontSize: "10px",
                        fontWeight: 500,
                        padding: "3px 8px",
                        borderRadius: "3px",
                        letterSpacing: "0.5px"
                      }}
                    >
                      {product.tag}
                    </div>
                  )}

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      background: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      transition: "transform 0.2s ease"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <Heart
                      size={16}
                      color={isFav ? "#e26a2c" : "#555555"}
                      fill={isFav ? "#e26a2c" : "transparent"}
                    />
                  </button>

                  {/* Quick View Button */}
                  <button
                    onClick={() => setQuickViewProduct(product)}
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "12px",
                      background: "#ffffff",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "#333",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                    }}
                  >
                    <Eye size={13} /> Quick View
                  </button>
                </div>

                {/* Content with Generous Padding */}
                <div
                  style={{
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    {/* Clean Rating Text without AI-style star icons */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                      <span
                        style={{
                          fontSize: "11.5px",
                          fontWeight: 500,
                          color: "#1f7d2f",
                          background: "#edf7ed",
                          padding: "2px 6px",
                          borderRadius: "3px"
                        }}
                      >
                        {product.rating} ★
                      </span>
                      <span style={{ fontSize: "11.5px", color: "#888888" }}>
                        {product.reviewCount} reviews
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => setQuickViewProduct(product)}
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#222222",
                        lineHeight: "1.4",
                        marginBottom: "6px",
                        cursor: "pointer",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#e26a2c")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#222222")}
                    >
                      {product.name}
                    </h3>

                    {/* Material specification */}
                    <div style={{ fontSize: "12px", color: "#777777", marginBottom: "16px" }}>
                      {product.material}
                    </div>
                  </div>

                  {/* Price & Add to Cart */}
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "14px" }}>
                      <span style={{ fontSize: "17px", fontWeight: 700, color: "#1f1f1f" }}>
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                      <span style={{ fontSize: "12.5px", color: "#999999", textDecoration: "line-through" }}>
                        ₹{product.originalPrice.toLocaleString("en-IN")}
                      </span>
                      <span style={{ fontSize: "12px", color: "#1f7d2f", fontWeight: 500 }}>
                        {product.discountPercentage}% off
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(product, 1)}
                      style={{
                        width: "100%",
                        background: "#e26a2c",
                        color: "#ffffff",
                        padding: "10px",
                        borderRadius: "6px",
                        fontSize: "13px",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        transition: "background 0.2s ease"
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#cb591e")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#e26a2c")}
                    >
                      <ShoppingBag size={14} /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1100px) {
          .bestsellers-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .bestsellers-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }
        @media (max-width: 480px) {
          .bestsellers-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
