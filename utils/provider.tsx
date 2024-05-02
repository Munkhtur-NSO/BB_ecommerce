"use client";

import React from "react";
import { DataProvider } from "@/contexts/dataContext";
import { CartProvider } from "@/contexts/cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import { MapModalProvider } from "@/contexts/mapModalContext";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <DataProvider>
        <ToastContainer />
        <CartProvider>
          <MapModalProvider>{children}</MapModalProvider>
        </CartProvider>
      </DataProvider>
    </SessionProvider>
  );
}

export default Providers;
