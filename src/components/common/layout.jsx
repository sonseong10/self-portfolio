import React from "react";
import { css } from "@emotion/react";
import media from "../../assets/styles/constants/media";
import palette from "../../assets/styles/constants/palette";
import { gnbLevel } from "../../assets/styles/constants/z-index";

const Layout = ({ children }) => {
  return <div css={container}>{children}</div>;
};

export default Layout;

const Header = ({ children }) => {
  return (
    <header css={globalHeader}>
      <div css={container}>{children}</div>
    </header>
  );
};

const Main = ({ children }) => {
  return <main css={container}>{children}</main>;
};

const Footer = ({ children }) => {
  return (
    <footer css={globalFooter}>
      <div css={container}>{children}</div>
    </footer>
  );
};

Layout.Header = Header;
Layout.Main = Main;
Layout.Footer = Footer;

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

const globalHeader = css`
  position: sticky;
  top: 0;
  height: 60px;
  background-color: ${palette.white};
  border-bottom: 1px solid ${palette.gray[500]};
  z-index: ${gnbLevel};
`;

const globalFooter = css`
  background-color: ${palette.gray[600]};
  border-top: 1px solid ${palette.gray[500]};
`;
