import ClientProducts from "@/container/clientProducts";
import { getAllProducts } from "@/framework/product";

const fetchData = async () => {
  let lists = [];
  try {
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
