import React, { memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Gallery = memo(({ artwork }) => {
  const history = useNavigate();
  const { uid } = useParams();

  const [item, setUid] = useState({});
  useEffect(() => {
    if (uid <= artwork.length - 1) {
      setUid({ ...artwork[uid] });
    } else {
      history("/error");
    }
    window.scrollTo(0, 0);
  }, [artwork, uid, history]);

  const { designURL } = item;

  return (
    <ImgWrap>
      {designURL ? (
        <img src={designURL} alt={`${designURL} Design result`} />
      ) : (
        <LodingText>Loding...</LodingText>
      )}
    </ImgWrap>
  );
});

export default Gallery;

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
