/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Profile } from '../../types/user';
import { ACCESS_TOKEN } from '../../config/localStorage';
import { LOGIN_PATH } from '../../config/paths';
import {
  login,
  verifyToken,
} from './thunks';

const initialState: Profile = {
  id: 0,
  name: '',
  role: '',
};

export const slice = createSlice({
  name: 'userState',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {});
    builder.addCase(login.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.role = action.payload.role;
      localStorage.setItem(ACCESS_TOKEN, action.payload.accessToken);
    });
    builder.addCase(login.rejected, (state, action) => {
    });
    builder.addCase(verifyToken.pending, (state) => {});
    builder.addCase(verifyToken.fulfilled, (state, action: PayloadAction<Profile>) => {
      const { payload } = action;
      state.id = payload.id;
      state.name = payload.name;
      state.role = payload.role;
    });
    builder.addCase(verifyToken.rejected, (state, action) => {
      localStorage.removeItem(ACCESS_TOKEN);
      window.location.replace(LOGIN_PATH);
    });
  },
});

const { actions, reducer } = slice;

// export const {} = actions;

export const selectUserState = (state: any): Profile => state.user;

export default reducer;
