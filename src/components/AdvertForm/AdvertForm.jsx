import React, { useEffect, useState, memo } from 'react';
import CardData from '../../helpers/CardData';
// import ShowMoreModal from '../helpers/ShowMore';
// import CardModalData from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../../redux/advert/operations';
import {
  selectAdvert,
  selectLoader,
  selectError,
} from '../../redux/advert/selectors';
import Loader from 'components/Loader/Loader';
import {
  CardsContainer,
  CardContainer,
  CardFrame,
  ImgThumb,
  LoadMore,
} from './index';

const AdvertForm = () => {
  const dispatch = useDispatch();
  const cards = useSelector(selectAdvert);
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
    cards && Object.values(cards).slice(startIndex, endIndex);

  return (
    <>
      {isLoading && <Loader />}
      {error && <b>Error: {error}</b>}
      <CardsContainer>
        {renderedCards &&
          renderedCards.map(card => (
            <MemoizedCardContainer key={card._id}>
              <CardFrame>
                {card.gallery && card.gallery.length > 0 && (
                  <ImgThumb src={card.gallery[0]} alt="van photo" />
                )}
                {CardData(card)}
              </CardFrame>
            </MemoizedCardContainer>
          ))}
        {Object.values(cards).length > endIndex && (
          <LoadMore onClick={handleLoadMore}>Load more</LoadMore>
        )}
      </CardsContainer>
    </>
  );
};

export default AdvertForm;
