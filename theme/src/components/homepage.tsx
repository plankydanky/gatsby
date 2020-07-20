/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @jsx jsx */
import React from "react";
import { jsx, Box } from "theme-ui";
import { Link } from "gatsby";
import Layout from "./layout";
import Title from "./title";
import Listing from "./listing";
import List from "./list";
import { useMinimalBlogConfig } from "../hooks";
import replaceSlashes from "../utils/replaceSlashes";
// @ts-ignore
import Hero from "../texts/hero";
// @ts-ignore
import Bottom from "../texts/bottom";
import Slide from "./slide";

type PostsProps = {
  posts: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead?: number;
    tags?: {
      name: string;
      slug: string;
    }[];
  }[];
};

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig();

  return (
    <Layout hasTransparentHeader hasFullWidthContainer>
      <Slide id="intro" isBorderless />
      <Slide id="work" imagePosition="0% 0%" />

      {/* TODO Restyle all of the blog related content below to fit the Slides concept */}

      {false && (
        <React.Fragment>
          <section sx={{ mb: [10, null, null, null, 11], p: { fontSize: [2, null, 3, null, 4], mt: 2 } }}>
            <Hero />
          </section>
          <Title text="Latest Posts">
            <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
          </Title>
          <Listing posts={posts} showTags={false} />
          <List>
            <Bottom />
          </List>
        </React.Fragment>
      )}
    </Layout>
  );
};

export default Homepage;
