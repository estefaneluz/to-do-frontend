import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import Styles from './styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Styles />
    <Routes />
  </React.StrictMode>,
);
