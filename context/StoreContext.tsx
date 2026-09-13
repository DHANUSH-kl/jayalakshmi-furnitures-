"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, FEATURED_PRODUCTS } from "@/data/furnitureData";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface StoreContextType {
  cart: CartItem[];
  wishlist: string[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isShowroomModalOpen: boolean;
  setIsShowroomModalOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  totalCartCount: number;
  totalCartPrice: number;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeCategoryFilter: string;
  setActiveCategoryFilter: (cat: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: FEATURED_PRODUCTS[1], // Alpina coffee table by default
      quantity: 1
    }
  ]);
  const [wishlist, setWishlist] = useState<string[]>(["p1", "p3"]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isShowroomModalOpen, setIsShowroomModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("All");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added "${product.name.slice(0, 30)}..." to Cart!`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast("Item removed from your cart");
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast("Removed from Wishlist");
        return prev.filter((id) => id !== productId);
      } else {
        showToast("Saved to your Wishlist!");
        return [...prev, productId];
      }
    });
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        setIsCartOpen,
        isShowroomModalOpen,
        setIsShowroomModalOpen,
        quickViewProduct,
        setQuickViewProduct,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        toggleWishlist,
        isWishlisted,
        totalCartCount,
        totalCartPrice,
        toastMessage,
        showToast,
        searchQuery,
        setSearchQuery,
        activeCategoryFilter,
        setActiveCategoryFilter
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
