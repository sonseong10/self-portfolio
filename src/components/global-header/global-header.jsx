import React from "react";
import { css } from "@emotion/react";
import logo from "../../assets/images/logo.svg";
import media from "../../assets/styles/constants/media";
import Gnb from "./gnb";
import { resetButton } from "../../assets/styles/components/reset-button";
import palette from "../../assets/styles/constants/palette";
import { Route, Routes, useNavigate } from "react-router-dom";
import Lnb from "./lnb";

const GlobalHeader = ({ sectionRef, artwork, toggleTheme, theme }) => {
  const history = useNavigate();

  const goToRoot = () => {
    history("/");
    window.scrollTo(0, 0);
  };

  return (
    <div css={headerWrapper}>
      <button onClick={goToRoot} css={rootBtn}>
        <figure css={logoWrap}>
          <img src={logo} alt="" />
          <figcaption className="sr-only">Brand logo</figcaption>
        </figure>
      </button>

      {/* <Routes>
        <Route path="/" exact>
          <Gnb
            sectionRef={sectionRef}
            toggleTheme={toggleTheme}
            theme={theme}
          />
        </Route>

        <Route path="/artwork/:uid">
          <Lnb artwork={artwork} />
        </Route>
      </Routes> */}
    </div>
  );
};

export default GlobalHeader;

const headerWrapper = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
`;

const rootBtn = css`
  ${resetButton}
  background-color: ${palette.white};
  margin-right: 12px;

  ${media.tablet} {
    margin-right: 80px;
  }
`;

const logoWrap = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 40px;
  height: 40px;
  padding: 8px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
