import React from "react";
import { css } from "@emotion/react";
import SkillList from "./skill-list";

const LeftGroup = ({ skills, sectionRef, loading }) => {
  return (
    <div css={leftGroup}>
      <SkillList list={skills} sectionRef={sectionRef} loading={loading} />
    </div>
  );
};

export default LeftGroup;

const leftGroup = css`
  width: 100%;
`;
