import { createSlice } from '@reduxjs/toolkit';

const indexSlice = createSlice({
  name: 'index',
  initialState: 0,
  reducers: {
    setIndex: {
      reducer(_, action) {
        return action.payload;
      },
    },
  },
});

export const { setIndex } = indexSlice.actions;
export const indexReducer = indexSlice.reducer;
