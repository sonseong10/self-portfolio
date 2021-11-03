import React from "react";
import { css } from "@emotion/react";
import media from "../../assets/styles/constants/media";

const SectionBody = ({ children, style }) => {
  return <div css={sectionBody(style)}>{children}</div>;
};

const Inner = ({ children, ratio = 1, innerStyle }) => {
  return <div css={inner(ratio, innerStyle)}>{children}</div>;
};

SectionBody.Inner = Inner;

export default SectionBody;

const sectionBody = (style) => css`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  ${media.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  > div:first-of-type {
    margin-bottom: 12px;

    ${media.tablet} {
      margin-bottom: 0;
    }
  }

  ${style}
`;

const inner = (ratio, style) => css`
  flex: 1 1;

  ${media.desktop} {
    flex: ${ratio};
  }
  ${style};
`;
