import React from 'react';

const ModalWindow = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div>
      <span className="close-button" onClick={onClose}>
        &times;
      </span>
      {children}
    </div>
  );
};

export default ModalWindow;
