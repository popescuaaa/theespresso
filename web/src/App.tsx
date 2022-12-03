import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom";

/**
 * Main app pages
 */
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import PageNotFound from './pages/error/PageNotFound';
import Login from './pages/login/Login';
import SideMenu from './components/nav/SideMenu';
import { Heading } from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons'

const App: React.FC<{}> = () => {
  return (
    <div className="page">
      {/* <SideMenu /> */}
      <Heading size='md'>Neom Tracker {" "} <SunIcon /></Heading>
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
