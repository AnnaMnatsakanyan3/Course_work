import { AuthorModal as Self } from './AuthorModal';
import { connect } from 'react-redux';
import { hideModal } from '@components/UI/Modal/Modal.actions';

const mapDispatchToProps = {
	hideModal,
};

export const AuthorModal = connect(null, mapDispatchToProps)(Self);
