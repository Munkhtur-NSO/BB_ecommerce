export default function Page({ params }: { params: { id: string } }) {
  return <h1>Hello, Бүтээгдэхүүн {params?.id}</h1>;
}
