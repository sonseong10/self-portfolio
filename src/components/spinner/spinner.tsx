import React from 'react';
import styled, {keyframes} from 'styled-components';

const rotation = keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
`;

const Loading = styled.span`
  width: 70px;
  height: 70px;
  border: 7px solid #0066ff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: block;
  box-sizing: border-box;
  margin: 0 auto;
  animation: ${rotation} 1s linear infinite;
`;

function Spinner() {
  return <Loading></Loading>;
}

export default Spinner;
