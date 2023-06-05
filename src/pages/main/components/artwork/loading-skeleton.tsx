import typography from 'assets/styles/constants/typograpy';
import React from 'react';

import styled from 'styled-components';

const LoadingSkeleton = () => {
  return (
    <Skeleton>
      <p>Loading image</p>
    </Skeleton>
  );
};

const Skeleton = styled.div`
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
