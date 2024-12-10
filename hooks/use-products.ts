"use client";

import { useState, useMemo } from "react";
import { Product } from "@/lib/types";

export function useProducts(initialProducts: Product[]) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") {
      return initialProducts;
    }
    return initialProducts.filter(
      (product) => product.category === selectedCategory
    );
  }, [initialProducts, selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
  };
}