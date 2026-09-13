"use client";

import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { STORE_INFO } from "@/data/furnitureData";

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: "#1c1c1c",
        color: "#d0d0d0",
        paddingTop: "68px",
        paddingBottom: "36px",
        borderTop: "3px solid #e26a2c"
      }}
    >
      <div className="container">
        {/* Main Footer Links Columns - Generous Breathable Spacing */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 1fr 1.2fr",
            gap: "50px",
            marginBottom: "56px"
          }}
          className="footer-grid-responsive"
        >
          {/* Brand Info & Kushalnagar Address */}
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "8px" }}>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#ffffff"
                }}
              >
                Jayalakshmi
              </span>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 400,
                  color: "#e26a2c"
                }}
              >
                Furniture
              </span>
            </div>
            <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#999999", textTransform: "uppercase", fontWeight: 500, marginBottom: "16px" }}>
              Kushalnagar, Kodagu (Coorg)
            </div>

            <p style={{ fontSize: "13px", lineHeight: "1.65", color: "#a5a5a5", marginBottom: "24px" }}>
              Serving Kodagu with seasoned Indian Teak, Sheesham, and Rosewood living collections for over 25 years.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "13px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin size={16} color="#e26a2c" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>{STORE_INFO.address}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Phone size={16} color="#e26a2c" style={{ flexShrink: 0 }} />
                <span>{STORE_INFO.phone}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Clock size={16} color="#e26a2c" style={{ flexShrink: 0 }} />
                <span>Everyday: 9:30 AM - 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h4
              style={{
                fontSize: "13.5px",
                fontWeight: 600,
                color: "#ffffff",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "20px"
              }}
            >
              Categories
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
              {["Solid Teak Sofas", "King & Queen Beds", "Orthopedic Mattresses", "Sheesham Dining Sets", "TV & Display Units", "Solid Wood Wardrobes", "Coffee & Nesting Tables"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#category-grid-section"
                    style={{ fontSize: "13px", color: "#a5a5a5", transition: "color 0.15s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#e26a2c")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#a5a5a5")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Assistance */}
          <div>
            <h4
              style={{
                fontSize: "13.5px",
                fontWeight: 600,
                color: "#ffffff",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "20px"
              }}
            >
              Customer Care
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
              {[
                "10-Year Craftsmanship Warranty",
                "Free Delivery & Setup in Coorg",
                "Custom Woodwork Consultation",
                "Track Showroom Order",
                "Bulk & Homestay Furnishing",
                "Terms & Privacy Policy"
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#kushalnagar-showroom"
                    style={{ fontSize: "13px", color: "#a5a5a5", transition: "color 0.15s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#e26a2c")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#a5a5a5")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4
              style={{
                fontSize: "13.5px",
                fontWeight: 600,
                color: "#ffffff",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "20px"
              }}
            >
              Coorg Delivery Network
            </h4>
            <p style={{ fontSize: "13px", color: "#a5a5a5", marginBottom: "18px", lineHeight: "1.5" }}>
              Free direct factory delivery to homes, resorts, and estates across Kodagu & Mysore district.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "24px" }}>
              {["Kushalnagar", "Madikeri", "Somwarpet", "Virajpet", "Gonikoppal", "Mysore", "Hunsur", "Periyapatna"].map((town) => (
                <span
                  key={town}
                  style={{
                    background: "rgba(255, 255, 255, 0.07)",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    fontSize: "11.5px",
                    color: "#d0d0d0"
                  }}
                >
                  {town}
                </span>
              ))}
            </div>

            {/* Helpline box */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "14px 18px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}
            >
              <Phone size={18} color="#e26a2c" />
              <div>
                <div style={{ fontSize: "10.5px", color: "#888", textTransform: "uppercase", fontWeight: 500 }}>
                  Showroom Assistance
                </div>
                <div style={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>
                  +91 94822 56789
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            fontSize: "12px",
            color: "#777777"
          }}
        >
          <div>
            © {new Date().getFullYear()} Jayalakshmi Furniture Store, Kushalnagar. All rights reserved.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span>Solid Wood Living</span>
            <span>•</span>
            <span>Kushalnagar Flagship</span>
            <span>•</span>
            <span>UPI & Card Accepted</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .footer-grid-responsive {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 580px) {
          .footer-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </footer>
  );
};
