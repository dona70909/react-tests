import React from 'react';
import ReactDOM from 'react-dom/client';
import Chart from 'chart.js/auto';



/* css */
import './css/index.css';

/* app */
import App from './App';

/* //# Bootstrap CSS */
import "bootstrap/dist/css/bootstrap.min.css";
/* //# Bootstrap */
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
/* Qui renderizzo l'app react parent element */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
