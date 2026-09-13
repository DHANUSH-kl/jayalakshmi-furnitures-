"use client";

import React, { useRef, useEffect } from "react";
import { MapPin, Phone, MessageSquare, Clock, Truck } from "lucide-react";
import { STORE_INFO } from "@/data/furnitureData";

export const KushalnagarShowroom: React.FC = () => {
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
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".showroom-anim");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="kushalnagar-showroom"
      ref={sectionRef}
      style={{
        padding: "80px 0",
        background: "#ffffff",
        color: "#333333",
        borderTop: "1px solid #eeeeee"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 1fr",
            gap: "60px",
            alignItems: "center"
          }}
          className="showroom-grid"
        >
          {/* Left Column: Information & Details */}
          <div className="showroom-anim reveal-on-scroll">
            <div
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#e26a2c",
                marginBottom: "12px"
              }}
            >
              Experience Center
            </div>

            <h2
              style={{
                fontSize: "32px",
                lineHeight: "1.25",
                fontWeight: 700,
                color: "#1f1f1f",
                marginBottom: "16px"
              }}
            >
              Visit Jayalakshmi Furniture Store in Kushalnagar
            </h2>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                color: "#666666",
                marginBottom: "36px",
                fontWeight: 400
              }}
            >
              Discover Kodagu&apos;s largest collection of pure teak, rosewood, and sheesham furniture. Located on BM Road, our showroom lets you experience the solid wood craftsmanship in person, test orthopedic mattresses, and speak directly with our experienced consultants.
            </p>

            {/* Key Store Facts */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "40px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "#fff5f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#e26a2c",
                    flexShrink: 0
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 500, color: "#1f1f1f", marginBottom: "3px" }}>
                    Showroom Address
                  </h4>
                  <p style={{ fontSize: "13px", color: "#666666", lineHeight: "1.5" }}>
                    {STORE_INFO.address}
                    <br />
                    <span style={{ color: "#888888" }}>Landmark: {STORE_INFO.landmark}</span>
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "#f4f4f4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#444444",
                    flexShrink: 0
                  }}
                >
                  <Clock size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 500, color: "#1f1f1f", marginBottom: "3px" }}>
                    Store Timings
                  </h4>
                  <p style={{ fontSize: "13px", color: "#666666" }}>
                    {STORE_INFO.timing}
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "8px",
                    background: "#f0f8f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#2e7d32",
                    flexShrink: 0
                  }}
                >
                  <Truck size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: "14px", fontWeight: 500, color: "#1f1f1f", marginBottom: "3px" }}>
                    Coorg & Neighboring Express Delivery
                  </h4>
                  <p style={{ fontSize: "13px", color: "#666666" }}>
                    Free delivery to Kushalnagar, Madikeri, Somwarpet, Virajpet, Mysore & Hunsur.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact CTAs */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Jayalakshmi%20Furniture%20Kushalnagar,%20I%20would%20like%20to%20inquire%20about%20your%20collection`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "#25D366",
                  color: "#ffffff",
                  fontSize: "13.5px",
                  fontWeight: 500,
                  padding: "12px 24px",
                  borderRadius: "6px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "opacity 0.2s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <MessageSquare size={16} /> WhatsApp Showroom
              </a>

              <a
                href="tel:+919482256789"
                style={{
                  border: "1.5px solid #d4d4d4",
                  color: "#333333",
                  fontSize: "13.5px",
                  fontWeight: 500,
                  padding: "12px 24px",
                  borderRadius: "6px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "border-color 0.2s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#999999")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#d4d4d4")}
              >
                <Phone size={15} /> +91 94822 56789
              </a>
            </div>
          </div>

          {/* Right Column: Clean Architectural Photo */}
          <div
            className="showroom-anim reveal-on-scroll"
            style={{
              position: "relative",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              border: "1px solid #ebebeb"
            }}
          >
            <div style={{ position: "relative", height: "440px", width: "100%" }}>
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&auto=format&fit=crop&q=80"
                alt="Jayalakshmi Furniture Store Kushalnagar Showroom"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .showroom-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};
