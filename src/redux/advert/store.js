import { configureStore } from '@reduxjs/toolkit';
import { advertReducer } from './advertSlice';
// import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    advert: advertReducer,
    // filter: filterReducer,
  },
});
