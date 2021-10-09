import React from "react";
import { css } from "@emotion/react";
import media from "../../assets/styles/constants/media";

const SectionBody = ({ children }) => {
  return <div css={sectionBody}>{children}</div>;
};

const Inner = ({ children, ratio = 1, innerStyle }) => {
  return <div css={inner(ratio, innerStyle)}>{children}</div>;
};

SectionBody.Inner = Inner;

export default SectionBody;

const sectionBody = css`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  ${media.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const inner = (ratio, style) => css`
  flex: 1 1;

  ${media.desktop} {
    flex: ${ratio};
  }
  ${style};
`;
