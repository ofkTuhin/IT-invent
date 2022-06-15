import bannerStyle from "@/styles/banner.module.css";

const Banner = ({ frontmatter: { banner } }) => {
  return (
    <div
      className={`${bannerStyle.banner}`}
      style={{ backgroundImage: `url(${banner.image})` }}
    >
      <div className={`container ${bannerStyle.container}`}>
        <div className={bannerStyle.bannerContentContainer}>
          <div className={bannerStyle.bannerContent}>
            <h1>{banner.title}</h1>
            <p>{banner.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
