import React from 'react';
import { CloseBtn32 } from 'components/AdvertForm/index';

const ModalWindow = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div>
      <CloseBtn32 onClick={onClose}>&times;</CloseBtn32>
      {children}
    </div>
  );
};

export default ModalWindow;
