import styled from 'styled-components/macro';

export const Self = styled.div`
  width: 200px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  > ul {
    margin-bottom: 15px;
    color: #636363;
    font-size: 20px;
    list-style-type: none;
    > a:link,
    p: {
      color: gray;
    }
  }
  @media (min-width: 768px) {
    width: 350px;
  }
`;

export const Title = styled.h1`
  color: #636363;
  margin-bottom: 20px;
`;
