import React, {type ForwardedRef, type ReactNode} from 'react';
import media from '../../assets/styles/constants/media';
import styled from 'styled-components';

interface IGlobalSectionProps {
  children: ReactNode;
}

const GlobalSection = ({children}: IGlobalSectionProps, ref: ForwardedRef<HTMLElement>) => {
  return <SectionStyle ref={ref}>{children}</SectionStyle>;
};

export default React.forwardRef<HTMLElement, IGlobalSectionProps>(GlobalSection);

const SectionStyle = styled.section`
  margin-bottom: 60px;

  ${media.desktop} {
    margin-bottom: 100px;
  }
`;
