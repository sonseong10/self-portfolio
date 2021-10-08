import React from "react";
import { css } from "@emotion/react";
import media from "../../assets/styles/constants/media";
import palette from "../../assets/styles/constants/palette";
import typography from "../../assets/styles/constants/typograpy";
import SectionHeader from "../section-header/section-header";

const Promotion = () => {
  return (
    <section css={section}>
      <div className="sr-only">
        <SectionHeader title="promotion" />
      </div>

      <p css={row} className="left">
        <span css={decoration} className="space">
          I'm have a
        </span>
        <span css={side}>
          Grid Layout System <br /> knowledge
        </span>
      </p>

      <p css={row} className="center">
        <span css={decoration} className="regular">
          Logo and illustration
        </span>
      </p>

      <p css={row} className="right">
        <span css={side} className="space">
          for
          <br /> Web Design
        </span>
        <span css={decoration}>experience</span>
      </p>
    </section>
  );
};

export default Promotion;

const section = css`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 60px;

  ${media.tablet} {
    height: 600px;
  }
`;

const row = css`
  display: flex;
  align-items: center;
  margin: 0;

  &.left {
    justify-content: flex-start;
  }

  &.center {
    justify-content: center;
  }

  &.right {
    justify-content: flex-end;
  }

  &:not(:last-of-type) {
    margin-bottom: 8px;
  }

  ${media.tablet} {
    &:not(:last-of-type) {
      margin-bottom: 12px;
    }
  }

  .space {
    margin-right: 8px;

    ${media.tablet} {
      margin-right: 32px;
    }
  }
`;

const decoration = css`
  margin: 0;
  font-size: 32px;
  color: ${palette.gray[100]};
  font-weight: 700;

  &.regular {
    font-weight: 400;
  }

  ${media.tablet} {
    font-size: 80px;

    span {
      ${typography.base}
    }
  }

  ${media.desktop} {
    font-size: 120px;
  }
`;

const side = css`
  ${typography.small}
  color: ${palette.gray[300]};

  ${media.tablet} {
    ${typography.base}
  }
`;
