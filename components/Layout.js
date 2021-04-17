import SEO from "./SEO";
import Nav from "./Nav";
import Footer from "./Footer";
import blog from "../lib/blog";

const today = new Date().toISOString().slice(0, 10);

const Layout = ({
  children = "Nothing to see here",
  title = blog.title,
  description = blog.description,
  slug = "",
  image = blog.ogIMG,
  datePublished = "2020-10-10",
  dateEdited = today,
}) => {
  return (
    <>
      <SEO
        url={`https://npmahjong.com/${slug}`}
        title={title}
        description={description}
        imageUrl={image}
        imageAlt={title}
        datePublished={datePublished}
        dateEdited={dateEdited}
        content={children}
      />
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
