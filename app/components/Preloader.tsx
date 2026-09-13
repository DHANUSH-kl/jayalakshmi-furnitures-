"use client";

import React, { useEffect, useState } from "react";

interface PreloaderProps {
  onLoaded: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsClosing(true);
            setTimeout(() => {
              setIsHidden(true);
              onLoaded();
            }, 600);
          }, 250);
          return 100;
        }
        const diff = Math.floor(Math.random() * 18) + 8;
        return Math.min(prev + diff, 100);
      });
    }, 90);

    return () => clearInterval(timer);
  }, [onLoaded]);

  if (isHidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: isClosing ? 0 : 1,
        transform: isClosing ? "scale(0.99)" : "scale(1)",
        pointerEvents: isClosing ? "none" : "auto",
        fontFamily: "'Roboto', sans-serif"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "360px",
          width: "100%",
          padding: "0 24px"
        }}
      >
        {/* Minimalist Wordmark */}
        <div
          style={{
            fontSize: "20px",
            fontWeight: 500,
            letterSpacing: "4px",
            color: "#1f1f1f",
            textTransform: "uppercase",
            marginBottom: "8px",
            textAlign: "center"
          }}
        >
          Jayalakshmi Furniture
        </div>

        <div
          style={{
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "3px",
            color: "#888888",
            textTransform: "uppercase",
            marginBottom: "36px"
          }}
        >
          Kushalnagar
        </div>

        {/* Minimal Hairline Progress Bar */}
        <div
          style={{
            width: "100%",
            maxWidth: "220px",
            height: "1.5px",
            backgroundColor: "#eaeaea",
            borderRadius: "1px",
            overflow: "hidden",
            position: "relative",
            marginBottom: "16px"
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              backgroundColor: "#e26a2c",
              transition: "width 0.12s ease-out"
            }}
          />
        </div>

        {/* Minimal Percentage Counter */}
        <div
          style={{
            fontSize: "12px",
            fontWeight: 400,
            color: "#999999",
            letterSpacing: "1px"
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};
