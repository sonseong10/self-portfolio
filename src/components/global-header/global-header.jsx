import { css } from "@emotion/react";
import React from "react";
import logo from "../../assets/images/logo.svg";
import media from "../../assets/styles/constants/media";
import palette from "../../assets/styles/constants/palette";
import Layout from "../layout";
import Gnb from "../navigation/gnb";

const GlobalHeader = () => {
  return (
    <header css={globalHeader}>
      <Layout>
        <div css={row}>
          <figure css={logoWrap}>
            <img src={logo} alt="" />
            <figcaption className="sr-only">Brand logo</figcaption>
          </figure>

          <Gnb />
        </div>
      </Layout>
    </header>
  );
};
const globalHeader = css`
  position: sticky;
  top: 0;
  height: 60px;
  background-color: ${palette.white};
  border-bottom: 1px solid ${palette.gray[500]};
`;

const row = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
`;

const logoWrap = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-right: 12px;
  width: 40px;
  height: 40px;
  padding: 8px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.tablet} {
    margin-right: 80px;
  }
`;

export default GlobalHeader;
