import { USER_TYPES } from '@common/user/User.types';
import { AppDispatch, AppThunk } from '@store/store';

export const login =
  (
    data: { username: string; password: string },
    onSuccess: () => void
  ): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: USER_TYPES.LOGIN_REQUEST,
    });
    setTimeout(() => {
      if (data.password === 'pass123' && data.username === 'Anna') {
        dispatch({
          type: USER_TYPES.LOGIN_SUCCESS,
        });
        dispatch({
          type: USER_TYPES.SET_ACCESS_TOKEN,
          accessToken: 'a65wad8aw4dawda95',
        });
        if (onSuccess) {
          onSuccess();
        }
      } else
        dispatch({
          type: USER_TYPES.LOGIN_FAIL,
          error: 'Wrong username or password',
        });
    }, 1000);
  };

export const logOut = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch({
    type: USER_TYPES.LOGOUT,
  });
};
