import Head from "next/head";
import { sns } from "../lib/links";

const SEO = ({
  url,
  title,
  description,
  imageUrl,
  imageAlt,
  dateEdited,
  datePublished,
  content,
}) => {
  const image = `https://npmahjong.com${imageUrl}`;
  return (
    <>
      <Head>
        {/* SEO */}
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <link rel="canonical" href={url} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {imageUrl && <meta property="og:image" content={image} />}
        <meta property="og:url" content={url} />

        {/* RSS, Sitemap, Robots */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="NPMahjong RSS Feed"
          href="/rss"
        ></link>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml"></link>

        {/* <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-P59C32H"></script> */}

        {/* Twitter Cards */}
        <meta
          name="twitter:card"
          content={imageUrl ? "summary_large_image" : "summary"}
        />
        <meta name="twitter:site" content={sns.twitter.handle} />
        <meta name="twitter:creator" content={sns.twitter.handle} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {imageUrl && <meta property="twitter:image" content={image} />}
        {imageAlt && <meta property="twitter:image:alt" content={imageAlt} />}

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        {/* Favicon */}

        <script type="application/ld+json">
          {`{
            "@context": "http://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage":{
            "@type":"WebPage",
            "@id":"${url}"
            },
            "headline": "${title}",
            "image": {
            "@type": "ImageObject",
            "url": "http://npmahjong.com/img/schema/463-700.png",
            "height": 463,
            "width": 700
            },
            "datePublished": "${datePublished}",
            "dateModified": "${dateEdited}",
            "author": {
            "@type": "Person",
            "name": "Nicolas Pro"
            },
            "publisher": {
            "@type": "Organization",
            "name": "NPmahjong",
            "logo": {
            "@type": "ImageObject",
            "url": "http://npmahjong.com/img/schema/550-60.png",
            "width": 550,
            "height": 60
            }
            },
            "description": "${description}",
            "articleBody": "${content}"
            }`}
        </script>
      </Head>
    </>
  );
};

export default SEO;
