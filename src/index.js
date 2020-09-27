import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CssBaseline } from '@material-ui/core';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
