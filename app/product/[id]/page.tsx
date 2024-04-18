import { getAllProducts, getSingleProduct } from "@/framework/product";
import ClientProductDetail from "@/container/clientProductDetail";

const fetchData = async (id: any) => {
  let product = [];
  try {
    product = await getSingleProduct(id);
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`products detail fetch error: ${e.message}`);
    } else {
      throw new Error("products detail fetch error");
    }
  }

  return product;
};

export default async function Page({ params }: { params: { id: string } }) {
  const product = await fetchData(params.id);
  return <ClientProductDetail id={params.id} product={product} />;
}
