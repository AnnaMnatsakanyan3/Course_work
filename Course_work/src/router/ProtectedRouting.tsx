import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router';
import { RootState } from '@store/store';

interface IProtectedRoute extends RouteProps {
  component: React.FunctionComponent;
  isAuth: boolean;
}

export const ProtectedRouteUnwrapped = ({
  component: Component,
  isAuth,
  ...rest
}: IProtectedRoute): JSX.Element => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
              }}
            />
          );
        }
      }}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  isAuth: !!state.user.accessToken,
  accessToken: state,
});

export const ProtectedRoute = connect(mapStateToProps)(ProtectedRouteUnwrapped);
