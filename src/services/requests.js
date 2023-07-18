import axios from 'axios';
import { getSessionToken } from 'src/helpers/session';

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

const headers = {
  'Content-Type': 'application/json',
  authorization: `Bearer ${getSessionToken()}`,
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

export const createProjectRequest = async (payload) => {
  try {
    const response = await api.post('/projects', payload, { headers });

    return response;
  } catch (error) {
    return error;
  }
};

export const getProjectsRequest = async () => {
  try {
    const response = await api.get('/projects', { headers });

    return response;
  } catch (error) {
    return error;
  }
};
