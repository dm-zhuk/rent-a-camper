import { createSlice } from '@reduxjs/toolkit';
import { fetchAll } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleError = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const advertSlice = createSlice({
  name: 'advert',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addMatcher(
        action =>
          action.type.endsWith('/pending') || action.type.endsWith('/rejected'),
        state => {
          handlePending(state);
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          handleError(state, action);
        }
      );
  },
});

export const advertReducer = advertSlice.reducer;
