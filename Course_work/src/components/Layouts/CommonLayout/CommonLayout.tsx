import React from 'react';
import * as S from './CommonLayout.styles';

interface ICommonLayout {
  children?: React.ReactNode;
}

export const CommonLayout: React.FC = ({
  children,
}: ICommonLayout): JSX.Element => {
  return (
    <S.CommonLayout>
      <S.Content>{children}</S.Content>
    </S.CommonLayout>
  );
};
