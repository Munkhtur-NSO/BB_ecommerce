import React from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function BaseLayout({
  children,
  lng,
}: Readonly<{
  children: React.ReactNode;
  lng: string;
}>) {
  return (
    <div>
      <Header lng={lng} />
      {children}
      <Footer />
    </div>
  );
}
