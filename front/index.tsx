import React from 'react';
import { render } from 'react-dom';
import App from '@layouts/App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;
// axios.defaults.baseURL =
//   process.env.NODE_ENV === 'production' ? 'http://123.212.67.50:3055' : 'http://localhost:3055';
console.log('env', process.env.NODE_ENV === 'production');

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app'),
);
