import React from 'react';
import logo from '../../../assets/images/logo.svg';
import media from '../../../assets/styles/constants/media';
import Gnb from './gnb';
import {resetButton} from '../../../assets/styles/components/reset-button';
import palette from '../../../assets/styles/constants/palette';
import {useLocation, useNavigate} from 'react-router-dom';
import Lnb from './lnb';
import styled from 'styled-components';
import type {IArtWorkData} from 'types/type';

interface IGlobalHeaderProps {
  sectionRef: React.MutableRefObject<HTMLElement[]>;
  artwork: IArtWorkData[];
  toggleTheme: () => void;
  theme: string;
}

const GlobalHeader = ({sectionRef, artwork, toggleTheme, theme}: IGlobalHeaderProps) => {
  const history = useNavigate();
  const loaction = useLocation();

  const goToRoot = () => {
    history('/');
    window.scrollTo(0, 0);
  };

  return (
    <HeaderWrapper>
      <RootBtn onClick={goToRoot}>
        <LogoImage>
          <img src={logo} alt="" />
          <figcaption className="sr-only">Brand logo</figcaption>
        </LogoImage>
      </RootBtn>

      {loaction.pathname.includes('art') ? (
        <Lnb artwork={artwork} />
      ) : (
        <Gnb sectionRef={sectionRef} toggleTheme={toggleTheme} theme={theme} />
      )}
    </HeaderWrapper>
  );
};

export default GlobalHeader;

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 60px;
`;

const RootBtn = styled.button`
  ${resetButton}
  background-color: ${palette.white};
  margin-right: 12px;

  ${media.tablet} {
    margin-right: 80px;
  }
`;

const LogoImage = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 40px;
  height: 40px;
  padding: 8px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
