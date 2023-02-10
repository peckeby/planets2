import { configureStore } from '@reduxjs/toolkit';
import { planetsReducer } from './planetInfo/planetInfoSlice';

export const store = configureStore({
  reducer: {
    planets: planetsReducer,
  },
});
