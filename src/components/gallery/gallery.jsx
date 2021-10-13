import { css } from "@emotion/react";
import React from "react";
import { useLocation } from "react-router";

const Gallery = ({ artwork }) => {
  const location = useLocation();
  const uid = location.state.uid - 1;

  console.log(uid);

  return (
    <div css={imgWrap}>
      <img src={uid !== null && artwork[uid].designURL} alt="test" />
    </div>
  );
};

export default Gallery;

const imgWrap = css`
  width: 100%;
  margin: 0 auto;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
