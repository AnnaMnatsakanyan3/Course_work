import React from 'react';
import * as S from './Button.styles';

interface IButton {
  variant?: string;
  onClick?: () => void;
  isActive?: boolean;
  children?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
}

export const Button = ({
  variant,
  onClick,
  isActive,
  children,
  type,
  disabled,
}: IButton): JSX.Element => {
  return (
    <S.Button
      type={type}
      variant={variant}
      onClick={onClick}
      isActive={isActive}
      disabled={disabled}
    >
      {children}
    </S.Button>
  );
};
