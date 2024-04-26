import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found 404</h2>
      <p>Уучлаарай ийм хуудас алга</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
