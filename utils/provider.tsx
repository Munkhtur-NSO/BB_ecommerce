"use client";

import React from "react";
import { DataProvider } from "@/contexts/dataContext";

function Providers({ children }: { children: React.ReactNode }) {
  return <DataProvider>{children}</DataProvider>;
}

export default Providers;
