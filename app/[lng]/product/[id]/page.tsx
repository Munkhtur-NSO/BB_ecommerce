import { getAllProducts, getSingleProduct } from "@/framework/product";
import ClientProductDetail from "@/container/clientProductDetail";
import ProductDetail from "@/components/product/productDetail";

export const generateMetadata = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const product = await fetchData(id);
  return {
    title: product.title,
    description: `${
      product?.description ? product?.description : "Итгэлийг Бид түгээнэ"
    }`,
    openGraph: {
      title: product.title,
      description: `${
        product?.description ? product?.description : "Итгэлийг Бид түгээнэ"
      }`,
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/product/${id}`,
      siteName: "bloomza",
      images: [
        {
          url: `${product?.image}`,
          width: 1200,
          height: 628,
        },
      ],
      locale: "mn_MN",
      type: "website",
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/product/${id}`,
    },
  };
};

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
  return <ProductDetail id={params.id} product={product} />;
}
