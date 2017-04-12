import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';
import reducer from './reducers';

let store = createStore(reducer);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
