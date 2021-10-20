import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import authenticationService, { AUTHENTICATION_URL } from '../../services/authentication';
import type { LoginForm } from '../../types/user';

export const login = createAsyncThunk(`${AUTHENTICATION_URL}/login`, async (data: LoginForm) => {
  const response = await authenticationService.login(data);
  return Object.assign(response.data, {
    accessToken: response.headers.access_token,
  });
});

export const verifyToken = createAsyncThunk(`${AUTHENTICATION_URL}/verifyToken`, async () => {
  const response = await authenticationService.verifyToken();
  return response.data;
});
