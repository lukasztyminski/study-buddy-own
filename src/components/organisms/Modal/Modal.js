import React from 'react';
import { ModalWrapper } from './Modal.styles';
import { Button } from 'components/atoms/Button/Button';

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <ModalWrapper
      style={{ overlay: { backgroundColor: 'rgba(115, 124, 142, 0.6)' } }}
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      {children}
      <Button onClick={handleClose}>Close modal</Button>
    </ModalWrapper>
  );
};

export default Modal;
