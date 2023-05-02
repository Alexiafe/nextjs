import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-between">
      <h1 className="title">
        <Link href="/cars-SSR">Server Side Rendering</Link>
      </h1>
      <h1 className="title">
        <Link href="/cars-SSG">Static Site Generation</Link>
      </h1>
    </div>
  );
}
