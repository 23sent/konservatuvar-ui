import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function NotAuthLayout() {
  const isAuth = useAuth();
  if (isAuth) return <Navigate to={'./app'} replace />;
  return <Outlet />;
}

export default NotAuthLayout;
