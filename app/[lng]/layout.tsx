import { Open_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import BaseLayout from "@/components/baseLayout";
import "@/public/css/bootstrap.min.css";
import "@/public/css/style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-medium-image-zoom/dist/styles.css";
import Providers from "@/utils/provider";
import ImportBsJS from "@/utils/importBsJS";
import React from "react";

const openSans = Open_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const generateMetadata = async () => {
  return {
    metadataBase: new URL(`http://locahost:3000`),
    title: {
      template: `%s | Bloomza`,
      default: `Bloomza - Технологи, бичиг хэргийн дэлгүүр`,
    },
    description: `Bloomza - Технологи, бичиг хэргийн дэлгүүр`,
    openGraph: {
      title: `Bloomza - Технологи, бичиг хэргийн дэлгүүр`,
      description: `Bloomza - Технологи, бичиг хэргийн дэлгүүр`,
      url: process.env.NEXT_PUBLIC_WEBSITE_URL,
      siteName: "bloomza",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/images/fb_cover.png`,
          width: 1200,
          height: 628,
        },
      ],
      locale: "mn_MN",
      type: "website",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
    },
  };
};

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  return (
    <html lang="en">
      <ImportBsJS />
      <body className={openSans.className}>
        <Providers>
          <BaseLayout lng={lng}>{children}</BaseLayout>
        </Providers>
      </body>
    </html>
  );
}
