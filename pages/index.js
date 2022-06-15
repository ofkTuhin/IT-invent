import Banner from "components/Banner";
import Layout from "components/Layout";
import { getSingleFileData } from "liv/md_read";

export default function Home({ indexPageData: { frontmatter, content } }) {
  return (
    <Layout>
      <Banner frontmatter={frontmatter} content={content} />
    </Layout>
  );
}

export const getStaticProps = () => {
  const indexPageData = getSingleFileData("content/_index.md");

  return {
    props: {
      indexPageData: indexPageData,
    },
  };
};
