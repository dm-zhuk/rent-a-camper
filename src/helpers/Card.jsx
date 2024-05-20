import React, { useState } from 'react';
import ModalWindow from './ModalWindow';
import CardData from './CardData';
import CardModalData from 'components/Modal/Modal';

import { CardFrame, ImgThumb } from 'components/AdvertForm/index';

const Card = ({ card }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <CardFrame onClick={handleCardClick}>
        {card.gallery && card.gallery.length > 0 && (
          <ImgThumb src={card.gallery[0]} alt="van photo" />
        )}
        {CardData(card)}
      </CardFrame>
      <ModalWindow isOpen={showModal} onClose={handleModalClose}>
        <CardModalData modal={card} onClose={handleModalClose} />
      </ModalWindow>
    </>
  );
};

export default Card;
