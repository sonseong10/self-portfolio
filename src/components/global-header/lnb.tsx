import React, {useEffect, useState} from 'react';
import {resetButton} from '../../assets/styles/components/reset-button';
import media from '../../assets/styles/constants/media';
import palette from '../../assets/styles/constants/palette';
import typography from '../../assets/styles/constants/typograpy';
import {useLocation, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import type {IArtWorkData} from 'types/type';

interface ILnbProps {
  artwork: IArtWorkData[];
}
const Lnb = ({artwork}: ILnbProps) => {
  const history = useNavigate();
  const location = useLocation();

  const [item, setItem] = useState<{title: string}>();

  useEffect(() => {
    const pathname = location.pathname;
    const uid = pathname.charAt(pathname.length - 1);
    setItem({...artwork[Number(uid)]});
  }, [artwork, location.pathname]);

  const goToBack = () => {
    history(-1);
  };

  return (
    <>
      {item && <Title>{item.title}</Title>}

      <BackBtn onClick={goToBack} type="button" aria-label="Go back">
        Back
      </BackBtn>
    </>
  );
};

export default Lnb;

const Title = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  ${typography.base}
  color: ${palette.gray[100]};
  font-weight: 400;
  transform: translate(-50%, -50%);
`;

const BackBtn = styled.button`
  position: absolute;
  right: 0;
  ${resetButton}
  padding: 0 8px;
  height: 46px;
  ${typography.small}
  font-weight: 700;
  color: ${palette.gray[100]};

  :active {
    color: ${palette.brandTheme};
  }

  ${media.tablet} {
    ${typography.base}
    :hover {
      color: ${palette.brandTheme};
    }
  }
`;
