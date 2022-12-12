import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Page from './Page';
import HeaderComp from './Header';
import { Header } from '@cred/neopop-web/lib/components';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Page />
    {/* <HeaderComp /> */}
  </React.StrictMode>
);
