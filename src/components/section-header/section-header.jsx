import React from "react";
import { css } from "@emotion/react";
import palette from "../../assets/styles/constants/palette";
import typography from "../../assets/styles/constants/typograpy";

const SectionHeader = ({ title }) => {
  return (
    <header css={sectionHeader}>
      <h2>{title}</h2>
    </header>
  );
};

export default SectionHeader;

const sectionHeader = css`
  height: 36px;
  margin-bottom: 26px;

  h2 {
    margin: 0;
    ${typography.lage}
    color: ${palette.gray[100]};
    text-align: center;
    font-weight: 400;
  }
`;
