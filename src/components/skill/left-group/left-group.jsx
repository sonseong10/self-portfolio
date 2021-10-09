import React from "react";
import { css } from "@emotion/react";
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
`;
