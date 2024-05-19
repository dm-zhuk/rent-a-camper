import React, { useEffect, useState, memo } from 'react';
import CardModalData from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../../redux/advert/operations';
import {
  selectAdvert,
  selectLoader,
  selectError,
} from '../../redux/advert/selectors';
import Loader from 'components/Loader/Loader';
import { CardsContainer, CardContainer, CardFrame, LoadMore } from './index';

const ServiceList = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectAdvert);
  const isLoading = useSelector(selectLoader);
  const error = useSelector(selectError);
  const perPage = 1;
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const handleLoadMore = () => {
    setPage(page => page + 1);
  };

  const MemoizedCardContainer = memo(CardContainer);

  if (isLoading) {
    return <Loader />;
  }

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  const renderedCards =
    cards && Object.values(cards).slice(startIndex, endIndex);

  return (
    <>
      {error && <div>Error: {error}</div>}
      <CardsContainer>
        {renderedCards &&
          renderedCards.map(card => (
            <MemoizedCardContainer key={card._id}>
              <CardFrame>{CardModalData(card)}</CardFrame>
            </MemoizedCardContainer>
          ))}
        {Object.values(cards).length > endIndex && (
          <LoadMore onClick={handleLoadMore}>Load more</LoadMore>
        )}
      </CardsContainer>
    </>
  );
};
export default ServiceList;
