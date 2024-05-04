"use client";

import React from "react";
import { DataProvider } from "@/contexts/dataContext";
import { CartProvider } from "@/contexts/cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import { MapModalProvider } from "@/contexts/mapModalContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <DataProvider>
          <ToastContainer />
          <CartProvider>
            <MapModalProvider>{children}</MapModalProvider>
            <ReactQueryDevtools initialIsOpen={true} />
          </CartProvider>
        </DataProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default Providers;
