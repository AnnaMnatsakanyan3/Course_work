import { HelpModal as Self } from './HelpModal';
import { connect } from 'react-redux';
import { hideModal } from '@components/UI/Modal/Modal.actions';

const mapDispatchToProps = {
	hideModal,
};

export const HelpModal = connect(null, mapDispatchToProps)(Self);
