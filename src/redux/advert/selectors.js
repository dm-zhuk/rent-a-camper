import { createSelector } from '@reduxjs/toolkit';

export const selectAdvert = state => state.advert.items;

export const selectLoader = state => state.advert.isLoading;

export const selectError = state => state.advert.error;

export const selectFilter = state => state.filter;

export const selectVisibleAdvert = createSelector(
  [selectAdvert, selectFilter],
  (advert, filter) => {
    return advert.filter(advert =>
      advert.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
