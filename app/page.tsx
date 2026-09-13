"use client";

import React, { useState } from "react";
import { Header } from "./components/Header";
import { MobileCategorySection } from "./components/MobileCategorySection";
import { HeroSection } from "./components/HeroSection";
import { CategoryGrid } from "./components/CategoryGrid";
import { FeaturesBanner } from "./components/FeaturesBanner";
import { BestSellers } from "./components/BestSellers";
import { KushalnagarShowroom } from "./components/KushalnagarShowroom";
import { CartDrawer } from "./components/CartDrawer";
import { QuickViewModal } from "./components/QuickViewModal";
import { ShowroomModal } from "./components/ShowroomModal";
import { FloatingWidgets } from "./components/FloatingWidgets";
import { Footer } from "./components/Footer";

export default function HomePage() {
  // Preloader completely removed as requested
  const isLoaded = true;

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      {/* Main Header & Navbar with responsive mobile/desktop views */}
      <Header />

      {/* Mobile-only 2-row category scroll matching Screenshot 1 */}
      <MobileCategorySection />

      {/* Hero Section matching reference */}
      <HeroSection isLoaded={isLoaded} />

      {/* Category Grid Section */}
      <CategoryGrid />

      {/* Quality & Trust Banner */}
      <FeaturesBanner />

      {/* Best Sellers in Kushalnagar */}
      <BestSellers />

      {/* Kushalnagar Experience Showroom Showcase */}
      <KushalnagarShowroom />

      {/* Footer */}
      <Footer />

      {/* Drawers & Modals */}
      <CartDrawer />
      <QuickViewModal />
      <ShowroomModal />
      <FloatingWidgets />
    </main>
  );
}
