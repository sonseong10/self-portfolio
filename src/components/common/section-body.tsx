import React, {type ReactNode} from 'react';
import media from '../../assets/styles/constants/media';
import styled, {type CSSObject} from 'styled-components';

interface ISectionBodyProps {
  children: ReactNode;
  style?: CSSObject;
}

interface IInnerProps {
  children: ReactNode;
  ratio?: number;
  innerStyle?: CSSObject;
}

const SectionBody = ({children, style}: ISectionBodyProps) => {
  return <SectionBodyStyle style={style}>{children}</SectionBodyStyle>;
};

const Inner = ({children, ratio = 1, innerStyle}: IInnerProps) => {
  return (
    <InnerStyle ratio={ratio} innerStyle={innerStyle}>
      {children}
    </InnerStyle>
  );
};

SectionBody.Inner = Inner;

export default SectionBody;

const SectionBodyStyle = styled.div<{style?: CSSObject}>`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  ${media.tablet} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  > div:first-of-type {
    margin-bottom: 12px;

    ${media.tablet} {
      margin-bottom: 0;
    }
  }

  ${props => props.style}
`;

const InnerStyle = styled.div<{ratio?: number; innerStyle?: CSSObject}>`
  flex: 1 1;

  ${media.desktop} {
    flex: ${props => props.ratio};
  }
  ${props => props.innerStyle};
`;
