import styled from 'styled-components/macro';
import { Form } from 'formik';

export const Self = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

export const Title = styled.h1`
  color: #636363;
`;

export const Logo = styled.img`
  position: absolute;
  left: 0;
  bottom: 15px;
  width: 20px;
  &.eye {
    left: unset;
    right: 0;
    cursor: pointer;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  > input {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const StyledForm = styled(Form)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 15px;
`;
