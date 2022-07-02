// react
import React from 'react';
import ReactDOM from 'react-dom/client';

// hooks
import {
  BrowserRouter,
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';

// components
import App from './App';


const theme = {
  dark: "#11201e",
  medium: "#94a8b3",
  light: "#dedcde",
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
