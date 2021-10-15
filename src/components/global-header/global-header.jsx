import React from "react";
import { css } from "@emotion/react";
import logo from "../../assets/images/logo.svg";
import media from "../../assets/styles/constants/media";
import Gnb from "./gnb";
import { resetButton } from "../../assets/styles/components/reset-button";
import palette from "../../assets/styles/constants/palette";
import { useHistory } from "react-router-dom";

const GlobalHeader = () => {
  const history = useHistory();
  const goToRoot = () => {
    history.push("/");
  };

  return (
    <div css={headerWrapper}>
      <button onClick={goToRoot} css={rootBtn}>
        <figure css={logoWrap}>
          <img src={logo} alt="" />
          <figcaption className="sr-only">Brand logo</figcaption>
        </figure>
      </button>

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

const rootBtn = css`
  ${resetButton}
  background-color: ${palette.white};
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
