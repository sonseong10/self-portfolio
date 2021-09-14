import React from "react";
import { css } from "@emotion/react";
import media from "../assets/styles/constants/media";

const Layout = ({ children }) => {
  return <div css={container}>{children}</div>;
};

export default Layout;

const Main = ({ children }) => {
  return <main>{children}</main>;
};

Layout.Main = Main;

const container = css`
  padding: 0 10px;
  width: 100%;
  margin: 0 auto;
  ${media.tablet} {
    max-width: 960px;
  }
  ${media.desktop} {
    max-width: 1140px;
  }
`;
