import React from 'react';

import * as S from './ConfirmModal.styles';
import { Button } from '@components/UI/Button';
interface IConfirmModal {
  logOut: () => void;
  hideModal: () => void;
}

export const ConfirmModal = ({
  logOut,
  hideModal,
}: IConfirmModal): JSX.Element => {
  return (
    <S.Self>
      <S.Title>Are you sure ?</S.Title>
      <S.ButtonsContainer>
        <Button onClick={() => logOut()}>Yes</Button>
        <Button variant="cancel" onClick={() => hideModal()}>
          No
        </Button>
      </S.ButtonsContainer>
    </S.Self>
  );
};
