import { createSelector } from '@reduxjs/toolkit';

export const selectAdvert = state => state.items;

export const selectFavorites = state => state.favorites;

export const selectLoader = state => state.items.isLoading;

export const selectError = state => state.items.error;

export const selectFilter = state => state.filter;

export const selectVisibleAdvert = createSelector(
  [selectAdvert, selectFilter],
  (items, filter) => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
