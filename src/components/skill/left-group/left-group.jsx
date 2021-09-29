import React from "react";
import SkillList from "./skill-list";

const LeftGroup = ({ skills }) => {
  return (
    <div>
      <SkillList list={skills} />
    </div>
  );
};

export default LeftGroup;
