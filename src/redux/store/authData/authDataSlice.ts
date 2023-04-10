import { createSlice, createAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type AuthData = {
  isLoggedIn: boolean;
  name: string;
};

const initialState: AuthData = {
  isLoggedIn: false,
  name: '',
};

export const setAuthData = createAction<AuthData>('setAuthData');

const authDataSlice = createSlice({
  name: 'authData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setAuthData, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
  },
});

export const getAuthData = (state: RootState): AuthData => state.authData;
export default authDataSlice.reducer;
