import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation();

  return user.email ? (
    children
  ) : (
    <Navigate replace to="/user/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
