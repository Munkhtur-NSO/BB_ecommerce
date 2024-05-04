"use client";

import { useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const data = [
  {
    id: 1,
    name: "Organic",
    slug: "organic",
  },
  {
    id: 2,
    name: "Fresh",
    slug: "fresh",
  },
  {
    id: 3,
    name: "Sales",
    slug: "sales",
  },
  {
    id: 4,
    name: "Discount",
    slug: "discount",
  },
  {
    id: 5,
    name: "Expired",
    slug: "expired",
  },
];

export default function ProductType() {
  const [selectedType, setSelectedType] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  console.log("searchParams", searchParams.get("type"));
  function handleItemClick(e: any) {
    const value = e.target.value.trim();
    setSelectedType(value);
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    console.log(value);
    console.log(current);
    if (!value) {
      current.delete("type");
    } else {
      current.set("type", value);
    }

    const query = current ? `?${current}` : "";
    router.push(`${pathname}${query}`);
  }

  return (
    <div className="col-lg-12">
      <div className="mb-3">
        <h4>Additional</h4>
        {data.map((item) => (
          <div key={item.id} className="mb-2">
            <input
              type="radio"
              className="me-2"
              id={`Categories-${item.id}`}
              name="cat-type"
              value={item.slug}
              checked={selectedType === item.slug}
              onChange={handleItemClick}
            />
            <label htmlFor={`Categories-${item.id}`}>{item.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
