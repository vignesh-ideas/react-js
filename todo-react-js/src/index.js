import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './common/App';
import AppContextProvider from './common/app-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>

);


