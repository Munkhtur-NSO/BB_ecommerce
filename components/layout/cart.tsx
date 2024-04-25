"use client";

import React from "react";
import { useCartState } from "@/contexts/cart";
import Link from "next/link";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Cart = () => {
  const { count, items } = useCartState() as any;
  console.log(items);

  return (
    <>
      <Link href="/cart" className="position-relative me-4 my-auto">
        <FontAwesomeIcon
          icon={faShoppingBag}
          className="text-primary"
          size="2x"
        />

        <span
          className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
          style={{
            top: "-5px",
            left: "15px",
            height: "20px",
            minWidth: "20px",
          }}
        >
          <span>{count || 0}</span>
        </span>
      </Link>
    </>
  );
};
export default Cart;
