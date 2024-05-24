import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../redux/advert/operations';
import Loader from 'components/Loader/Loader';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.advert);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  if (isLoading) {
    return <Loader isLoading={true} />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {items.map(item => (
        <div key={item._id}>
          <a
            href={`http://ww38.item.name/${item.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.name}
          </a>
        </div>
      ))}
    </div>
  );
};

/* import React, { useEffect, useState, memo } from 'react';
import Card from '../helpers/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../redux/advert/operations';
import {
  selectAdvert,
  selectLoader,
  selectError,
} from '../redux/advert/selectors';
import Loader from 'components/Loader/Loader';
import {
  CardsContainer,
  CardContainer,
  LoadMore,
} from 'components/AdvertForm/index';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdvert);
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
    adverts && Object.values(adverts).slice(startIndex, endIndex);

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
        {Object.values(adverts).length > endIndex && (
          <LoadMore onClick={handleLoadMore}>Load more</LoadMore>
        )}
      </CardsContainer>
    </>
  );
};
 */

export default CatalogPage;
