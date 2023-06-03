import React, {forwardRef} from 'react';
import media from '../../assets/styles/constants/media';
import styled from 'styled-components';

interface IGlobalSectionProps {
  ref: any;
  children: any;
}

const GlobalSection = ({ref, children}: IGlobalSectionProps) => {
  return <SectionStyle ref={ref}>{children}</SectionStyle>;
};

export default forwardRef(GlobalSection);

const SectionStyle = styled.section`
  margin-bottom: 60px;

  ${media.desktop} {
    margin-bottom: 100px;
  }
`;
