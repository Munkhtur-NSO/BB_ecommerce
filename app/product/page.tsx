import ClientProducts from "@/container/clientProducts";
import { getAllProducts } from "@/framework/product";
// import { unstable_noStore as noStore } from "next/cache";
//export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";
// export const revalidate = 0;
const fetchData = async () => {
  let lists = [];
  try {
    // noStore();
    lists = await getAllProducts();
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`products fetch error: ${e.message}`);
    } else {
      throw new Error("products fetch error");
    }
  }

  return lists;
};

export default async function Page() {
  const products = await fetchData();

  return (
    <>
      <ClientProducts products={products} />
    </>
  );
}
