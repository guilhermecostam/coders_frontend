import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export const signIn = async (payload) => {
  try {
    const response = await api.post('/account/login', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response;
  } catch (error) {
    return error;
  }
};
