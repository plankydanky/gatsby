/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** @jsx jsx */
import { Link } from "gatsby";
import { jsx } from "theme-ui";
import replaceSlashes from "../utils/replaceSlashes";
import useSiteMetadata from "../hooks/use-site-metadata";
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config";
import { SystemStyleObject } from "@styled-system/css";
import imgLogoDark from "../assets/logo-dark.svg";
import imgLogoLight from "../assets/logo-light.svg";

export type HeaderLogoProps = {
  isDark: boolean;
};

export const HeaderLogo: React.FC<HeaderLogoProps> = (props) => {
  const { siteTitle } = useSiteMetadata();
  const { basePath } = useMinimalBlogConfig();
  const { isDark } = props;

  return (
    <Link
      to={replaceSlashes(`/${basePath}`)}
      aria-label={`${siteTitle} - Back to home`}
      sx={{ color: `heading`, textDecoration: `none`, height: "100%" }}
    >
      <h1 sx={sxH1}>
        {isDark ? <img src={imgLogoDark} alt={siteTitle} /> : <img src={imgLogoLight} alt={siteTitle} />}
      </h1>
    </Link>
  );
};
export default HeaderLogo;

/**
 * Styles
 */

const sxH1: SystemStyleObject = {
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  margin: 0,
  paddingX: [2, null, null, null, 3, null, null, 4, null, 5],
  height: "100%",
  "& img": {
    height: ["24", null, null, null, "32"],
  },
};
