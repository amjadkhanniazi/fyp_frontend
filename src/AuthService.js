// AuthService.js
import api from './Api';

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/user/register', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Something went wrong');
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/UserRegistries/login', credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Invalid credentials');
  }
};
