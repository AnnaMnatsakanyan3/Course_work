import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
const Rotate2 = keyframes`
  0% {
    transform: translate(30px, 30px);
    background-color: #57D3F6;
  }
  35% {
    transform: translate(-10px, -6px);
    background-color: #3C92D4;
  }
  70% {
    transform: translate(30px, -6px);
    background-color: #2558B6;
  }
  100% {
    transform: translate(30px, 30px);
    background-color: #3C92D4;
  }
`;
const Rotate = keyframes`
  0% {
    transform: translate(-10px, -6px);
    background-color: #3C92D4;
  }
  35% {
    transform: translate(30px, -6px);
    background-color: #2558B6;
  }
  70% {
    transform: translate(30px, 30px);
    background-color: #3C92D4;
  }
  100% {
    transform: translate(-10px, -6px);
    background-color: #57D3F6;
  }
`;
const Balls = styled.div`
  height: 30px;
  width: 30px;
  position: relative;
  display: inline-block;
  :after,
  :before {
    content: '';
    height: 15px;
    width: 15px;
    border-radius: 50%;
    position: absolute;
  }
  :after {
    animation: ${Rotate} 2s infinite linear;
  }
  :before {
    animation: ${Rotate2} 2s infinite linear;
  }
  box-sizing: border-box;
`;

export const Self = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const Loader: React.FC = () => {
  return (
    <Self>
      <Balls />
    </Self>
  );
};
