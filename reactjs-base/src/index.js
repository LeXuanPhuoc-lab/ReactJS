import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import App from './MyFirstApp/MyApp';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Inject components
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


