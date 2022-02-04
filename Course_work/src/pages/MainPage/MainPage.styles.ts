import styled from 'styled-components/macro';

export const NavItems = styled.ul`
  height: 80px;
  width: 100%;
  background: #1a1c1e;
  display: flex;
  align-items: center;
  flex-direction: row;
  color: #fff;
  align-items: center;
  padding-left: 25px;
  overflow: hidden;
  list-style-type: none;
  font-size: 20px;
`;

export const NavItem = styled.li`
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: releative;
`;

export const NavItemWindow = styled.div`
  position: fixed;
  background: #272a30;
  top: 60px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  min-width: 50px;
  > span {
    margin-bottom: 7px;
    :last-child {
      margin-bottom: 0;
    }
    font-size: 16px;
  }
`;

export const Menu = styled.div<{ isOpen: boolean }>`
  width: ${(p) => (p.isOpen ? '200px' : '0')};
  overflow: hidden;
  height: 100%;
  position: fixed;
  background: #1a1c1e;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  transition: all 0.5s ease-in-out;
  align-items: center;
  font-size: 18px;
  > p {
    white-space: nowrap;
    border-bottom: 1px solid #fff;
    cursor: pointer;
  }
  > ul {
    list-style-type: none;
    width: 100%;
    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      :hover {
        background: #272a30;
      }
      transition: 0.5s ease-in-out;
      white-space: nowrap;
      cursor: pointer;
      margin-top: 20px;
    }
  }
`;

export const Matrix = styled.ul`
  margin-top: 40px;
  width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  background: #1a1c1e;
  color: #fff;
  padding: 30px;
  font-size: 24px;
  > li {
    border-bottom: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    > span {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      height: 100%;
      border-left: 1px solid #fff;
    }
  }
  > div {
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 768px) {
    width: 500px;
    height: 400px;
  }
`;

export const PageContent = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    height: calc(100vh - 80px);
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
  width: 100%;
  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    font-size: 12px;
    :first-child {
      margin-right: 15px;
    }
    @media (min-width: 768px) {
      font-size: 16px;
    }
    :last-child {
      width: 100%;
      color: #212121;
    }
    > img {
      height: 15px;
    }
  }
`;

export const DeletedItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  margin-left: 40px;
  > div {
    margin-top: 10px;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    width: 100%;
    font-size: 24px;
    > li {
      margin-right: 10px;
    }
  }
  @media (min-width: 768px) {
    width: 250px;
    height: 400px;
  }
`;
