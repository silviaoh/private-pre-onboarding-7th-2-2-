import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SideNavLayout from './components/layout/SideNavLayout';
import AdvertisingManagement from './pages/AdvertisingManagement';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SideNavLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/management" element={<AdvertisingManagement />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
