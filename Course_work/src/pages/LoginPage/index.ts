import { LoginPage as Self } from './LoginPage';
import { RootState } from '@store/store';
import { hideModal, showModal } from '@components/UI/Modal/Modal.actions';
import { connect } from 'react-redux';

const mapStateToProps = (state: RootState) => ({
  isModalVisible: state.modal.isVisible,
});

const mapDispatchToProps = {
  showModal,
  hideModal,
};

export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Self);
