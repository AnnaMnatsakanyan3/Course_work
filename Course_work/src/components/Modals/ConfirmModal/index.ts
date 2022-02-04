import { ConfirmModal as Self } from './ConfirmModal';
import { logOut } from '@common/user/User.actions';
import { connect } from 'react-redux';
import { hideModal } from '@components/UI/Modal/Modal.actions';

const mapDispatchToProps = {
  logOut,
  hideModal,
};

export const ConfirmModal = connect(null, mapDispatchToProps)(Self);
