import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function ProtectedRouteLayout() {
  const isAuth = useAuth();
  if (!isAuth) return <Navigate to={'./'} replace />;
  return <Outlet />;
}

export default ProtectedRouteLayout;
