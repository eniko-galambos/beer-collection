import api from '../api/api';
import { configureStore } from '@reduxjs/toolkit';
import authDataReducer from './authData/authDataSlice';

export const store = configureStore({
  reducer: {
    authData: authDataReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
