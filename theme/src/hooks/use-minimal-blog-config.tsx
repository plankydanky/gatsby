/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { graphql, useStaticQuery } from "gatsby";

export type UseMinimalBlogConfigProps = {
  minimalBlogConfig: {
    basePath: string;
    blogPath: string;
    postsPath: string;
    pagesPath: string;
    tagsPath: string;
    externalLinks: {
      name: string;
      url: string;
    }[];
    navigation: {
      title: string;
      slug: string;
    }[];
    showLineNumbers: boolean;
  };
};

export const useMinimalBlogConfig = () => {
  const data = useStaticQuery<UseMinimalBlogConfigProps>(graphql`
    query {
      minimalBlogConfig {
        basePath
        blogPath
        postsPath
        pagesPath
        tagsPath
        externalLinks {
          name
          url
        }
        navigation {
          title
          slug
        }
        showLineNumbers
      }
    }
  `);

  return data.minimalBlogConfig;
};

export default useMinimalBlogConfig;
