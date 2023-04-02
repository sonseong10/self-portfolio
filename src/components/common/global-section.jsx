import React, { forwardRef } from "react";
import media from "../../assets/styles/constants/media";
import styled from "styled-components";

const GlobalSection = forwardRef(({ children }, ref) => {
  return <SectionStyle ref={ref}>{children}</SectionStyle>;
});

export default GlobalSection;

const SectionStyle = styled.section`
  margin-bottom: 60px;

  ${media.desktop} {
    margin-bottom: 100px;
  }
`;
