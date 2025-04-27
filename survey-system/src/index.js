import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import './styles/colors.css';
import './styles/utilities.css';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);