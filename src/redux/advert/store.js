import { configureStore } from '@reduxjs/toolkit';
import { advertReducer } from './advertSlice';
// import { filterReducer } from './filterSlice';

const store = configureStore({
  reducer: {
    advert: advertReducer,
    // filter: filterReducer,
  },
});

export default store;
