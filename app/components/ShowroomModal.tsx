"use client";

import React from "react";
import { X, MapPin, Phone, Clock, MessageSquare, ExternalLink } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { STORE_INFO } from "@/data/furnitureData";

export const ShowroomModal: React.FC = () => {
  const { isShowroomModalOpen, setIsShowroomModalOpen } = useStore();

  if (!isShowroomModalOpen) return null;

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
        padding: "20px",
        animation: "fadeIn 0.2s ease"
      }}
      onClick={() => setIsShowroomModalOpen(false)}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "640px",
          background: "#ffffff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Clean white/neutral */}
        <div
          style={{
            padding: "24px 28px",
            background: "#ffffff",
            borderBottom: "1px solid #eeeeee",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <div>
            <div style={{ fontSize: "11px", color: "#e26a2c", letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 500 }}>
              Flagship Showroom
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#1f1f1f", marginTop: "4px" }}>
              Jayalakshmi Furniture Store - Kushalnagar
            </h3>
          </div>
          <button
            onClick={() => setIsShowroomModalOpen(false)}
            style={{
              color: "#555555",
              padding: "6px",
              display: "flex",
              alignItems: "center"
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "28px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "28px" }}>
            <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <MapPin size={20} color="#e26a2c" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong style={{ fontSize: "14px", color: "#222" }}>Address & Landmark</strong>
                <p style={{ fontSize: "13px", color: "#666", marginTop: "3px", lineHeight: "1.45" }}>
                  {STORE_INFO.address}
                  <br />
                  <span style={{ color: "#888" }}>Landmark: {STORE_INFO.landmark}</span>
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <Clock size={20} color="#e26a2c" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong style={{ fontSize: "14px", color: "#222" }}>Operating Hours</strong>
                <p style={{ fontSize: "13px", color: "#666", marginTop: "3px" }}>
                  {STORE_INFO.timing}
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <Phone size={20} color="#e26a2c" style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <strong style={{ fontSize: "14px", color: "#222" }}>Helpline Numbers</strong>
                <p style={{ fontSize: "13px", color: "#666", marginTop: "3px" }}>
                  {STORE_INFO.phone} / {STORE_INFO.alternatePhone}
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Region Pills */}
          <div style={{ background: "#f8f8f8", padding: "18px", borderRadius: "8px", marginBottom: "28px", border: "1px solid #eeeeee" }}>
            <div style={{ fontSize: "12px", fontWeight: 600, color: "#333", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
              Areas Covered With Free Direct Delivery:
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {STORE_INFO.deliveryAreas.map((area) => (
                <span
                  key={area}
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e0e0e0",
                    padding: "4px 10px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    color: "#444"
                  }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: "14px" }}>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Jayalakshmi%20Furniture%20Kushalnagar,%20I%20am%20planning%20to%20visit`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                background: "#25D366",
                color: "#ffffff",
                padding: "12px",
                borderRadius: "6px",
                fontSize: "13.5px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}
            >
              <MessageSquare size={16} /> WhatsApp Showroom
            </a>

            <a
              href="https://maps.google.com/?q=Kushalnagar+Kodagu"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                background: "#1f1f1f",
                color: "#ffffff",
                padding: "12px",
                borderRadius: "6px",
                fontSize: "13.5px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}
            >
              <MapPin size={16} /> View on Google Maps <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
