"use client";

import React from "react";
import { ShieldCheck, Truck, Hammer, Award } from "lucide-react";

export const FeaturesBanner: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck size={24} color="#e26a2c" />,
      title: "10-Year Wood Warranty",
      desc: "Termite-treated, seasoned grade-A natural hardwood"
    },
    {
      icon: <Truck size={24} color="#e26a2c" />,
      title: "Free Coorg Delivery",
      desc: "Doorstep delivery & white-glove setup in Kushalnagar"
    },
    {
      icon: <Hammer size={24} color="#e26a2c" />,
      title: "Custom Carpentry",
      desc: "Tailored to your room dimensions and preferred finish"
    },
    {
      icon: <Award size={24} color="#e26a2c" />,
      title: "Direct Workshop Prices",
      desc: "Pure hardwood furniture directly from our artisans"
    }
  ];

  return (
    <section style={{ padding: "48px 0", background: "#ffffff", borderTop: "1px solid #f0f0f0", borderBottom: "1px solid #f0f0f0" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "28px"
          }}
          className="features-grid-responsive"
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                padding: "20px",
                borderRadius: "8px",
                background: "#fafafa",
                border: "1px solid #eeeeee"
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "8px",
                  background: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  border: "1px solid #eaeaea"
                }}
              >
                {f.icon}
              </div>
              <div>
                <h4 style={{ fontSize: "14px", fontWeight: 500, color: "#1f1f1f", marginBottom: "4px" }}>
                  {f.title}
                </h4>
                <p style={{ fontSize: "12.5px", color: "#666666", lineHeight: "1.4" }}>
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .features-grid-responsive {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          .features-grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
