import thunk, { ThunkAction } from 'redux-thunk';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from '@reduxjs/toolkit';

import { AnyAction } from 'redux';
import { modal } from '@components/UI/Modal/Modal.reducer';
import { user } from '@common/user/User.reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    modal,
    user,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
export default store;
