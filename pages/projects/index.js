import { NextSeo } from "next-seo";
import { WorkList } from "components";
import { getAllPosts } from "pages/api/projects";

export default function Home({ allPosts }) {
  return (
    <>
      <NextSeo
        title="Work – Sreehari jayaraj"
        description="A list of all my side-projects, mostly written in React.js,express js,mongodb , Next.js, Material UI and Typescript."
        openGraph={{
          site_name: "Work – Sreehari jayaraj",
          title: "Work – sreehari jayaraj",
          description:
            "A list of all my side-projects, mostly written inReact.js,express js,mongodb , Next.js, Material UI and Typescript.",
        }}
        twitter={{
          handle: "@thelifeofrishi",
          site: "@thelifeofrishi",
          cardType: "summary_large_image",
        }}
      />

      <WorkList allPosts={allPosts} />
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "image",
    "excerpt",
    "content",
    "icon",
  ]);

  return {
    props: { allPosts },
  };
}
