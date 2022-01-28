import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { DashboardUsers, DashboardHome, DashboardBlogs } from '..';
import { DashboradWrapper } from '../../components';
import { useAuthContext } from '../../contexts/AuthProvider';

const Dashboard = () => {
  const { loading, adminLoading } = useAuthContext();


  if (loading && adminLoading) {
    return (
      <div className="fixed z-50 h-screen w-screen inset-0 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30"></div>
    );
  }

  return (
    <DashboradWrapper>
      <Routes>
        <Route path="" element={<DashboardHome />} />
        <Route path="users" element={<DashboardUsers />} />
        <Route path="blogs" element={<DashboardBlogs />} />
      </Routes>
    </DashboradWrapper>
  );
};

export default Dashboard;
