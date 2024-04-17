"use client";

import { notFound } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  if (params?.id !== "1") {
    return notFound();
  }
  return <h1>Hello, Бүтээгдэхүүн {params?.id}</h1>;
}
