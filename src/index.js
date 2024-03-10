import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import '@babel/polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './reducer/store';
import App from './App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
