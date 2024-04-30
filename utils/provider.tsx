"use client";

import React from "react";
import { DataProvider } from "@/contexts/dataContext";
import { CartProvider } from "@/contexts/cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <DataProvider>
        <ToastContainer />
        <CartProvider>{children}</CartProvider>
      </DataProvider>
    </SessionProvider>
  );
}

export default Providers;
