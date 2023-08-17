import React, {type ForwardedRef, type ReactNode} from 'react';
import media from '../../assets/styles/constants/media';
import styled from 'styled-components';

interface IGlobalSectionProps {
  children: ReactNode;
}

const GlobalSection = ({children}: IGlobalSectionProps, ref: ForwardedRef<HTMLDivElement>) => {
  return <SectionStyle ref={ref}>{children}</SectionStyle>;
};

export default React.forwardRef<HTMLDivElement, IGlobalSectionProps>(GlobalSection);

const SectionStyle = styled.div`
  padding: 0 10px;
  margin-bottom: 60px;

  ${media.desktop} {
    margin-bottom: 100px;
  }
`;
