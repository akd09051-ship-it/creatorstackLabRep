import Link from "next/link";

export default function Hub() {
  return (
    <div>
      <h1>Hub</h1>
      <ul>
        <li><Link href="/pillars">Pillars</Link></li>
      </ul>
    </div>
  );
}
