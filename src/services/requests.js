import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

const headers = {
  'Content-Type': 'application/json',
};

export const loginRequest = async (payload) => {
  try {
    const response = await api.post('/account/login', payload, { headers });

    return response;
  } catch (error) {
    return error;
  }
};

export const createAccountRequest = async (payload) => {
  try {
    const response = await api.post('/account/register', payload, { headers });

    return response;
  } catch (error) {
    return error;
  }
};
