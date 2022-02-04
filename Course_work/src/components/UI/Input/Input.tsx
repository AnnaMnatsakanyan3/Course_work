import React from 'react';

import * as S from './Input.styles';

interface IInput {
  type?: string;
  placeHolder?: string;
  name?: string;
  value?: string;
  error?: boolean;
  errorMessage?: string;
  onChange?(evt: React.ChangeEvent<HTMLInputElement>): void;
  onBlur?(evt: React.FocusEvent<HTMLInputElement>): void;
  onFocus?(evt: React.FocusEvent<HTMLInputElement>): void;
  disabled?: boolean;
}

export const Input = ({
  type,
  placeHolder,
  onChange,
  name,
  onFocus,
  value,
  onBlur,
  error,
  errorMessage,
  disabled,
}: IInput): JSX.Element => {
  error || (errorMessage && alert('Something went wrong!'));
  return (
    <S.Self
      disabled={disabled}
      onFocus={onFocus}
      onBlur={onBlur}
      value={value}
      onChange={onChange}
      type={type || 'text'}
      placeholder={placeHolder}
      name={name}
    />
  );
};
