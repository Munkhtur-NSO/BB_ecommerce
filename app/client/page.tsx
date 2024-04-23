"use client";

import React, { useEffect, useState } from "react";
import { useData } from "@/contexts/dataContext";

export default function ClientProducts() {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState(true);
  const { storage, setValues } = useData();
  function useOnceCall(cb: any, condition = true) {
    const isCalledRef = React.useRef(false);

    useEffect(() => {
      if (condition && !isCalledRef.current) {
        isCalledRef.current = true;
        cb();
      }
    }, [cb, condition]);
  }

  useOnceCall(() => {
    fetch("https://fakestoreapi.com/products", {
      next: { tags: ["products"] },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [] as any);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  console.log("storage", storage);
  return (
    <>
      <div>
        <button
          onClick={() => setValues({ classN: "nextjs14", students: 10 })}
          className={"btn btn-primary"}
        >
          Хогын саванд нэмэх
        </button>
        <button
          onClick={() => setValues({ cl: "nextjs13", students: 1 })}
          className={"btn btn-primary"}
        >
          Хогын саванд нэмэх
        </button>
        {data &&
          data?.map((product: any, index: any) => {
            return <div key={index}>{product?.title}</div>;
          })}
      </div>
    </>
  );
}
