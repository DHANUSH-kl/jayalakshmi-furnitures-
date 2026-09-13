"use client";

import React, { useState } from "react";
import { Preloader } from "./components/Preloader";
import { Header } from "./components/Header";
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
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      {/* Luxury Screen Loader - Plays first, then triggers Hero animation */}
      <Preloader onLoaded={() => setIsLoaded(true)} />

      {/* Main Store Layout */}
      <Header />

      {/* Hero Section matching Screenshot 1 */}
      <HeroSection isLoaded={isLoaded} />

      {/* Category Grid Section matching Screenshot 4 */}
      <CategoryGrid />

      {/* Pure Wood Quality & Service Banner */}
      <FeaturesBanner />

      {/* Best Sellers in Kushalnagar */}
      <BestSellers />

      {/* Kushalnagar Experience Showroom Feature */}
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
