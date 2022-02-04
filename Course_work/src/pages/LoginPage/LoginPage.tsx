import React, { FC, useEffect } from 'react';

import * as S from './LoginPage.styles';
import { LoginModal } from '@components/Modals/LoginModal';
import { InfoModal } from '@components/Modals/InfoModal';
import { ModalComponentPropsType } from '@components/UI/Modal/Modal.reducer';
import { Button } from '@components/UI/Button';

interface ILoginPage {
  isModalVisible: boolean;
  showModal: (component: FC, componentProps?: ModalComponentPropsType) => void;
  hideModal: () => void;
}

export const LoginPage = ({
  showModal,
  hideModal,
}: ILoginPage): JSX.Element => {
  useEffect(() => {
    showModal(InfoModal, {
      isClosable: false,
    });
    setTimeout(() => {
      hideModal();
      showModal(LoginModal);
    }, 10000);
  }, []);

  return (
    <S.LoginPage>
      <S.Title>Sign In to continue</S.Title>
      <Button onClick={() => showModal(LoginModal)}>SIGN IN</Button>
      <S.SubTitle>- App made by Anna Mnatsakanyan -</S.SubTitle>
    </S.LoginPage>
  );
};
