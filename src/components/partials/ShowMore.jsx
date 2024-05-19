import React, { useState } from 'react';
// import CardModalData from '../Modal/Modal';
import { Button, H1 } from '../AdvertForm/index';

const ShowMoreModal = ({ advItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Show more</Button>
      {isOpen && (
        <button onClick={handleClose}>{advItem.name}</button>
        // {CardModalData(data)}
      )}
      ;
    </>
  );
};

export default ShowMoreModal;
