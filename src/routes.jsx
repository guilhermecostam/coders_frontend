import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { isAuthenticated } from './helpers/session';
import CreateProject from './pages/CreateProject';
import Feed from './pages/Feed';
import Home from './pages/Home';
import Login from './pages/Login';
import ProjectDetails from './pages/ProjectDetails';
import Register from './pages/Register';
import YourProjects from './pages/YourProjects';

export const router = createBrowserRouter([
  {
    path: '/feed',
    element: isAuthenticated() ? <Feed /> : <Navigate to="/login" />,
  },
  {
    path: '/create-project',
    element: isAuthenticated() ? <CreateProject /> : <Navigate to="/login" />,
  },
  {
    path: '/your-projects',
    element: isAuthenticated() ? <YourProjects /> : <Navigate to="/login" />,
  },
  {
    path: '/projects/:id',
    element: isAuthenticated() ? <ProjectDetails /> : <Navigate to="/login" />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: !isAuthenticated() ? <Login /> : <Navigate to="/feed" />,
  },
  {
    path: '/register',
    element: !isAuthenticated() ? <Register /> : <Navigate to="/feed" />,
  },
]);
