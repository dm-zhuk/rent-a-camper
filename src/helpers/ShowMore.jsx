import React, { useState } from 'react';
// import CardModalData from '../Modal/Modal';
import { Button } from '../components/AdvertForm/index';

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
      <Button type="button" text="Show more" onClick={handleOpen}></Button>
      {isOpen && (
        <button onClick={handleClose}>{advItem.name}</button>
        // {CardModalData(data)}
      )}
      ;
    </>
  );
};

export default ShowMoreModal;
