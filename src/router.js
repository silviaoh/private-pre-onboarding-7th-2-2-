import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SideNavLayout from './components/layout/SideNavLayout.tsx';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SideNavLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default router;
