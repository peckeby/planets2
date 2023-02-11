import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { planetsReducer } from './planetInfo/planetInfoSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { PERSIST, REGISTER } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'root',
  storage,
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [PERSIST, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    planets: persistReducer(persistConfig, planetsReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
