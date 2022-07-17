import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // @ts-ignore
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    // @ts-ignore
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
