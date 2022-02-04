import styled from 'styled-components/macro';

export const Self = styled.div`
  width: 100%;
  height: 270px;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 450px;
  }
`;

export const Title = styled.h2`
  color: #636363;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const Info = styled.div`
  display: flex;
  color: #636363;
  flex-direction: column;
  font-size: 20px;
  > ul {
    list-style-type: none;
    > li {
      display: flex;
      flex-direction: row;
      > p {
        margin-right: 10px;
        font-weight: bold;
      }
      margin-top: 5px;
      :first-child {
        margin-top: 0;
      }
    }
  }
`;

export const Picture = styled.img`
  width: 100px;
  display: none;
  @media (min-width: 768px) {
    display: unset;
  }
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  align-items: center;
`;
