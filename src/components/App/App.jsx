/* import { MainContainer, LeftSection, RightSection } from './index';
import AdvertForm from 'components/AdvertForm/AdvertForm';
import CitySearch from 'components/CitySearch/CitySearch';

const App = () => {
  return (
    <MainContainer>
      <LeftSection>
        <CitySearch />
      </LeftSection>
      <RightSection>
        <AdvertForm />
      </RightSection>
    </MainContainer>
  );
}; */

import 'normalize.css';
import React from 'react';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from 'components//Loader/Loader';
import SharedLayout from '../../layouts/SharedLayout';
import NotFoundPage from '../../pages/NotFoundPage';

const HomePage = lazy(() => import('pages/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));

const App = () => {
  return (
    <Suspense fallback={<Loader isLoading={true} />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
