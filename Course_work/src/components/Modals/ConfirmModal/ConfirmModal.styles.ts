import styled from 'styled-components/macro';

export const Self = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h2`
  color: #636363;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 80px;
  flex-direction: row;
  > button {
    :first-child {
      margin-right: 10px;
    }
  }
`;
