import styled from 'styled-components/macro';

export const Self = styled.div`
  z-index: 1;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: relative;
  min-height: 100px;
  min-width: 100px;
  background: #fff;
  border-radius: 5px;
  padding: 40px 30px;
`;

export const CloseIcon = styled.img`
  width: 15px;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;
