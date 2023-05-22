import React from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/index.css';
import 'styles/app.scss';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './Routes';
import { Toaster } from 'react-hot-toast';
import { themeCheck } from 'utils/darkmode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
    <Toaster position="bottom-right" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
// invoke function for DarkMode. 
-- 1. This function checked every single time for device dark mode.
-- 2. This function will check localStorage for checked dark mode. 
*/

themeCheck();
