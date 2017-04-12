import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import reducer from './reducers';
import { changeGrid, endGame } from './actions';

let store = createStore(reducer);

console.log(store.getState());

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
