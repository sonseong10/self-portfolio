import React from "react";
import { css } from "@emotion/react";
import typography from "../../assets/styles/constants/typograpy";

const LoadingSkeleton = () => {
  return (
    <div css={skeleton}>
      <p>Loading image</p>
    </div>
  );
};

const skeleton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 410px;
  ${typography.lage}
  font-weight: 700;
  animation: twinkle 2s infinite alternate;

  @keyframes twinkle {
    0% {
      opacity: 0.4;
    }

    100% {
      opacity: 0.8;
    }
  }
`;

export default LoadingSkeleton;
