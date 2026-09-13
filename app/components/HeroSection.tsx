"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HERO_SLIDES, HERO_RIGHT_CARDS } from "@/data/furnitureData";
import { useStore } from "@/context/StoreContext";

interface HeroSectionProps {
  isLoaded: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isLoaded }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { setActiveCategoryFilter } = useStore();

  useEffect(() => {
    if (!isLoaded) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isLoaded]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];

  const handleHeroCta = () => {
    const el = document.getElementById("category-grid-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      style={{
        padding: "24px 0 40px 0",
        background: "#ffffff",
        overflow: "hidden"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.54fr 1fr",
            gap: "24px",
            alignItems: "stretch",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
          className="hero-grid-container"
        >
          {/* LEFT LARGE CAROUSEL HERO (Matching Screenshot 1) */}
          <div
            className="hero-left-banner"
            style={{
              position: "relative",
              borderRadius: "14px",
              overflow: "hidden",
              minHeight: "480px",
              boxShadow: "0 6px 24px rgba(0,0,0,0.05)",
              backgroundColor: "#f7f4f0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end"
            }}
          >
            {/* Background Image */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "background-image 0.6s ease",
                transform: "scale(1.01)"
              }}
            />

            {/* Gradient Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.45) 100%)"
              }}
            />

            {/* Typography Overlay Matching Screenshot 1 */}
            <div
              className="hero-text-overlay"
              style={{
                position: "absolute",
                top: "40px",
                right: "44px",
                textAlign: "right",
                zIndex: 2,
                maxWidth: "340px"
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  letterSpacing: "4px",
                  fontWeight: 500,
                  color: "#4a3b32",
                  textTransform: "uppercase"
                }}
              >
                THE
              </div>
              <div
                className="hero-title-main"
                style={{
                  fontSize: "44px",
                  fontWeight: 700,
                  lineHeight: "1",
                  letterSpacing: "2px",
                  color: "#251d18"
                }}
              >
                FESTIVE
              </div>
              <div
                className="hero-title-italic"
                style={{
                  fontSize: "36px",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "#6e4b34",
                  lineHeight: "1.05",
                  marginBottom: "12px"
                }}
              >
                Refresh
              </div>

              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#2c211b",
                  marginBottom: "12px"
                }}
              >
                {slide.title}
              </div>

              {/* Dark Brown Pill Tag matching reference screenshot */}
              <button
                onClick={handleHeroCta}
                style={{
                  background: "#2a1b12",
                  color: "#ffffff",
                  fontSize: "15px",
                  fontWeight: 500,
                  padding: "10px 22px",
                  borderRadius: "6px",
                  display: "inline-flex",
                  alignItems: "center",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#e26a2c";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#2a1b12";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span>{slide.priceTag}</span>
              </button>
            </div>

            {/* Terms text */}
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                right: "24px",
                fontSize: "10.5px",
                color: "rgba(255, 255, 255, 0.8)",
                fontWeight: 400,
                zIndex: 2
              }}
            >
              {slide.terms}
            </div>

            {/* Slider Navigation Chevrons */}
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              style={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                color: "#222222",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
                zIndex: 3,
                transition: "all 0.2s ease"
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next slide"
              style={{
                position: "absolute",
                right: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                color: "#222222",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 10px rgba(0,0,0,0.12)",
                zIndex: 3,
                transition: "all 0.2s ease"
              }}
            >
              <ChevronRight size={20} />
            </button>

            {/* Pagination Dots */}
            <div
              style={{
                position: "absolute",
                bottom: "18px",
                left: "24px",
                display: "flex",
                gap: "8px",
                zIndex: 3
              }}
            >
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  style={{
                    width: idx === currentSlide ? "22px" : "7px",
                    height: "7px",
                    borderRadius: "4px",
                    backgroundColor: idx === currentSlide ? "#e26a2c" : "rgba(255, 255, 255, 0.6)",
                    transition: "all 0.3s ease"
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT STACKED PROMO CARDS */}
          <div
            className="hero-right-stack"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "22px"
            }}
          >
            {/* TOP CARD: "Sink Into Comfort - Mattresses Starting From ₹14,999*" */}
            <div
              onClick={() => setActiveCategoryFilter("Mattress")}
              style={{
                flex: "1",
                borderRadius: "14px",
                overflow: "hidden",
                position: "relative",
                backgroundColor: "#f5f5f5",
                cursor: "pointer",
                boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
                display: "flex",
                minHeight: "225px"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${HERO_RIGHT_CARDS.top.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center 30%"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(90deg, rgba(250,250,250,0.95) 0%, rgba(250,250,250,0.72) 48%, rgba(250,250,250,0) 80%)"
                }}
              />

              {/* Brand Stamp */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "20px",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#1c607a",
                  letterSpacing: "0.5px"
                }}
              >
                <span>{HERO_RIGHT_CARDS.top.brand}</span>
              </div>

              {/* Text content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "24px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  maxWidth: "280px"
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#1f1f1f",
                      marginBottom: "4px",
                      lineHeight: "1.2"
                    }}
                  >
                    {HERO_RIGHT_CARDS.top.title}
                  </h3>
                  <p style={{ fontSize: "12px", color: "#666666", marginBottom: "14px", lineHeight: "1.3" }}>
                    {HERO_RIGHT_CARDS.top.subtitle}
                  </p>

                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#333333", marginBottom: "2px" }}>
                    {HERO_RIGHT_CARDS.top.category}
                  </div>
                  <div style={{ fontSize: "11px", color: "#666666" }}>
                    {HERO_RIGHT_CARDS.top.priceText}
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#1f1f1f",
                      marginTop: "2px"
                    }}
                  >
                    {HERO_RIGHT_CARDS.top.price}
                  </div>
                </div>

                <span style={{ fontSize: "9.5px", color: "#888888", marginTop: "8px" }}>
                  {HERO_RIGHT_CARDS.top.terms}
                </span>
              </div>
            </div>

            {/* BOTTOM CARD: "MASSIVE PRICE DROP - Calmora Bed NOW AT ₹18,999" */}
            <div
              onClick={() => setActiveCategoryFilter("Bedroom")}
              style={{
                flex: "1",
                borderRadius: "14px",
                overflow: "hidden",
                position: "relative",
                backgroundColor: "#f5ece3",
                cursor: "pointer",
                boxShadow: "0 4px 18px rgba(0,0,0,0.04)",
                display: "flex",
                minHeight: "225px"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${HERO_RIGHT_CARDS.bottom.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center 70%"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(90deg, rgba(248,243,238,0.96) 0%, rgba(248,243,238,0.72) 48%, rgba(248,243,238,0) 80%)"
                }}
              />

              {/* Text content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "24px 24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  maxWidth: "280px"
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "1.1",
                      letterSpacing: "0.5px",
                      color: "#6b472e"
                    }}
                  >
                    MASSIVE
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "1.1",
                      letterSpacing: "0.5px",
                      color: "#6b472e",
                      marginBottom: "4px"
                    }}
                  >
                    PRICE DROP
                  </div>

                  <div
                    style={{
                      fontStyle: "italic",
                      fontSize: "12px",
                      color: "#8c5f3e",
                      marginBottom: "14px"
                    }}
                  >
                    {HERO_RIGHT_CARDS.bottom.subtag}
                  </div>

                  <div style={{ fontSize: "12px", color: "#666", marginBottom: "4px" }}>
                    {HERO_RIGHT_CARDS.bottom.productName}
                  </div>

                  {/* Dark Pill Badge */}
                  <div
                    style={{
                      background: "#2a1b12",
                      color: "#ffffff",
                      borderRadius: "6px",
                      padding: "6px 14px",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "2px"
                    }}
                  >
                    <span style={{ fontSize: "10.5px", opacity: 0.8, textTransform: "uppercase" }}>NOW AT</span>
                    <span style={{ fontSize: "16px", fontWeight: 700 }}>{HERO_RIGHT_CARDS.bottom.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .hero-grid-container {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .hero-left-banner {
            min-height: 400px !important;
          }
          .hero-right-stack {
            flex-direction: row !important;
          }
        }

        @media (max-width: 680px) {
          .hero-right-stack {
            flex-direction: column !important;
          }
          .hero-left-banner {
            min-height: 350px !important;
          }
          .hero-text-overlay {
            top: 24px !important;
            right: 20px !important;
            max-width: 260px !important;
          }
          .hero-title-main {
            font-size: 32px !important;
          }
          .hero-title-italic {
            font-size: 26px !important;
          }
        }
      `}</style>
    </section>
  );
};
