export const setSessionToken = (token) => {
  localStorage.setItem('token', token);
};

export const getSessionToken = () => localStorage.getItem('token');

export const isAuthenticated = () => localStorage.getItem('token') !== null;
