import Head from "next/head";
import AllComponents from "../components/AllComponents";

import { getAllPostSlugs, getPostdata } from "../lib/posts";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import Layout from "../components/Layout";

const components = AllComponents;

export default function Posts({ slug, source, frontMatter }) {
  const content = hydrate(source, { components });

  const {
    title,
    featureImg,
    description,
    datePublished,
    dateEdited,
    author,
  } = frontMatter;

  return (
    <>
      <Layout
        title={title}
        description={description}
        slug={slug}
        datePublished={datePublished}
        dateEdited={dateEdited}
        image={featureImg}
      >
        <h1>{title}</h1>

        <p>{author}</p>
        {" / "}
        <p>{slug}</p>
        <span>{datePublished}</span>

        <div>{content}</div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const postContent = await getPostdata(params.slug);
  const { data, content } = matter(postContent);
  const mdxSource = await renderToString(content, {
    components,
    scope: data,
  });
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      slug: params.slug,
    },
  };
}
