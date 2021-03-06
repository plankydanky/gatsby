/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** @jsx jsx */
import { jsx, Heading, Link as TLink, Divider } from "theme-ui";
import { Link } from "gatsby";
import { Flex } from "@theme-ui/components";
import Layout from "./layout";
import BlogList from "./blog-list";
import { useMinimalBlogConfig } from "../hooks";
import replaceSlashes from "../utils/replaceSlashes";
import { Post } from "../types/post";
import SEO from "./seo";

export type BlogProps = {
  posts: Post[];
};

export const Blog: React.FC<BlogProps> = ({ posts }) => {
  const { tagsPath, basePath } = useMinimalBlogConfig();

  return (
    <Layout>
      <SEO title="Blog" />
      <Flex sx={{ alignItems: `baseline`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Heading>Blog</Heading>
        {/* @ts-ignore */}
        <TLink as={Link} sx={{ variant: `links.secondary` }} to={replaceSlashes(`/${basePath}/${tagsPath}`)}>
          View all tags
        </TLink>
      </Flex>
      <Divider variant="dividers.pageHeading" />
      <BlogList posts={posts} />
    </Layout>
  );
};

export default Blog;
