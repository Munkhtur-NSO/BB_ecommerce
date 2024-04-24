"use client";
import { useEffect, useState } from "react";
import ProductBox from "@/components/product/productBox";

export default function Section5() {
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

  console.log(products);
  return (
    <>
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="tab-class text-center">
            <div className="row g-4">
              <div className="col-lg-4 text-start">
                <h1>Шинэ бараа</h1>
              </div>
            </div>
            <div className="tab-content">
              <div className={"row"}>
                {products &&
                  products.map((product: any, index: number) => {
                    return <ProductBox productDetail={product} key={index} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
