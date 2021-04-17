import Layout from "../components/Layout";
import Link from "next/link";
import { getSortedPosts } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout>
        <header>
          <h1>Hi from the header</h1>
          <nav>Hi from the nav</nav>
        </header>

        <main>
          <h1>Hi from the index main</h1>
          {allPostsData.map(({ slug, date, title, excerpt }) => (
            <li key={slug}>
              slug: {slug}
              <br />
              date: {date}
              <br />
              title: {title}
              <br />
              excerpt: {excerpt}
              <br />
              <Link href={`/${slug}`}>read more</Link>
              <br />
              <br />
            </li>
          ))}
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPosts();
  return {
    props: {
      allPostsData,
    },
  };
}
