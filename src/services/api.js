import axios from 'axios';

const configApi = (token) => {
  const api = axios.create({
    baseURL: process.env.API_URL,
  });

  api.interceptos.request.use((config) => {
    const requestConfig = { ...config };

    const authorization = token ? `Bearer ${token}` : '';

    requestConfig.headers.Authorization = authorization;

    return requestConfig;
  });

  return api;
};

export default configApi;
