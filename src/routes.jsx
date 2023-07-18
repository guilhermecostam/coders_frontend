import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import CreateProject from './pages/CreateProject';
import Feed from './pages/Feed';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

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
    path: '/create-project',
    element: <CreateProject />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
