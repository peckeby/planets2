import { createSlice } from '@reduxjs/toolkit';
import { fetchInfo } from './operations';

const pending = state => {
  state.isLoading = true;
};

const fulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.data = state.data.concat(action.payload);
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  alert(state.error);
};

const planetInfoSlice = createSlice({
  name: 'planets',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchInfo.pending, pending)
      .addCase(fetchInfo.fulfilled, fulfilled)
      .addCase(fetchInfo.rejected, rejected);
  },
});
// const { reducer } = planetInfoSlice;
export const planetsReducer = planetInfoSlice.reducer;

// export default reducer;
