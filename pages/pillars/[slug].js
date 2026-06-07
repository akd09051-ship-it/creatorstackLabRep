import fs from "fs";
import path from "path";

export default function PillarDetail({ pillar }) {
  if (!pillar) return <div>Pillar not found</div>;
  return (
    <div>
      <h1>{pillar.title}</h1>
      <p>{pillar.description}</p>
      <a href="/pillars">Back to Pillars</a>
    </div>
  );
}

export async function getStaticPaths() {
  const dataPath = path.join(process.cwd(), "content", "pillars.json");
  const raw = fs.readFileSync(dataPath, "utf8");
  const pillars = JSON.parse(raw);
  const paths = pillars.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const dataPath = path.join(process.cwd(), "content", "pillars.json");
  const raw = fs.readFileSync(dataPath, "utf8");
  const pillars = JSON.parse(raw);
  const pillar = pillars.find((p) => p.slug === params.slug);
  return { props: { pillar } };
}
