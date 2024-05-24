/* import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/advert/selectors';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const [filteredAdverts, setFilteredAdverts] = useState(favorites);

  return (
    <>
      <CardFilters
        adverts={favorites}
        setFilteredAdverts={setFilteredAdverts}
      />
      <CardsList data={filteredAdverts} />
    </>
  );
};

export default FavoritesPage;
 */
