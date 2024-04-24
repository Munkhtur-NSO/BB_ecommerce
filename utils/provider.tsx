"use client";

import React from "react";
import { DataProvider } from "@/contexts/dataContext";
import { CartProvider } from "@/contexts/cart";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DataProvider>
      {" "}
      <CartProvider>{children}</CartProvider>
    </DataProvider>
  );
}

export default Providers;
