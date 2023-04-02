import React from "react";
import media from "../../assets/styles/constants/media";
import palette from "../../assets/styles/constants/palette";
import { gnbLevel } from "../../assets/styles/constants/z-index";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;

const Header = ({ children }) => {
  return (
    <GlobalHeader>
      <Container>{children}</Container>
    </GlobalHeader>
  );
};

const Main = ({ children }) => {
  return <Container as="main">{children}</Container>;
};

const Footer = ({ children }) => {
  return (
    <GlobalFooter>
      <Container>{children}</Container>
    </GlobalFooter>
  );
};

Layout.Header = Header;
Layout.Main = Main;
Layout.Footer = Footer;

const Container = styled.div`
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

const GlobalHeader = styled.header`
  position: sticky;
  top: 0;
  height: 60px;
  background-color: ${palette.white};
  border-bottom: 1px solid ${palette.gray[500]};
  z-index: ${gnbLevel};
`;

const GlobalFooter = styled.footer`
  background-color: ${palette.gray[600]};
  border-top: 1px solid ${palette.gray[500]};
`;
