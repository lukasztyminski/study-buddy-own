import React from 'react';
import { ModalWrapper } from './Modal.styles';
import { Button } from 'components/atoms/Button/Button';

const Modal = ({ handleClose, isOpen, children }) => {
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      {children}
      <Button onClick={handleClose}>Close modal</Button>
    </ModalWrapper>
  );
};

export default Modal;
