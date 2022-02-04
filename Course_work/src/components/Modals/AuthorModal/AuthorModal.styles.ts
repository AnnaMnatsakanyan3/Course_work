import styled, { keyframes } from 'styled-components';

export const Self = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const Title = styled.h1`
  color: #636363;
  margin-bottom: 40px;
`;

export const Gradient = keyframes`
0% {
    color: #212121;
  }
  10% {
    color: #8e44ad;
  }
  20% {
    color: #1abc9c;
  }
  30% {
    color: #d35400;
  }
  40% {
    color: blue;
  }
  50% {
    color: #34495e;
  }
  60% {
    color: blue;
  }
  70% {
    color: #2980b9;
  }
  80% {
    color: #f1c40f;
  }
  90% {
    color: #2980b9;
  }
  100% {
    color: pink;
  }
`;

export const Information = styled.ul`
  display: flex;
  justify-content: center;
  color: #636363;
  flex-direction: column;
  font-size: 20px;
  list-style-type: none;
  height: 100%;
  margin-bottom: 40px;
  > li {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    > p {
      margin-right: 10px;
      font-weight: bold;
    }
    margin-top: 5px;
    :first-child {
      margin-top: 0;
    }
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    > img {
      margin-top: 15px;
      width: 250px;
    }
  }
`;
export const Animate = styled.p`
  color: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 200% 300%;
  animation: ${Gradient} 10s ease infinite;
`;
