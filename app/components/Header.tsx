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
  Menu,
  ArrowLeft,
  LayoutGrid,
  Truck,
  Sparkles
} from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { NAV_CATEGORIES, MEGA_MENUS, FEATURED_PRODUCTS, STORE_INFO } from "@/data/furnitureData";
import { MegaMenu } from "./MegaMenu";

const MOBILE_TABS = ["All", "Living", "Bedroom", "Dining", "Mattress", "Storage"];

const DRAWER_CATEGORIES = [
  { name: "Sofas", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&auto=format&fit=crop&q=80", category: "Living" },
  { name: "Living", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&auto=format&fit=crop&q=80", category: "Living" },
  { name: "Bedroom", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&auto=format&fit=crop&q=80", category: "Bedroom" },
  { name: "Mattress", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&auto=format&fit=crop&q=80", category: "Mattress" },
  { name: "Dining", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&auto=format&fit=crop&q=80", category: "Dining" },
  { name: "Storage", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&auto=format&fit=crop&q=80", category: "Living" },
  { name: "Study & Office", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&auto=format&fit=crop&q=80", category: "Living" },
  { name: "Outdoor", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&auto=format&fit=crop&q=80", category: "Living" },
  { name: "Decor & Furnishing", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=400&auto=format&fit=crop&q=80", category: "Decor" },
  { name: "Lamps and Lighting", image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400&auto=format&fit=crop&q=80", category: "Decor" }
];

export const Header: React.FC = () => {
  const {
    totalCartCount,
    wishlist,
    setIsCartOpen,
    setIsShowroomModalOpen,
    searchQuery,
    setSearchQuery,
    setQuickViewProduct,
    activeCategoryFilter,
    setActiveCategoryFilter
  } = useStore();

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
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

  const handleMobileTabClick = (tab: string) => {
    setActiveCategoryFilter(tab);
    const el = document.getElementById("category-grid-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleDrawerCategoryClick = (cat: string) => {
    setActiveCategoryFilter(cat);
    setIsMobileDrawerOpen(false);
    const el = document.getElementById("category-grid-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header style={{ width: "100%", position: "sticky", top: 0, zIndex: 1000, background: "#ffffff", boxShadow: "0 1px 0 rgba(0,0,0,0.06)" }}>
      {/* Top Announcement Bar - Clean Desktop/Tablet */}
      <div
        className="top-announcement-bar"
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
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#333", fontWeight: 500 }}>
              <MapPin size={13} color="#e26a2c" /> Kushalnagar Store: BM Road, Kodagu
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#666" }}>
              <Clock size={13} /> 9:30 AM - 9:00 PM
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            <span style={{ color: "#555" }}>
              Free Direct Delivery across Kushalnagar & Coorg
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

      {/* ==================== DESKTOP MAIN HEADER (>992px) ==================== */}
      {/* STRICTLY NO HAMBURGER ICON ON LAPTOP/DESKTOP */}
      <div className="desktop-header-wrap" style={{ padding: "18px 0", background: "#ffffff" }}>
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "36px"
          }}
        >
          {/* Brand Logo */}
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
              <span style={{ fontSize: "26px", fontWeight: 700, color: "#1f1f1f", letterSpacing: "-0.4px" }}>
                Jayalakshmi
              </span>
              <span style={{ fontSize: "26px", fontWeight: 400, color: "#e26a2c", letterSpacing: "-0.4px" }}>
                Furniture
              </span>
            </div>
            <div
              style={{
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "2.4px",
                textTransform: "uppercase",
                color: "#888888",
                marginTop: "2px"
              }}
            >
              Kushalnagar • Est. 1998
            </div>
          </Link>

          {/* Center Search Bar */}
          <div
            ref={searchRef}
            style={{
              flex: "1",
              maxWidth: "580px",
              position: "relative"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: isSearchFocused ? "1.5px solid #e26a2c" : "1.5px solid #e0e0e0",
                borderRadius: "6px",
                padding: "10px 18px",
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
                  style={{ color: "#999", marginRight: "8px", display: "flex", alignItems: "center" }}
                >
                  <X size={15} />
                </button>
              )}
              <Search size={18} strokeWidth={1.8} color="#444" />
            </div>

            {/* Live Autocomplete Dropdown */}
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
                        padding: "12px 18px",
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
                          gap: "14px",
                          padding: "12px 18px",
                          cursor: "pointer",
                          borderBottom: "1px solid #f8f8f8"
                        }}
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          style={{ width: "42px", height: "42px", objectFit: "cover", borderRadius: "4px" }}
                        />
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13.5px", fontWeight: 500, color: "#222" }}>
                            {p.name}
                          </div>
                          <div style={{ fontSize: "11.5px", color: "#777" }}>
                            {p.material} • ₹{p.price.toLocaleString("en-IN")}
                          </div>
                        </div>
                        <ChevronRight size={16} color="#bbb" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div style={{ padding: "24px", textAlign: "center", color: "#888", fontSize: "13px" }}>
                    No furniture found matching &quot;{searchQuery}&quot;.
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Desktop Right Action Icons: Stores, Profile, Wishlist, Cart */}
          <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
            <button
              onClick={() => setIsShowroomModalOpen(true)}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", color: "#444" }}
            >
              <Store size={20} strokeWidth={1.6} />
              <span style={{ fontSize: "11.5px", fontWeight: 500 }}>Stores</span>
            </button>

            <button
              onClick={() => alert("Welcome to Jayalakshmi Furniture Kushalnagar.")}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", color: "#444" }}
            >
              <User size={20} strokeWidth={1.6} />
              <span style={{ fontSize: "11.5px", fontWeight: 500 }}>Profile</span>
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", color: "#444" }}
            >
              <Heart size={20} strokeWidth={1.6} />
              <span style={{ fontSize: "11.5px", fontWeight: 500 }}>
                Wishlist ({wishlist.length})
              </span>
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", color: "#444" }}
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
              <span style={{ fontSize: "11.5px", fontWeight: 500 }}>
                Cart ({totalCartCount})
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Horizontal Category Bar (>992px) */}
      <nav
        className="desktop-category-bar"
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
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              listStyle: "none",
              margin: 0,
              padding: 0,
              overflowX: "auto",
              whiteSpace: "nowrap"
            }}
          >
            {NAV_CATEGORIES.map((cat) => {
              const isNew = cat === "New Arrivals";
              const isActive = activeMenu === cat;

              return (
                <li
                  key={cat}
                  onMouseEnter={() => {
                    if (MEGA_MENUS[cat]) {
                      setActiveMenu(cat);
                    } else {
                      setActiveMenu(null);
                    }
                  }}
                  style={{
                    position: "relative",
                    padding: "16px 12px",
                    cursor: "pointer"
                  }}
                >
                  <span
                    style={{
                      fontSize: "13.5px",
                      fontWeight: isActive ? 600 : 400,
                      color: isNew ? "#e26a2c" : isActive ? "#e26a2c" : "#333333",
                      transition: "color 0.15s ease",
                      borderBottom: isActive ? "2px solid #e26a2c" : "2px solid transparent",
                      paddingBottom: "14px"
                    }}
                  >
                    {cat}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        {activeMenu && MEGA_MENUS[activeMenu] && (
          <MegaMenu
            category={MEGA_MENUS[activeMenu]}
            onClose={() => setActiveMenu(null)}
          />
        )}
      </nav>

      {/* ==================== MOBILE HEADER (<=992px) MATCHING SCREENSHOT 1 ==================== */}
      <div className="mobile-header-wrap">
        {/* Row 1: Hamburger Menu, Logo, Wishlist, Cart */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 16px",
            background: "#ffffff"
          }}
        >
          {/* Mobile Hamburger on the Left */}
          <button
            onClick={() => setIsMobileDrawerOpen(true)}
            aria-label="Open mobile menu"
            style={{
              color: "#333333",
              display: "flex",
              alignItems: "center",
              padding: "4px",
              marginRight: "8px"
            }}
          >
            <Menu size={24} strokeWidth={2} />
          </button>

          {/* Logo Center */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "3px",
              textDecoration: "none"
            }}
          >
            <span style={{ fontSize: "20px", fontWeight: 700, color: "#1f1f1f" }}>
              Jayalakshmi
            </span>
            <span style={{ fontSize: "20px", fontWeight: 400, color: "#e26a2c" }}>
              Furniture
            </span>
          </Link>

          {/* Right Actions: Wishlist & Cart */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Wishlist"
              style={{ color: "#333", display: "flex", alignItems: "center" }}
            >
              <Heart size={21} strokeWidth={1.8} />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Cart"
              style={{ color: "#333", display: "flex", alignItems: "center", position: "relative" }}
            >
              <ShoppingCart size={21} strokeWidth={1.8} />
              {totalCartCount > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-6px",
                    right: "-8px",
                    background: "#e26a2c",
                    color: "#fff",
                    fontSize: "9px",
                    fontWeight: 700,
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Row 2: Full Width Mobile Search Bar (matching Screenshot 1) */}
        <div style={{ padding: "0 16px 10px 16px" }}>
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
              placeholder="Search Products, Color & More..."
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
            <Search size={18} strokeWidth={1.8} color="#444" />
          </div>
        </div>

        {/* Row 3: Horizontal Scroll Tabs matching Screenshot 1 (All, Living, Bedroom, Dining, Mattress... + Grid icon) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #eeeeee",
            padding: "0 16px"
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "22px",
              overflowX: "auto",
              whiteSpace: "nowrap",
              flex: 1,
              scrollbarWidth: "none"
            }}
            className="mobile-tab-strip"
          >
            {MOBILE_TABS.map((tab) => {
              const isSelected = activeCategoryFilter.toLowerCase() === tab.toLowerCase();

              return (
                <button
                  key={tab}
                  onClick={() => handleMobileTabClick(tab)}
                  style={{
                    padding: "10px 0",
                    fontSize: "13.5px",
                    fontWeight: isSelected ? 500 : 400,
                    color: isSelected ? "#e26a2c" : "#444444",
                    borderBottom: isSelected ? "2.5px solid #e26a2c" : "2.5px solid transparent",
                    flexShrink: 0
                  }}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Grid View Icon on far right (opens drawer/all categories) */}
          <button
            onClick={() => setIsMobileDrawerOpen(true)}
            aria-label="View all categories"
            style={{
              color: "#555",
              padding: "8px 0 8px 12px",
              display: "flex",
              alignItems: "center",
              borderLeft: "1px solid #f0f0f0",
              marginLeft: "8px"
            }}
          >
            <LayoutGrid size={18} />
          </button>
        </div>
      </div>

      {/* ==================== MOBILE DRAWER VIEW MATCHING SCREENSHOT 2 ==================== */}
      {isMobileDrawerOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.5)",
            animation: "fadeIn 0.2s ease"
          }}
          onClick={() => setIsMobileDrawerOpen(false)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "420px",
              height: "100%",
              background: "#ffffff",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              boxShadow: "4px 0 20px rgba(0,0,0,0.15)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Top Header: Back Arrow, Brand, Login/Signup */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                borderBottom: "1px solid #eeeeee",
                background: "#ffffff",
                position: "sticky",
                top: 0,
                zIndex: 10
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <button
                  onClick={() => setIsMobileDrawerOpen(false)}
                  style={{ color: "#333", display: "flex", alignItems: "center" }}
                >
                  <ArrowLeft size={22} strokeWidth={2} />
                </button>
                <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
                  <span style={{ fontSize: "19px", fontWeight: 700, color: "#1f1f1f" }}>
                    Jayalakshmi
                  </span>
                  <span style={{ fontSize: "19px", fontWeight: 400, color: "#e26a2c" }}>
                    Furniture
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  alert("Customer Portal - Jayalakshmi Furniture Kushalnagar");
                  setIsMobileDrawerOpen(false);
                }}
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#333333"
                }}
              >
                Login / Signup
              </button>
            </div>

            <div style={{ padding: "16px 18px", flex: 1 }}>
              {/* Kushalnagar Store Card Banner (matching Screenshot 2 top card) */}
              <div
                onClick={() => {
                  setIsMobileDrawerOpen(false);
                  setIsShowroomModalOpen(true);
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#fff9f5",
                  border: "1px solid #f2e2d5",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  marginBottom: "20px",
                  cursor: "pointer"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "8px",
                      background: "#ffffff",
                      border: "1px solid #eeddd0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#e26a2c"
                    }}
                  >
                    <Store size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13.5px", fontWeight: 600, color: "#d25a20" }}>
                      Find Your Perfect Furniture
                    </div>
                    <div style={{ fontSize: "11.5px", color: "#666" }}>
                      On Visiting Kushalnagar Store (BM Road)
                    </div>
                  </div>
                </div>
                <ChevronRight size={18} color="#999" />
              </div>

              {/* 2-Column Grid of Categories (Matching Screenshot 2) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                  marginBottom: "24px"
                }}
              >
                {DRAWER_CATEGORIES.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleDrawerCategoryClick(item.category)}
                    style={{
                      background: "#ffffff",
                      border: "1px solid #eaeaea",
                      borderRadius: "8px",
                      padding: "10px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      cursor: "pointer",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.02)"
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "48px",
                        height: "44px",
                        objectFit: "cover",
                        borderRadius: "6px",
                        backgroundColor: "#f5f5f5",
                        flexShrink: 0
                      }}
                    />
                    <span style={{ fontSize: "12.5px", fontWeight: 500, color: "#222" }}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom List Items: New Arrivals, Track Order, Stores */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", borderTop: "1px solid #f0f0f0", paddingTop: "14px" }}>
                <div
                  onClick={() => {
                    handleDrawerCategoryClick("All");
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 4px",
                    cursor: "pointer"
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      border: "1px solid #333",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "9px",
                      fontWeight: 700
                    }}
                  >
                    NEW
                  </div>
                  <span style={{ fontSize: "13.5px", fontWeight: 500, color: "#222" }}>New Arrivals</span>
                  <span
                    style={{
                      background: "#e26a2c",
                      color: "#fff",
                      fontSize: "10px",
                      fontWeight: 700,
                      padding: "2px 6px",
                      borderRadius: "4px",
                      marginLeft: "4px"
                    }}
                  >
                    New
                  </span>
                </div>

                <div
                  onClick={() => {
                    alert("To track your Kushalnagar order, please call +91 81059 22089");
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 4px",
                    cursor: "pointer"
                  }}
                >
                  <Truck size={20} color="#333" />
                  <span style={{ fontSize: "13.5px", fontWeight: 500, color: "#222" }}>Track Order</span>
                </div>

                <div
                  onClick={() => {
                    setIsMobileDrawerOpen(false);
                    setIsShowroomModalOpen(true);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 4px",
                    cursor: "pointer"
                  }}
                >
                  <Store size={20} color="#333" />
                  <span style={{ fontSize: "13.5px", fontWeight: 500, color: "#222" }}>Kushalnagar Stores</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Desktop: show desktop navbar, hide mobile navbar */
        .desktop-header-wrap,
        .desktop-category-bar,
        .top-announcement-bar {
          display: block;
        }
        .mobile-header-wrap {
          display: none;
        }

        /* Mobile View (<= 992px) */
        @media (max-width: 992px) {
          .desktop-header-wrap,
          .desktop-category-bar,
          .top-announcement-bar {
            display: none !important;
          }
          .mobile-header-wrap {
            display: block !important;
          }
        }

        .mobile-tab-strip::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </header>
  );
};
