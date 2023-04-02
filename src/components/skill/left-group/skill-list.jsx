import React from "react";
import SkillBar from "./progress/skill-bar";
import LoadingSkeleton from "./loading-skeleton";
import styled from "styled-components";

const SkillList = ({ list, sectionRef, loading }) => {
  return (
    <ListStyle>
      {loading ? (
        <LoadingSkeleton count={9} />
      ) : (
        list.map((item) => (
          <SkillBar key={item.uid} item={item} sectionRef={sectionRef} />
        ))
      )}
    </ListStyle>
  );
};

export default SkillList;

const ListStyle = styled.ol`
  margin: 0;
  padding-left: 0;
  list-style: none;
`;
