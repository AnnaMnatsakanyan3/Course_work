import React, { useState } from 'react';
import { Formik, FormikProps } from 'formik';
import User from '@assets/user.png';
import PadLock from '@assets/padlock.png';
import Eye from '@assets/eye.png';
import HiddenEye from '@assets/hiddenEye.png';
import { Input } from '@components/UI/Input';
import { Button } from '@components/UI/Button';

import { IInitialValues, initialValues, yupScheme } from './LoginModal.config';
import { useHistory } from 'react-router';
import * as S from './LoginModal.styles';

interface ILoginModal {
  hideModal: () => void;
  login: (
    p: { username: string; password: string },
    onSuccess: () => void
  ) => void;
  loginLoading: boolean;
}

export const LoginModal = ({
  hideModal,
  login,
  loginLoading,
}: ILoginModal): JSX.Element => {
  const [showPass, setShowPass] = useState(false);
  const history = useHistory();
  const onSubmit = (values: { username: string; password: string }) => {
    login(values, () => {
      history.push('/main');
      hideModal();
    });
  };
  return (
    <S.Self>
      <S.Title>Sign In</S.Title>
      <Formik
        initialValues={initialValues}
        validationSchema={yupScheme}
        onSubmit={onSubmit}
      >
        {({
          values,
          handleChange,
          errors,
          touched,
          handleBlur,
        }: FormikProps<IInitialValues>) => {
          return (
            <S.StyledForm>
              <S.InputWrapper>
                <S.Logo className="user" src={User} />
                <Input
                  disabled={true}
                  placeHolder="Username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.username && !!touched.username}
                  errorMessage={errors.username}
                />
              </S.InputWrapper>
              <S.InputWrapper>
                <S.Logo className="password" src={PadLock} />
                <S.Logo
                  className="eye"
                  src={showPass ? Eye : HiddenEye}
                  onClick={() => setShowPass(!showPass)}
                />
                <Input
                  disabled={true}
                  placeHolder="Password"
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={!!errors.password && !!touched.password}
                  errorMessage={errors.password}
                />
              </S.InputWrapper>
              <S.ButtonsContainer>
                <Button disabled={loginLoading} type="submit">
                  Sign In
                </Button>
                <Button
                  disabled={loginLoading}
                  variant="cancel"
                  type="button"
                  onClick={() => hideModal()}
                >
                  Cancel
                </Button>
              </S.ButtonsContainer>
            </S.StyledForm>
          );
        }}
      </Formik>
    </S.Self>
  );
};
