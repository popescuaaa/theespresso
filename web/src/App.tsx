import React from 'react';
import { Routes, Route } from "react-router-dom";

/**
 * Main app pages
 */
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import PageNotFound from './pages/error/PageNotFound';
import Login from './pages/login/Login';
import SideMenu from './components/nav/SideMenu';

const App = () => {
  return (
    <div className="page">
      <SideMenu/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
