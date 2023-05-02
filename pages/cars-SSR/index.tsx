import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Cars Server Side Rendering</h1>
      <Link href="/cars-SSR/all">All cars</Link>
    </>
  );
}
