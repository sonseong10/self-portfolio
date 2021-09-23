import React from "react";
import { css } from "@emotion/react";
import media from "../../assets/styles/constants/media";
import SectionHeader from "../section-header/section-header";
import LeftGroup from "./left-group/left-group";
import RightGroup from "./right-group/right-group";

const Skill = () => {
  return (
    <section css={section}>
      <SectionHeader title={"Skills"} />

      <div css={sectionBody}>
        <LeftGroup />

        <RightGroup />
      </div>
    </section>
  );
};

export default Skill;

const section = css`
  margin: 40px 0;
`;

const sectionBody = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    width: 100%;

    &:first-of-type {
      margin-bottom: 60px;
    }
  }

  ${media.tablet} {
    flex-direction: row;

    > div {
      width: 350px;

      &:first-of-type {
        margin-bottom: 0;
      }
    }
  }

  ${media.desktop} {
    > div {
      width: 500px;
    }
  }
`;
