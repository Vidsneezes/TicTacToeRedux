import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import reducer from './reducers';
import { changeGrid, endGame } from './actions';

let store = createStore(reducer);
const jsVal = store.getState().toJS();
console.log(jsVal);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
