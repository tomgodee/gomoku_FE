import baseService from '../baseApi';
import { LoginForm } from '../../types/user';

export const BASE_URL = '/user';

function login(data: LoginForm): any {
  return baseService.post(`${BASE_URL}/login`, data);
}

function verifyToken(): any {
  return baseService.get(`${BASE_URL}/verify`);
}

export default {
  login,
  verifyToken,
};
