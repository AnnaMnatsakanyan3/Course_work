import styled from 'styled-components/macro';

export const Self = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  > button {
    margin-top: 20px;
  }
  @media (min-width: 768px) {
    width: 300px;
  }
`;
export const Information = styled.span`
  display: flex;
  color: #636363;
  flex-direction: column;
  font-size: 20px;
  height: 100%;
  margin-top: 40px;
  list-style-type: none;
  > li {
    margin-bottom: 10px;
  }
`;
