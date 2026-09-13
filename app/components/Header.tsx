"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  Store,
  User,
  Heart,
  ShoppingCart,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  X,
  Menu
} from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { NAV_CATEGORIES, MEGA_MENUS, FEATURED_PRODUCTS } from "@/data/furnitureData";
import { MegaMenu } from "./MegaMenu";

export const Header: React.FC = () => {
  const {
    totalCartCount,
    wishlist,
    setIsCartOpen,
    setIsShowroomModalOpen,
    searchQuery,
    setSearchQuery,
    setQuickViewProduct
  } = useStore();

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Search filter
  const filteredSearchProducts = searchQuery.trim()
    ? FEATURED_PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.material.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header style={{ width: "100%", position: "sticky", top: 0, zIndex: 1000, background: "#ffffff", boxShadow: "0 1px 0 rgba(0,0,0,0.06)" }}>
      {/* Top Announcement Bar */}
      <div
        style={{
          background: "#fafafa",
          color: "#555555",
          fontSize: "12px",
          padding: "7px 0",
          borderBottom: "1px solid #eeeeee"
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#333", fontWeight: 500 }}>
              <MapPin size={13} color="#e26a2c" /> Kushalnagar Store: BM Road, Kodagu
            </span>
            <span className="desktop-only" style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#666" }}>
              <Clock size={13} /> 9:30 AM - 9:00 PM
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <span className="desktop-only" style={{ color: "#555" }}>
              Free Direct Delivery in Kushalnagar & Coorg
            </span>
            <a
              href="tel:+918105922089"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                color: "#e26a2c",
                fontWeight: 500
              }}
            >
              <Phone size={12} /> +91 81059 22089
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div
        style={{
          padding: "16px 0",
          background: "#ffffff"
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px"
          }}
        >
          {/* Brand Logo in Roboto */}
          <Link
            href="/"
            style={{
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
              flexShrink: 0
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#1f1f1f",
                  letterSpacing: "-0.4px"
                }}
              >
                Jayalakshmi
              </span>
              <span
                style={{
                  fontSize: "24px",
                  fontWeight: 400,
                  color: "#e26a2c",
                  letterSpacing: "-0.4px"
                }}
              >
                Furniture
              </span>
            </div>
            <div
              style={{
                fontSize: "9.5px",
                fontWeight: 500,
                letterSpacing: "2.2px",
                textTransform: "uppercase",
                color: "#888888",
                marginTop: "1px"
              }}
            >
              Kushalnagar • Est. 1998
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <div
            ref={searchRef}
            className="desktop-search-bar"
            style={{
              flex: "1",
              maxWidth: "560px",
              position: "relative"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: isSearchFocused ? "1.5px solid #e26a2c" : "1.5px solid #e0e0e0",
                borderRadius: "6px",
                padding: "9px 16px",
                background: "#ffffff",
                transition: "border-color 0.2s ease"
              }}
            >
              <input
                type="text"
                placeholder="Search Products, Color & More..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                style={{
                  border: "none",
                  outline: "none",
                  width: "100%",
                  fontSize: "14px",
                  fontFamily: "'Roboto', sans-serif",
                  color: "#333333"
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  style={{
                    color: "#999",
                    marginRight: "6px",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <X size={15} />
                </button>
              )}
              <button
                style={{
                  color: "#444444",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <Search size={18} strokeWidth={1.8} />
              </button>
            </div>

            {/* Live Search Recommendations */}
            {isSearchFocused && searchQuery.trim().length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  background: "#ffffff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  borderRadius: "8px",
                  marginTop: "6px",
                  zIndex: 2000,
                  maxHeight: "360px",
                  overflowY: "auto",
                  border: "1px solid #ebebeb"
                }}
              >
                {filteredSearchProducts.length > 0 ? (
                  <div>
                    <div
                      style={{
                        padding: "10px 16px",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#888",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        borderBottom: "1px solid #f2f2f2"
                      }}
                    >
                      Available in Kushalnagar Showroom
                    </div>
                    {filteredSearchProducts.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          setQuickViewProduct(p);
                          setIsSearchFocused(false);
                        }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "10px 16px",
                          cursor: "pointer",
                          borderBottom: "1px solid #f8f8f8"
                        }}
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          style={{ width: "38px", height: "38px", objectFit: "cover", borderRadius: "4px" }}
                        />
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13px", fontWeight: 500, color: "#222" }}>
                            {p.name}
                          </div>
                          <div style={{ fontSize: "11px", color: "#777" }}>
                            {p.material} • ₹{p.price.toLocaleString("en-IN")}
                          </div>
                        </div>
                        <ChevronRight size={15} color="#bbb" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ padding: "20px", textAlign: "center", color: "#888", fontSize: "13px" }}>
                    No furniture found matching &quot;{searchQuery}&quot;.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {/* Store / Kushalnagar */}
            <button
              onClick={() => setIsShowroomModalOpen(true)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
                color: "#444444"
              }}
            >
              <Store size={20} strokeWidth={1.6} />
              <span className="desktop-only" style={{ fontSize: "11px", fontWeight: 500 }}>Stores</span>
            </button>

            {/* Profile - desktop only */}
            <button
              className="desktop-only"
              onClick={() => alert("Welcome to Jayalakshmi Furniture Kushalnagar.")}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
                color: "#444444"
              }}
            >
              <User size={20} strokeWidth={1.6} />
              <span style={{ fontSize: "11px", fontWeight: 500 }}>Profile</span>
            </button>

            {/* Wishlist */}
            <button
              onClick={() => setIsCartOpen(true)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
                color: "#444444",
                position: "relative"
              }}
            >
              <Heart size={20} strokeWidth={1.6} />
              <span className="desktop-only" style={{ fontSize: "11px", fontWeight: 500 }}>
                Wishlist ({wishlist.length})
              </span>
            </button>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2px",
                color: "#444444",
                position: "relative"
              }}
            >
              <div style={{ position: "relative" }}>
                <ShoppingCart size={20} strokeWidth={1.6} />
                {totalCartCount > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-6px",
                      right: "-8px",
                      background: "#e26a2c",
                      color: "#fff",
                      fontSize: "10px",
                      fontWeight: 700,
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {totalCartCount}
                  </span>
                )}
              </div>
              <span className="desktop-only" style={{ fontSize: "11px", fontWeight: 500 }}>
                Cart ({totalCartCount})
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              className="mobile-only-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                color: "#333333",
                display: "flex",
                alignItems: "center",
                padding: "4px"
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar - full width below logo */}
        <div className="mobile-search-bar container" style={{ marginTop: "12px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1.5px solid #e0e0e0",
              borderRadius: "6px",
              padding: "8px 14px",
              background: "#ffffff"
            }}
          >
            <input
              type="text"
              placeholder="Search furniture in Kushalnagar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                fontSize: "13.5px",
                fontFamily: "'Roboto', sans-serif",
                color: "#333333"
              }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} style={{ color: "#999", marginRight: "6px" }}>
                <X size={15} />
              </button>
            )}
            <Search size={17} strokeWidth={1.8} color="#555" />
          </div>
        </div>
      </div>

      {/* Horizontal Category Navigation Bar - Smooth Scroll on Mobile */}
      <nav
        style={{
          borderTop: "1px solid #f0f0f0",
          borderBottom: "1px solid #eaeaea",
          background: "#ffffff",
          position: "relative"
        }}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container">
          <ul
            className="mobile-cat-scroll"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              listStyle: "none",
              margin: 0,
              padding: 0,
              overflowX: "auto",
              whiteSpace: "nowrap",
              WebkitOverflowScrolling: "touch"
            }}
          >
            {NAV_CATEGORIES.map((cat) => {
              const isNew = cat === "New Arrivals";
              const isActive = activeMenu === cat;

              return (
                <li
                  key={cat}
                  onMouseEnter={() => {
                    if (MEGA_MENUS[cat] && window.innerWidth > 992) {
                      setActiveMenu(cat);
                    } else {
                      setActiveMenu(null);
                    }
                  }}
                  onClick={() => {
                    const el = document.getElementById("category-grid-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    position: "relative",
                    padding: "14px 12px",
                    cursor: "pointer",
                    flexShrink: 0
                  }}
                >
                  <span
                    style={{
                      fontSize: "13.5px",
                      fontWeight: isActive ? 600 : 400,
                      color: isNew
                        ? "#e26a2c"
                        : isActive
                        ? "#e26a2c"
                        : "#333333",
                      transition: "color 0.15s ease",
                      borderBottom: isActive ? "2px solid #e26a2c" : "2px solid transparent",
                      paddingBottom: "12px"
                    }}
                  >
                    {cat}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Hover Mega Menu Dropdown for Desktop */}
        {activeMenu && MEGA_MENUS[activeMenu] && (
          <div className="desktop-only-block">
            <MegaMenu
              category={MEGA_MENUS[activeMenu]}
              onClose={() => setActiveMenu(null)}
            />
          </div>
        )}
      </nav>

      {/* Mobile Drawer Menu when hamburger is clicked */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "120px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 999
          }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            style={{
              width: "80%",
              maxWidth: "320px",
              height: "100%",
              background: "#ffffff",
              padding: "24px",
              overflowY: "auto"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#1f1f1f", marginBottom: "16px" }}>
              Explore Categories
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {NAV_CATEGORIES.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      const el = document.getElementById("category-grid-section");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{
                      fontSize: "14px",
                      color: cat === "New Arrivals" ? "#e26a2c" : "#333",
                      fontWeight: cat === "New Arrivals" ? 700 : 400,
                      width: "100%",
                      textAlign: "left",
                      padding: "6px 0"
                    }}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: "1px solid #eee" }}>
              <div style={{ fontSize: "12px", color: "#888", marginBottom: "6px" }}>
                Kushalnagar Flagship Showroom
              </div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#222", marginBottom: "4px" }}>
                BM Road, Kodagu
              </div>
              <a
                href="tel:+918105922089"
                style={{ fontSize: "13px", color: "#e26a2c", fontWeight: 600, display: "inline-block", marginTop: "4px" }}
              >
                Call: +91 81059 22089
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .mobile-search-bar {
          display: none;
        }
        .mobile-only-btn {
          display: none;
        }
        .desktop-only-block {
          display: block;
        }

        @media (max-width: 992px) {
          .desktop-search-bar {
            display: none !important;
          }
          .mobile-search-bar {
            display: block !important;
          }
          .desktop-only {
            display: none !important;
          }
          .mobile-only-btn {
            display: flex !important;
          }
          .desktop-only-block {
            display: none !important;
          }
        }

        /* Hide scrollbars for chrome, safari and opera */
        .mobile-cat-scroll::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .mobile-cat-scroll {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </header>
  );
};
