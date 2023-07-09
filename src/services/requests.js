import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export const signIn = async (params) => {
  try {
    const { data } = await api.post('/account/login', params, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    return data;
  } catch {
    return null;
  }
};
