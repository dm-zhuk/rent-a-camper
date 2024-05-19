import React, { useState } from 'react';

const ShowMoreModal = ({ car }) => {
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
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{car.name}</h2>
            </div>
            <div className="modal-body">
              <p>{car.description}</p>
              <p>{car.price}</p>
            </div>
            <div className="modal-footer">
              <button onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowMoreModal;
