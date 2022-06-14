import Layout from "components/Layout";
import { getRegulerPageData } from "liv/md_read";

export default function Home() {
  return (
    <Layout>
      <div className=""></div>
    </Layout>
  );
}

export const getStaticProps = () => {
  const data = getRegulerPageData();
  return {
    props: {
      post: "posts",
    },
  };
};
