import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useRouteMatch } from "react-router";

const Gallery = ({ artwork }) => {
  const match = useRouteMatch();

  const [item, setUid] = useState({});

  useEffect(() => {
    setUid({ ...artwork[match.params.uid] });
  }, [artwork, match.params.uid]);

  const { designURL } = item;

  return (
    <div css={imgWrap}>
      <img src={designURL} alt="Design result" />
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
