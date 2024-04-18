"use client";

export default function ClientTest({ id, isFeatured }: any) {
  console.log("client component");
  console.log("cid, isFeatured", id, isFeatured);
  return (
    <>
      <div> client component</div>
    </>
  );
}
