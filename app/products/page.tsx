"use client";

import { products, categories } from "@/lib/data";
import { CategoryFilter } from "@/components/products/category-filter";
import { ProductGrid } from "@/components/products/product-grid";
import { useProducts } from "@/hooks/use-products";

export default function ProductsPage() {
  const { selectedCategory, setSelectedCategory, filteredProducts } = useProducts(products);

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}