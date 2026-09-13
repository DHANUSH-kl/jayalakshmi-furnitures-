"use client";

import React from "react";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { STORE_INFO } from "@/data/furnitureData";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateCartQuantity,
    totalCartPrice,
    totalCartCount
  } = useStore();

  if (!isCartOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 5000,
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        backdropFilter: "blur(3px)",
        animation: "fadeIn 0.2s ease"
      }}
      onClick={() => setIsCartOpen(false)}
    >
      <div
        className="cart-drawer-container"
        style={{
          width: "100%",
          maxWidth: "440px",
          height: "100%",
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          boxShadow: "-8px 0 30px rgba(0, 0, 0, 0.18)",
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: "18px 22px",
            borderBottom: "1px solid #eeeeee",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#fafafa"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ShoppingBag size={18} color="#e26a2c" />
            <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#1f1f1f" }}>
              Your Furniture Cart ({totalCartCount})
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{
              color: "#555",
              padding: "4px",
              display: "flex",
              alignItems: "center"
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Delivery Bar */}
        <div
          style={{
            background: "#f0f8f0",
            color: "#1e7e34",
            padding: "8px 22px",
            fontSize: "12px",
            fontWeight: 500,
            display: "flex",
            alignItems: "center",
            gap: "6px"
          }}
        >
          <ShieldCheck size={15} /> Free Delivery & Setup in Kushalnagar & Coorg
        </div>

        {/* Items List */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "18px 22px"
          }}
        >
          {cart.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "60px 20px",
                color: "#888"
              }}
            >
              <ShoppingBag size={44} strokeWidth={1} style={{ margin: "0 auto 16px", color: "#ccc" }} />
              <h4 style={{ fontSize: "15px", fontWeight: 500, color: "#333", marginBottom: "6px" }}>
                Your cart is empty
              </h4>
              <p style={{ fontSize: "13px", color: "#777", marginBottom: "20px" }}>
                Explore pure solid wood living collections from Kushalnagar.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                style={{
                  background: "#e26a2c",
                  color: "#fff",
                  fontSize: "13px",
                  padding: "10px 22px",
                  borderRadius: "6px"
                }}
              >
                Browse Furniture
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  style={{
                    display: "flex",
                    gap: "12px",
                    paddingBottom: "16px",
                    borderBottom: "1px solid #f0f0f0"
                  }}
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    style={{
                      width: "74px",
                      height: "74px",
                      objectFit: "cover",
                      borderRadius: "6px",
                      backgroundColor: "#f5f5f5"
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <h4 style={{ fontSize: "13px", fontWeight: 500, color: "#222", lineHeight: "1.35" }}>
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        style={{ color: "#999", marginLeft: "8px", padding: "2px" }}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div style={{ fontSize: "11px", color: "#777", margin: "3px 0 8px 0" }}>
                      {item.product.material}
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "14.5px", fontWeight: 700, color: "#111" }}>
                        ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                      </span>

                      {/* Quantity Controls */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          border: "1px solid #d5d5d5",
                          borderRadius: "4px"
                        }}
                      >
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                          style={{ padding: "4px 7px", color: "#444" }}
                        >
                          <Minus size={11} />
                        </button>
                        <span style={{ fontSize: "12px", fontWeight: 500, padding: "0 6px" }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                          style={{ padding: "4px 7px", color: "#444" }}
                        >
                          <Plus size={11} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {cart.length > 0 && (
          <div
            style={{
              padding: "18px 22px",
              borderTop: "1px solid #eeeeee",
              background: "#fafafa"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span style={{ fontSize: "13px", color: "#666" }}>Subtotal</span>
              <span style={{ fontSize: "14.5px", fontWeight: 500, color: "#222" }}>
                ₹{totalCartPrice.toLocaleString("en-IN")}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
              <span style={{ fontSize: "13px", color: "#666" }}>Delivery in Kushalnagar</span>
              <span style={{ fontSize: "13px", fontWeight: 500, color: "#1e7e34" }}>FREE</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "16px",
                paddingTop: "8px",
                borderTop: "1px dashed #d5d5d5"
              }}
            >
              <span style={{ fontSize: "14.5px", fontWeight: 600, color: "#1f1f1f" }}>Total Amount</span>
              <span style={{ fontSize: "18px", fontWeight: 700, color: "#e26a2c" }}>
                ₹{totalCartPrice.toLocaleString("en-IN")}
              </span>
            </div>

            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Jayalakshmi%20Furniture%20Kushalnagar,%20I%20would%20like%20to%20place%20an%20order%20for%20${encodeURIComponent(
                cart.map((c) => `${c.quantity}x ${c.product.name}`).join(", ")
              )}%20(Total:%20₹${totalCartPrice})`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "100%",
                background: "#e26a2c",
                color: "#ffffff",
                padding: "12px",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                textDecoration: "none"
              }}
            >
              Order via WhatsApp / Call (+91 81059 22089) <ArrowRight size={15} />
            </a>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 576px) {
          .cart-drawer-container {
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};
