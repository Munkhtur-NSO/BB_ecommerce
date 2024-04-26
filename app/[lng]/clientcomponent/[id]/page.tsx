"use client";

import { useParams, useSearchParams } from "next/navigation";

export default function Index() {
  const params = useParams();
  const { id } = params;
  const search = useSearchParams();
  const isFeatured = search.get("isFeatured");
  console.log("id", id);
  console.log("isFeatured", isFeatured);
  return (
    <>
      <div> server component detail</div>
    </>
  );
}
