import React from 'react';
import { Routes, Route } from "react-router-dom";

/* Main app pages */
import Home from './pages/home/Home';
import Settings from './pages/settings/Settings';
import PageNotFound from './pages/error/PageNotFound';
import Login from './pages/login/Login';

/* Brand */
import { Heading } from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons'

const App: React.FC<{}> = () => {
  return (
    <div className="page">
      <Heading size='md'>Neom Tracker {" "} <SunIcon /></Heading>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
