import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

//reportWebVitals();
