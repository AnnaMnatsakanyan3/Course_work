import { AnyAction } from 'redux';
import { USER_TYPES } from '@common/user/User.types';

export interface IUserState {
  accessToken: string | null;
  error: string | null;
  loading: boolean;
}

const initialState: IUserState = {
  accessToken: null,
  error: null,
  loading: false,
};

export const user = (state = initialState, action: AnyAction): IUserState => {
  switch (action.type) {
    case USER_TYPES.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case USER_TYPES.LOGIN_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case USER_TYPES.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken,
      };
    case USER_TYPES.LOGOUT:
      return { ...state, accessToken: null };
    default:
      return state;
  }
};
