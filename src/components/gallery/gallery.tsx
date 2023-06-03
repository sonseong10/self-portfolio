import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import styled from 'styled-components';

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
  artwork: any;
}

const Gallery = ({artwork}: IGalleryProps) => {
  const history = useNavigate();
  const {uid} = useParams();

  const [item, setUid] = useState({});
  useEffect(() => {
    if (uid && Number(uid) <= artwork.length - 1) {
      setUid({...artwork[uid]});
    } else {
      history('/error');
    }
    window.scrollTo(0, 0);
  }, [artwork, uid, history]);

  const {designURL}: any = item;

  return (
    <ImgWrap>
      {designURL ? <img src={designURL} alt={`${designURL} Design result`} /> : <LodingText>Loding...</LodingText>}
    </ImgWrap>
  );
};

export default React.memo(Gallery);
