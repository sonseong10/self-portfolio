import React, { memo, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { useHistory, useRouteMatch } from "react-router";

const Gallery = memo(({ artwork }) => {
  const history = useHistory();
  const match = useRouteMatch();
  const uid = match.params.uid;

  const [item, setUid] = useState({});
  useEffect(() => {
    if (uid <= artwork.length - 1) {
      setUid({ ...artwork[uid] });
    } else {
      history.push("/error");
    }
  }, [artwork, uid, history]);

  const { designURL } = item;

  return (
    <div css={imgWrap}>
      {designURL ? (
        <img src={designURL} alt="Design result" />
      ) : (
        <p css={loding}>Loding...</p>
      )}
    </div>
  );
});

export default Gallery;

const imgWrap = css`
  width: 100%;
  margin: 0 auto;
  padding: 26px 0;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const loding = css`
  text-align: center;
`;
