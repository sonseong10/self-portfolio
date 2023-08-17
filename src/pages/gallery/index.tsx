import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import styled from 'styled-components';
import type {IArtWorkData} from 'types/type';

const ImgWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  padding: 26px 0;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const LodingText = styled.p`
  text-align: center;
`;

interface IGalleryProps {
  artwork: IArtWorkData[];
}

const Gallery = ({artwork}: IGalleryProps) => {
  const history = useNavigate();
  const {uid} = useParams();

  const [item, setItem] = useState<IArtWorkData | undefined>(undefined);
  useEffect(() => {
    if (uid && Number(uid) <= artwork.length - 1) {
      setItem({...artwork[Number(uid)]});
    } else {
      history('/error');
    }
    window.scrollTo(0, 0);
  }, [artwork, uid]);

  return (
    <ImgWrap>
      {item?.designURL ? (
        <img src={item.designURL} alt={`${item.designURL} Design result`} />
      ) : (
        <LodingText>Loding...</LodingText>
      )}
    </ImgWrap>
  );
};

export default React.memo(Gallery);
