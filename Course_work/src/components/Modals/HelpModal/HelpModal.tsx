import React from 'react';

import { Button } from '@components/UI/Button';
import * as S from './HelpModal.styles';

interface IHelpModal {
  hideModal: () => void;
}

export const HelpModal = ({ hideModal }: IHelpModal): JSX.Element => {
  return (
    <S.Self>
      <S.Title>Help</S.Title>
      <ul>
        <li>
          With the help of this program the user can find and delete the rows of
          the matrix that contain the maximum element. If you have any
          questions, you can contact me through my <br />
          <p>Email` anna.mnatsakanyan.2003@gmail.com</p>
        </li>
        <li></li>
      </ul>
      <Button onClick={() => hideModal()}>Ok</Button>
    </S.Self>
  );
};
