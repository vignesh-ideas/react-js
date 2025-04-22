import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './common/App.tsx';
import AppContextProvider from './common/app-context.tsx';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>

);


