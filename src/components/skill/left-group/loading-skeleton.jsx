import React from "react";
import { css } from "@emotion/react";
import palette from "../../../assets/styles/constants/palette";

const LoadingSkeleton = ({ count }) => {
  const renderItem = (count) => {
    const result = [];

    for (let i = 0; i <= count - 1; i++) {
      result.push(
        <li key={i} css={skeleton} aria-label="loading">
          <div></div>
        </li>
      );
    }
    return result;
  };

  return <>{renderItem(count)}</>;
};

const skeleton = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 24px;
  margin-bottom: 12px;

  > div {
    height: 12px;
    background-color: ${palette.gray[400]};
    flex: 1;
    animation: twinkle 2s infinite alternate;
  }

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
