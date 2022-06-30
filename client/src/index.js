// react
import React from 'react';
import ReactDOM from 'react-dom/client';

// hooks
import {
  BrowserRouter,
} from "react-router-dom";

// components
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
