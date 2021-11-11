import React from "react";
import { css } from "@emotion/react";
import SkillBar from "./progress/skill-bar";
import LoadingSkeleton from "./loading-skeleton";

const SkillList = ({ list, sectionRef, loading }) => {
  return (
    <ul css={listStyle}>
      {loading ? (
        <LoadingSkeleton count={9} />
      ) : (
        list.map((item) => (
          <SkillBar key={item.uid} item={item} sectionRef={sectionRef} />
        ))
      )}
    </ul>
  );
};

export default SkillList;

const listStyle = css`
  margin: 0;
  padding-left: 0;
  list-style: none;
`;
