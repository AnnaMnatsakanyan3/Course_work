import React from 'react';
import * as S from './AdvicesModal.styles';
import { Button } from '@components/UI/Button';
import Tips from './Tips.json';

interface IAdvicesModal {
  hideModal: () => void;
}

export const AdvicesModal = ({ hideModal }: IAdvicesModal): JSX.Element => {
  return (
    <S.Self>
      <S.Information>
        {Tips.tips.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </S.Information>
      <Button onClick={() => hideModal()}>Ok</Button>
    </S.Self>
  );
};
