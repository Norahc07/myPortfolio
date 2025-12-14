import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a theme instance
const theme = {
  colors: {
    primary: '#FFD700', // Yellow
    primaryLight: '#FFFB96',
    primaryDark: '#FFC000',
    dark: '#1A1A1A',
    darkLight: '#2D2D2D',
    white: '#FFFFFF',
    gray: '#F3F4F6',
    grayDark: '#6B7280',
  },
  fonts: {
    sans: ['Inter', 'sans-serif'],
    mono: ['Fira Code', 'monospace'],
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

// Create a context for the theme
export const ThemeContext = React.createContext(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContext.Provider value={theme}>
        <App />
      </ThemeContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
