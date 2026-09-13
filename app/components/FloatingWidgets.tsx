"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useStore } from "@/context/StoreContext";

export const FloatingWidgets: React.FC = () => {
  const { toastMessage } = useStore();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Clean Toast Notification */}
      {toastMessage && (
        <div className="toast-banner">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Clean Minimalist Scroll-to-Top Button Only */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            position: "fixed",
            bottom: "28px",
            right: "24px",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            border: "1px solid #e0e0e0",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#333333",
            cursor: "pointer",
            transition: "all 0.25s ease",
            zIndex: 4000
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#fafafa";
            e.currentTarget.style.borderColor = "#c5c5c5";
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#ffffff";
            e.currentTarget.style.borderColor = "#e0e0e0";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 14px rgba(0, 0, 0, 0.08)";
          }}
        >
          <ArrowUp size={18} strokeWidth={2} />
        </button>
      )}
    </>
  );
};
