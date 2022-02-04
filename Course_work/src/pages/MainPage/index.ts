import { MainPage as Self } from './MainPage';
import { RootState } from '@store/store';
import { hideModal, showModal } from '@components/UI/Modal/Modal.actions';
import { connect } from 'react-redux';
import { logOut } from '@common/user/User.actions';

const mapStateToProps = (state: RootState) => ({
  isModalVisible: state.modal.isVisible,
});

const mapDispatchToProps = {
  showModal,
  hideModal,
  logOut,
};

export const MainPage = connect(mapStateToProps, mapDispatchToProps)(Self);
