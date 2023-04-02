import React from "react";
import palette from "../../assets/styles/constants/palette";
import typography from "../../assets/styles/constants/typograpy";
import styled from "styled-components";

const SectionHeader = ({ title }) => {
  return (
    <SectionHeaderStyle>
      <h2>{title}</h2>
    </SectionHeaderStyle>
  );
};

export default SectionHeader;

const SectionHeaderStyle = styled.div`
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
