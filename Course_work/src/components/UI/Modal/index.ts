import { Modal as Self } from './Modal';
import { RootState } from '@store/store';
import { hideModal } from '@components/UI/Modal/Modal.actions';
import { connect } from 'react-redux';

const mapStateToProps = (state: RootState) => ({
  isVisible: state.modal.isVisible,
  ModalComponent: state.modal.ModalComponent,
  ComponentProps: state.modal.ComponentProps,
});

const mapDispatchToProps = {
  hideModal,
};

export const Modal = connect(mapStateToProps, mapDispatchToProps)(Self);
