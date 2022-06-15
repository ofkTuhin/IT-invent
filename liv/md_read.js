import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { convertJSON } from "./utils";

// singlefile data

export const getSingleFileData = (file) => {
  const singleFileData = fs.readFileSync(path.join(file), "utf-8");
  const { data, content } = matter(singleFileData);
  const frontmatter = convertJSON(data);
  return {
    frontmatter,
    content,
  };
};

export const getRegulerPageData = (type) => {
  const paths = fs.readdirSync(path.join(type));
  const regulerPages = paths
    .filter((file) => file.match(/^[a-z]/))
    .filter((file) => file.includes(".md" || ".mdx"));
  const regulerPageInfo = regulerPages.map((filename) => {
    const slug = filename.replace(/\.(md|mdx)/);
    const regulerPageData = fs.readFileSync(path.join(type, filename), "utf-8");
    const { data, content } = matter(regulerPageData);
    const frontmatter = convertJSON(data);
    return {
      slug,
      content,
      frontmatter,
    };
  });
  return regulerPageInfo;
};
