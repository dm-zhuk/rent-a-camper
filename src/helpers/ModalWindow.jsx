import React from 'react';
import styles from 'components/AdvertForm/index.module.css';

const ModalWindow = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div>
      <button type="button" className={styles.closeBtn32} onClick={onClose}>
        &times;
      </button>
      {children}
    </div>
  );
};

export default ModalWindow;
