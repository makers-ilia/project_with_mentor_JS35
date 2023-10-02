import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

const MainRoutes = () => {
  const ROUTES = [
    {
      id: 1,
      path: '/',
      element: <HomePage />
    },
    {
      id: 2,
      path: '/register',
      element: <RegisterPage />
    },
    {
      id: 3,
      path: '/login',
      element: <LoginPage />
    }
  ];

  return (
    <Routes>
      {ROUTES.map(route => (
        <Route key={route.id} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

export default MainRoutes