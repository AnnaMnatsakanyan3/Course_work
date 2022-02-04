import { AdvicesModal as Self } from './AdvicesModal';
import { connect } from 'react-redux';
import { hideModal } from '@components/UI/Modal/Modal.actions';

const mapDispatchToProps = {
  hideModal,
};

export const AdvicesModal = connect(null, mapDispatchToProps)(Self);
