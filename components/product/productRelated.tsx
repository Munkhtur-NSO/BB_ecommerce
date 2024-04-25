"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProductBox from "@/components/product/productBox";

export default function ProductRelated() {
  const [products, setProducts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await fetch("/api/products?limit=4");
        const data = await productsData.json();
        setProducts(data?.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Failed to fetch products:", error);
      }
    }

    fetchProducts();
  }, []);
  return (
    <div className="row">
      <h4 className="mb-4">Featured products</h4>
      {products &&
        products.map((product: any, index: number) => {
          return <ProductBox productDetail={product} key={index} />;
        })}
    </div>
  );
}
