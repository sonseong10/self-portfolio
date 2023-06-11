import React, {type ReactNode} from 'react';
import media from '../../assets/styles/constants/media';
import palette from '../../assets/styles/constants/palette';
import {gnbLevel} from '../../assets/styles/constants/z-index';
import styled from 'styled-components';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({children}: ILayoutProps) => {
  return <Container>{children}</Container>;
};

export default Layout;

interface IHeaderProps {
  children: ReactNode;
}

const Header = ({children}: IHeaderProps) => {
  return (
    <GlobalHeader>
      <Container>{children}</Container>
    </GlobalHeader>
  );
};

interface IMainProps {
  children: ReactNode;
}

const Main = ({children}: IMainProps) => {
  return <Container as="main">{children}</Container>;
};

interface IFooterProps {
  children: ReactNode;
}
const Footer = ({children}: IFooterProps) => {
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
  padding: 0 10px;
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
