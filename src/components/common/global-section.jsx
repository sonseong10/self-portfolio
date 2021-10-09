import React from "react";
import { css } from "@emotion/react";
import media from "../../assets/styles/constants/media";

const GlobalSection = ({ children }) => {
  return <section css={section}>{children}</section>;
};

export default GlobalSection;

const section = css`
  margin-bottom: 60px;

  ${media.desktop} {
    margin-bottom: 100px;
  }
`;
