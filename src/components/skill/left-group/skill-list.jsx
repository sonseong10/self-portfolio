import React from "react";
import { css } from "@emotion/react";
import SkillBar from "./progress/skill-bar";

const SkillList = ({ list, sectionRef }) => {
  return (
    <ul css={listStyle}>
      {list &&
        list.map((item) => (
          <SkillBar key={item.uid} item={item} sectionRef={sectionRef} />
        ))}
    </ul>
  );
};

export default SkillList;

const listStyle = css`
  margin: 0;
  padding-left: 0;
  list-style: none;
`;
