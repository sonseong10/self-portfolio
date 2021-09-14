import React from "react";
import { css } from "@emotion/react";
import logo from "../../assets/images/logo.svg";
import media from "../../assets/styles/constants/media";
import Gnb from "./gnb";

const GlobalHeader = () => {
  return (
    <div css={headerWrapper}>
      <figure css={logoWrap}>
        <img src={logo} alt="" />
        <figcaption className="sr-only">Brand logo</figcaption>
      </figure>

      <Gnb />
    </div>
  );
};

export default GlobalHeader;

const headerWrapper = css`
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
