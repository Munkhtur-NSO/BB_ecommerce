export async function POST(request: Request) {
  const item = await request.json();
  console.log("item:--> ", item);
  const res = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  const data = await res.json();

  return Response.json({ data });
}
