import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

const headers = {
  'Content-Type': 'application/json',
};

export const signIn = async (payload) => {
  try {
    const response = await api.post('/account/login', payload, { headers });

    return response;
  } catch (error) {
    const response = error;

    return response;
  }
};

export const register = async (payload) => {
  try {
    const response = await api.post('/account/register', payload, { headers });

    console.log(payload);

    // return response;
  } catch (error) {
    // const response = error;

    // return response;
  }
};
