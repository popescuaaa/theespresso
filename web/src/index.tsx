import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { ChakraProvider } from '@chakra-ui/react'

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ChakraProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ChakraProvider>
);

reportWebVitals();
