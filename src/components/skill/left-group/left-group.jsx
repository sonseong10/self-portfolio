import { css } from "@emotion/react";
import React from "react";
import media from "../../../assets/styles/constants/media";
import SkillList from "./skill-list";

const LeftGroup = ({ skills }) => {
  return (
    <div css={leftGroup}>
      <SkillList list={skills} />
    </div>
  );
};

export default LeftGroup;

const leftGroup = css`
  width: 100%;

  ${media.tablet} {
    width: 50%;
  }

  ${media.desktop} {
    width: 60%;
  }
`;
