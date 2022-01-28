import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthProvider';

export const AdminRoute = ({ children }) => {
  const { admin, adminLoading } = useAuthContext();
  const location = useLocation();

  if (adminLoading) {
    return (
      <div className="fixed z-50 h-screen w-screen inset-0 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30"></div>
    );
  }

  return admin && !adminLoading ? (
    children
  ) : (
    <Navigate replace to="/" state={{ from: location }} />
  );
};
