"use client";

import React from "react";
import { DataProvider } from "@/contexts/dataContext";
import { CartProvider } from "@/contexts/cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DataProvider>
      <ToastContainer />
      <CartProvider>{children}</CartProvider>
    </DataProvider>
  );
}

export default Providers;
