/** @jsx jsx */
import React from "react";
import PropTypes from "prop-types";
import { jsx } from "theme-ui";

export type ToggleMenuProps = {
  isOpen: boolean;
};

export const ToggleMenu: React.FC<ToggleMenuProps> = (props) => {
  return (
    <nav sx={sxNav(props.isOpen)}>
      <a href="/">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        Pricing
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </a>
    </nav>
  );
};
export default ToggleMenu;

ToggleMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

/**
 * Styles
 */

const sxNav = (isOpen: boolean) => ({
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  backgroundColor: `muted`,
  height: `100vh`,
  width: `25vw`,
  textAlign: `center`,
  padding: 3,
  position: `fixed`,
  top: 0,
  left: 0,
  transform: isOpen ? `translateX(0)` : `translateX(-100%)`,
  transition: `transform 300ms ease-in-out`,
});
