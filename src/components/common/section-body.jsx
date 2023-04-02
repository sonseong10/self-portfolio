import React from "react";
import media from "../../assets/styles/constants/media";
import styled from "styled-components";

const SectionBody = ({ children, style }) => {
  return <SectionBodyStyle style={style}>{children}</SectionBodyStyle>;
};

const Inner = ({ children, ratio = 1, innerStyle }) => {
  return (
    <InnerStyle ratio={ratio} innerStyle={innerStyle}>
      {children}
    </InnerStyle>
  );
};

SectionBody.Inner = Inner;

export default SectionBody;

const SectionBodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  ${media.tablet} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  > div:first-of-type {
    margin-bottom: 12px;

    ${media.tablet} {
      margin-bottom: 0;
    }
  }

  ${(props) => props.style}
`;

const InnerStyle = styled.div`
  flex: 1 1;

  ${media.desktop} {
    flex: ${(props) => props.ratio};
  }
  ${(props) => props.style};
`;
