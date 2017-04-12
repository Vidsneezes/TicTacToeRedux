import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';
import reducer from './reducers';

//TODO #1 add css to make it look good

//TODO #2 highlight the winner row,column,diagonol

let store = createStore(reducer);

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
