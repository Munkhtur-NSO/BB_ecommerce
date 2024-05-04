import ClientTest from "@/components/clientcomponent/page";

export default async function Index({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: any;
}) {
  console.log("server component detail");
  const { id } = params;
  const { isFeatured } = searchParams;
  console.log("params", params?.id);
  console.log("id", id);
  console.log("isFeatured", isFeatured);
  return (
    <>
      <div> server component detail</div>
      <ClientTest />
    </>
  );
}
