import { css } from "@emotion/react";
import React from "react";
import SkillList from "./skill-list";

const LeftGroup = () => {
  // TODO: 서버 연결하기
  const frontList = [
    { uid: 1, name: "HTML", score: 80 },
    { uid: 2, name: "CSS", score: 80 },
    { uid: 3, name: "Vue", score: 40 },
    { uid: 4, name: "React", score: 50 },
    { uid: 5, name: "JavaScript", score: 70 },
    { uid: 6, name: "TypeScript", score: 40 },
  ];

  const backList = [
    { uid: 1, name: "Node", score: 40 },
    { uid: 2, name: "JAVA", score: 20 },
    { uid: 3, name: "MySQL", score: 30 },
  ];

  return (
    <div css={leftGroup}>
      <div>
        <SkillList list={frontList} />
      </div>

      <div>
        <SkillList list={backList} />
      </div>
    </div>
  );
};

export default LeftGroup;

const leftGroup = css`
  > div:first-of-type {
    margin-bottom: 40px;
  }
`;
