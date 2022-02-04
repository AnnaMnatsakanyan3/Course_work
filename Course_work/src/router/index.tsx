import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { LoginPage } from '@pages/LoginPage';
import { MainPage } from '@pages/MainPage';
import { Modal } from '@components/UI/Modal';
import React from 'react';
import { ProtectedRoute } from './ProtectedRouting';

export const Routing = (): JSX.Element => (
  <BrowserRouter>
    <Route path="/" exact component={LoginPage} />
    <ProtectedRoute path="/main" component={MainPage} />
    <Modal />
  </BrowserRouter>
);
