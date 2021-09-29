import React from "react";
import { css } from "@emotion/react";
import media from "../../assets/styles/constants/media";
import SectionHeader from "../section-header/section-header";
import LeftGroup from "./left-group/left-group";
import RightGroup from "./right-group/right-group";

const Skill = ({ skills }) => {
  return (
    <section css={section}>
      <SectionHeader title={"Skills"} />

      <div css={sectionBody}>
        <LeftGroup skills={skills} />

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
  justify-content: space-around;

  > div {
    width: 100%;

    &:first-of-type {
      margin-bottom: 40px;
    }
  }

  ${media.tablet} {
    flex-direction: row;

    > div {
      width: 340px;

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
