import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { planetsReducer } from './planetInfo/planetInfoSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { PERSIST, REGISTER } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import { indexReducer } from './index/indexSlice';

const reducers = combineReducers({
  index: indexReducer,
  planets: planetsReducer,
});

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

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistor = persistStore(store);
