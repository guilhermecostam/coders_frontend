import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Feed from './pages/Feed';
import Home from './pages/Home';
import Login from './pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/feed',
    element: <Feed />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
