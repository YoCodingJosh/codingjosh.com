import Link from "next/link";

export const runtime = 'edge';

export default async function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <Link href="/">
        Go Home
      </Link>
    </div>
  );
};
