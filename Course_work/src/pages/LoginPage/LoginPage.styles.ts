import styled, { keyframes } from 'styled-components/macro';

export const Gradient = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

export const LoginPage = styled.div`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${Gradient} 15s ease infinite;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > button {
    margin-top: 100px;
    width: 250px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 40px;
`;
export const SubTitle = styled.h2`
  margin-top: 80px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
