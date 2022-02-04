import React from 'react';

import { Button } from '@components/UI/Button';
import Picture from '@assets/picture.jpg';
import * as S from './AuthorModal.styles';

interface IAuthorModal {
  hideModal: () => void;
}

export const AuthorModal = ({ hideModal }: IAuthorModal): JSX.Element => {
  return (
    <S.Self>
      <S.Title>Anna{`'`}s App</S.Title>
      <S.Information>
        <li className="withGradient">
          <p>Author: </p>
          <S.Animate>Anna Mnatsakanyan Arseni</S.Animate>
        </li>
        <li>
          <p>Age: </p>18
        </li>
        <li>
          <p>College: </p>Yerevan State College of Informatics
        </li>
        <li>
          <p>Date created: </p>20.11.2021 - 13.12.2021
        </li>
        <li>
          <p>Platform: </p>ReactJS
        </li>
        <div>
          <img src={Picture} />
        </div>
      </S.Information>
      <Button variant="submit" onClick={() => hideModal()}>
        Exit
      </Button>
    </S.Self>
  );
};
