import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes';
import history from './history'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes history={history}/>
  </React.StrictMode>
);
