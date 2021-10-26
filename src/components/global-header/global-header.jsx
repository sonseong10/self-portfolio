import React from "react";
import { css } from "@emotion/react";
import logo from "../../assets/images/logo.svg";
import media from "../../assets/styles/constants/media";
import Gnb from "./gnb";
import { resetButton } from "../../assets/styles/components/reset-button";
import palette from "../../assets/styles/constants/palette";
import { useHistory, Route } from "react-router-dom";
import typography from "../../assets/styles/constants/typograpy";

const GlobalHeader = ({ sectionRef }) => {
  const history = useHistory();
  const goToRoot = () => {
    history.push("/");
    window.scrollTo(0, 0);
  };

  const test = () => {
    history.goBack();
  };

  return (
    <div css={headerWrapper}>
      <button onClick={goToRoot} css={rootBtn}>
        <figure css={logoWrap}>
          <img src={logo} alt="" />
          <figcaption className="sr-only">Brand logo</figcaption>
        </figure>
      </button>

      <Route path="/" exact>
        <Gnb sectionRef={sectionRef} />
      </Route>

      <Route path="/artwork/:uid">
        <button css={backBtn} onClick={test} type="button">
          Back
        </button>
      </Route>
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

const backBtn = css`
  position: absolute;
  right: 0;
  ${resetButton}
  padding: 0 8px;
  height: 46px;
  ${typography.small}
  font-weight: 400;
  color: ${palette.gray[100]};

  :active {
    color: ${palette.brandTheme};
  }

  ${media.tablet} {
    ${typography.base}
    :hover {
      color: ${palette.brandTheme};
    }
  }
`;
