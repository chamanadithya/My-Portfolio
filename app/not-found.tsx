import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap nf">
      <h1>404</h1>
      <p>That project doesn&apos;t exist — it may have moved.</p>
      <Link href="/#work" className="btn">Back to work</Link>
    </main>
  );
}
