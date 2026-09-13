"use client";

import React from "react";
import { X, Heart, ShoppingBag, ShieldCheck, Truck } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isWishlisted } = useStore();

  if (!quickViewProduct) return null;

  const isFav = isWishlisted(quickViewProduct.id);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 6000,
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        animation: "fadeIn 0.2s ease"
      }}
      onClick={() => setQuickViewProduct(null)}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "840px",
          background: "#ffffff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1.1fr 1.2fr"
        }}
        className="quickview-grid"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "#f4f4f4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#444",
            zIndex: 10
          }}
        >
          <X size={18} />
        </button>

        {/* Product Image Column */}
        <div style={{ position: "relative", backgroundColor: "#f8f8f8", minHeight: "380px" }}>
          <img
            src={quickViewProduct.image}
            alt={quickViewProduct.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          {quickViewProduct.tag && (
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                background: "#e26a2c",
                color: "#fff",
                fontSize: "10px",
                fontWeight: 500,
                padding: "3px 8px",
                borderRadius: "3px"
              }}
            >
              {quickViewProduct.tag}
            </div>
          )}
        </div>

        {/* Product Details Column */}
        <div style={{ padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <span style={{ fontSize: "11.5px", fontWeight: 500, color: "#e26a2c", textTransform: "uppercase", letterSpacing: "1px" }}>
                {quickViewProduct.category}
              </span>
              <span style={{ color: "#ddd" }}>•</span>
              <span style={{ fontSize: "12px", color: "#1f7d2f", fontWeight: 500 }}>
                {quickViewProduct.rating} ★ ({quickViewProduct.reviewCount} reviews)
              </span>
            </div>

            <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#1f1f1f", lineHeight: "1.35", marginBottom: "16px" }}>
              {quickViewProduct.name}
            </h2>

            {/* Price Box */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "20px" }}>
              <span style={{ fontSize: "24px", fontWeight: 700, color: "#111" }}>
                ₹{quickViewProduct.price.toLocaleString("en-IN")}
              </span>
              <span style={{ fontSize: "15px", color: "#888", textDecoration: "line-through" }}>
                ₹{quickViewProduct.originalPrice.toLocaleString("en-IN")}
              </span>
              <span style={{ fontSize: "13px", fontWeight: 500, color: "#1f7d2f" }}>
                {quickViewProduct.discountPercentage}% off
              </span>
            </div>

            {/* Specifications */}
            <div style={{ background: "#f9f9f9", padding: "16px", borderRadius: "8px", marginBottom: "24px", border: "1px solid #eeeeee" }}>
              <div style={{ fontSize: "13px", color: "#444", marginBottom: "6px" }}>
                <strong style={{ fontWeight: 500 }}>Material:</strong> {quickViewProduct.material}
              </div>
              <div style={{ fontSize: "13px", color: "#444", marginBottom: "6px" }}>
                <strong style={{ fontWeight: 500 }}>Finish:</strong> {quickViewProduct.finish}
              </div>
              {quickViewProduct.dimensions && (
                <div style={{ fontSize: "13px", color: "#444" }}>
                  <strong style={{ fontWeight: 500 }}>Dimensions:</strong> {quickViewProduct.dimensions}
                </div>
              )}
            </div>

            {/* Delivery highlights */}
            <div style={{ display: "flex", gap: "20px", marginBottom: "28px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#666" }}>
                <Truck size={15} color="#e26a2c" /> Free Kushalnagar Delivery
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#666" }}>
                <ShieldCheck size={15} color="#e26a2c" /> 10-Yr Wood Warranty
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={() => {
                addToCart(quickViewProduct, 1);
                setQuickViewProduct(null);
              }}
              style={{
                flex: 1,
                background: "#e26a2c",
                color: "#fff",
                padding: "12px 20px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                transition: "background 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#cb591e")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#e26a2c")}
            >
              <ShoppingBag size={16} /> Add to Cart
            </button>

            <button
              onClick={() => toggleWishlist(quickViewProduct.id)}
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "6px",
                border: "1.5px solid #dcdcdc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: isFav ? "#e26a2c" : "#555"
              }}
            >
              <Heart size={18} fill={isFav ? "#e26a2c" : "transparent"} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .quickview-grid {
            grid-template-columns: 1fr !important;
            max-height: 90vh;
            overflow-y: auto;
          }
        }
      `}</style>
    </div>
  );
};
