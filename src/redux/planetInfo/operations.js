import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://ng-mentoring-planets-api.vercel.app';

export const fetchInfo = createAsyncThunk(
  'planets/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/planets');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
