import React from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

import styles from './Modal.module.css';
import { closeModal } from '../../actions';
import LoginModal from './LoginModal/LoginModal';
import SignUpModal from './SignUpModal/SignUpModal';

ReactModal.setAppElement('#root');

function Modal({ isOpen, modalType, closeModal }) {
  const renderContent = () => {
    switch (modalType) {
      case 'LOGIN':
        return <LoginModal />;
      case 'SIGN_UP':
        return <SignUpModal />;
      default:
        return null;
    }
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} className={styles.Modal}>
      <div className={styles.content}>{renderContent()}</div>
    </ReactModal>
  );
}

const mapStateToProps = state => {
  return { isOpen: state.modal.isOpen, modalType: state.modal.modalType };
};

export default connect(mapStateToProps, { closeModal })(Modal);
