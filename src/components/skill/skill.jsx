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
  margin: 60px 0;
`;

const sectionBody = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  ${media.tablet} {
    flex-direction: row;
  }
`;
