import { AnyAction } from 'redux';
import { MODAL_TYPES } from '@components/UI/Modal/Modal.types';
import { FC } from 'react';

export type ModalComponentPropsType = { isClosable: boolean };

interface IModalState {
  isVisible: boolean;
  ModalComponent: FC | null;
  ComponentProps: ModalComponentPropsType;
}

const initialState: IModalState = {
  isVisible: false,
  ModalComponent: null,
  ComponentProps: {
    isClosable: true,
  },
};

export const modal = (state = initialState, action: AnyAction): IModalState => {
  switch (action.type) {
    case MODAL_TYPES.SHOW_MODAL: {
      return {
        isVisible: true,
        ModalComponent: action.ModalComponent,
        ComponentProps: { ...state.ComponentProps, ...action.ComponentProps },
      };
    }
    case MODAL_TYPES.HIDE_MODAL: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
