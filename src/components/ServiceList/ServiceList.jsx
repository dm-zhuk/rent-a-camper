import React from 'react';
import CardModalData from '../Modal/Modal';
import {
  CardsContainer,
  CardContainer,
} from '../../components/AdvertForm/index';

const ServiceList = () => {
  return (
    <CardsContainer>
      <CardContainer>{CardModalData()}</CardContainer>
    </CardsContainer>
  );
};
export default ServiceList;

/* 
  return (
    <>
      <CardsContainer>
        {renderedCards &&
          renderedCards.map(card => (
            <CardContainer key={card._id}>
              <CardFrame></CardFrame>
            </CardContainer>
          ))}
      </CardsContainer>
    </>
  );
};
/////////////////
 <CardsContainer>
      {card &&
        Object.keys(card).map(key => (
          <CardContainer key={key}>{CardModalData(card)}</CardContainer>
        ))}
    </CardsContainer>
  );
*/
