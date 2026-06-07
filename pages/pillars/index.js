import fs from "fs";
import path from "path";
import Link from "next/link";

export default function PillarsIndex({ pillars }) {
  return (
    <div>
      <h1>Pillars</h1>
      <ul>
        {pillars.map((p) => (
          <li key={p.slug}>
            <Link href={`/pillars/${p.slug}`}>
              <a>{p.title}</a>
            </Link>
            {" — "} {p.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function getStaticProps() {
  const dataPath = path.join(process.cwd(), "content", "pillars.json");
  const raw = fs.readFileSync(dataPath, "utf8");
  const pillars = JSON.parse(raw);
  return { props: { pillars } };
}