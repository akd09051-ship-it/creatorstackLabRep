export async function getStaticPaths() {
  const slugs = ["sample-course-1", "sample-course-2", "sample-course-3"];
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: true };
}
export async function getStaticProps({ params }) {
  const slug = params.slug;
  const course = {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    price: "$29",
    affiliate_link: "https://example.com/aff/" + slug
  };
  return { props: { course } };
}
export default function Course({ course }) {
  if (!course) return null;
  return (
    <div style={{ padding: "2rem" }}>
      <h1>{course.title}</h1>
      <p>Price: {course.price}</p>
      <a href={course.affiliate_link} target="_blank" rel="noreferrer">Buy via Affiliate</a>
    </div>
  );
}
