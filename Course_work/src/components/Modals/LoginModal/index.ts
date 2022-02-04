import { LoginModal as Self } from './LoginModal';
import { hideModal } from '@components/UI/Modal/Modal.actions';
import { connect } from 'react-redux';
import { login } from '@common/user/User.actions';
import { RootState } from '@store/store';

const mapStateToProps = (state: RootState) => ({
  loginError: state.user.error,
  isAuth: !!state.user.accessToken,
  loginLoading: state.user.loading,
});

const mapDispatchToProps = {
  hideModal,
  login,
};

export const LoginModal = connect(mapStateToProps, mapDispatchToProps)(Self);
