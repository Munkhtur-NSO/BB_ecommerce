"use client";
import { useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();
  return (
    <>
      <h1>Hello, About page2</h1>;
      <div>
        <button
          className={"btn btn-danger"}
          onClick={() => router.push("/news")}
        >
          Буцах
        </button>
      </div>
    </>
  );
}
