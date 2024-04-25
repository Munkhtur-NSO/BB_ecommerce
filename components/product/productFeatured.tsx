"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductFeatured() {
  const [products, setProducts] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsData = await fetch("/api/products?limit=6");
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
    <div className="col-lg-12">
      <h4 className="mb-4">Featured products</h4>
      {products &&
        products.map((product: any, index: number) => {
          return (
            <div
              className="d-flex align-items-center justify-content-start"
              key={index}
            >
              <div
                className="rounded"
                style={{ width: "100px", height: "100px" }}
              >
                <img
                  src={product?.image}
                  className="img-fluid rounded"
                  alt="Image"
                />
              </div>
              <div>
                <h6 className="mb-2">Big Banana</h6>
                <div className="d-flex mb-2">
                  <i className="fa fa-star text-secondary"></i>
                  <i className="fa fa-star text-secondary"></i>
                  <i className="fa fa-star text-secondary"></i>
                  <i className="fa fa-star text-secondary"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="d-flex mb-2">
                  <h5 className="fw-bold me-2">{product?.price} $</h5>
                  <h5 className="text-danger text-decoration-line-through">
                    4.11 $
                  </h5>
                </div>
              </div>
            </div>
          );
        })}

      <div className="d-flex justify-content-center my-4">
        <Link
          href="/shop"
          className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
        >
          Дэлгэрэнгүй
        </Link>
      </div>
    </div>
  );
}
