import React from 'react';

import Picture from '@assets/picture.png';
import { Loader } from '@components/UI/Loader';
import * as S from './InfoModal.styles';

export const InfoModal = (): JSX.Element => {
  return (
    <S.Self>
      <S.Title>Application</S.Title>
      <S.Content>
        <S.Picture src={Picture} />
        <S.Info>
          <ul>
            <li>
              <p>Student: </p>Anna Mnatsakanyan Arseni
            </li>
            <li>
              <p>College: </p>YSCI
            </li>
            <li>
              <p>Date: </p>20.11.2021 - 13.12.2021
            </li>
            <li>
              <p>Platform: </p>ReactJS
            </li>
          </ul>
        </S.Info>
      </S.Content>
      <S.LoaderWrapper>
        <Loader />
      </S.LoaderWrapper>
    </S.Self>
  );
};
