import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66393a1d4253a866a250c722.mockapi.io/advert';

export const fetchAll = createAsyncThunk('fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/advert/');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response.data.message || 'Failed to fetch data'
    );
  }
});
