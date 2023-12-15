import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/assets/sass/style.scss"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/scss/bootstrap.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


 