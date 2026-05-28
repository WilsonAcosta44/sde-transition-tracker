import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Reload the page when a new service worker takes control so users always
// run the latest version without having to manually refresh.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    window.location.reload();
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
