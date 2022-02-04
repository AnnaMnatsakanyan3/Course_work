import { MODAL_TYPES } from '@components/UI/Modal/Modal.types';
import { AppDispatch, AppThunk } from '@store/store';
import { FC } from 'react';
import { ModalComponentPropsType } from '@components/UI/Modal/Modal.reducer';

export const showModal =
  (ModalComponent: FC, ComponentProps?: ModalComponentPropsType): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch({
      type: MODAL_TYPES.SHOW_MODAL,
      ModalComponent: ModalComponent,
      ComponentProps: ComponentProps && ComponentProps,
    });
  };

export const hideModal = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch({
    type: MODAL_TYPES.HIDE_MODAL,
  });
};
