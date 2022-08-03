import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes';
import history from './history'
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App history={history}/>
  </React.StrictMode>
);
