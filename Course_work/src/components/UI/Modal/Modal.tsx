import React, { FC } from 'react';

import Close from '@assets/close.png';
import * as S from './Modal.styles';
import OutsideClickHandler from 'react-outside-click-handler';
import { ModalComponentPropsType } from '@components/UI/Modal/Modal.reducer';

interface IModal {
  ModalComponent: FC | null;
  ComponentProps: ModalComponentPropsType;
  isVisible: boolean;
  hideModal: () => void;
}

export const Modal = ({
  ModalComponent,
  ComponentProps,
  isVisible,
  hideModal,
}: IModal): JSX.Element | null => {
  if (!isVisible) return null;
  return (
    <S.Self>
      <OutsideClickHandler
        onOutsideClick={() => ComponentProps.isClosable && hideModal()}
      >
        <S.ModalContent>
          {ComponentProps.isClosable && (
            <S.CloseIcon src={Close} onClick={() => hideModal()} />
          )}
          {ModalComponent && <ModalComponent />}
        </S.ModalContent>
      </OutsideClickHandler>
    </S.Self>
  );
};
