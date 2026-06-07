import { useRouter } from "next/router";
export async function getServerSideProps(context) {
  const slug = context.params.slug;
  const mapping = {
    "sample-tool": "https://example.com/affiliate/sample-tool?utm_source=creatorstacklab&utm_medium=affiliate&utm_campaign=sample-tool"
  };
  const url = mapping[slug] || null;
  if (url) {
    return {
      redirect: {
        destination: url,
        permanent: false
      }
    };
  }
  return { notFound: true };
}
export default function GoRedirect() {
  const router = useRouter();
  if (router.isFallback) return null;
  return null;
}
