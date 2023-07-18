export const setSessionToken = (token) => localStorage.setItem('token', token);
export const getSessionToken = () => localStorage.getItem('token');

export const setSessionName = (name) => localStorage.setItem('name', name);
export const getSessionName = () => localStorage.getItem('name');

export const closeSession = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  window.location.reload();
};

export const isAuthenticated = () => localStorage.getItem('token') !== null;
