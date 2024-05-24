import React, { useEffect, useState, memo } from 'react';
// import CardData from '../../helpers/CardData';
import Card from '../../helpers/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../../redux/advert/operations';
import {
  selectAdvert,
  selectLoader,
  selectError,
} from '../../redux/advert/selectors';
import Loader from 'components/Loader/Loader';
import { CardsContainer, CardContainer, LoadMore } from './index';

const AdvertForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectAdvert);
  const isLoading = useSelector(selectLoader);
  const error = useSelector(selectError);
  const perPage = 4;
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  const handleLoadMore = () => {
    setPage(page => page + 1);
  };

  const MemoizedCardContainer = memo(CardContainer);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  const renderedCards =
    items && Object.values(items).slice(startIndex, endIndex);

  return (
    <>
      {isLoading && <Loader />}
      {error && <b>Error: {error}</b>}
      <CardsContainer>
        {renderedCards &&
          renderedCards.map(card => (
            <MemoizedCardContainer key={card._id}>
              <Card card={card} />
            </MemoizedCardContainer>
          ))}
        {Object.values(items).length > endIndex && (
          <LoadMore onClick={handleLoadMore}>Load more</LoadMore>
        )}
      </CardsContainer>
    </>
  );
};

export default AdvertForm;
