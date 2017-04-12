import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';
import reducer from './reducers';
import { changeGrid, setWinner,endGame } from './actions';

let store = createStore(reducer);

let unsubscribe = store.subscribe(() => 
  console.log(store.getState().toJS())
);

store.dispatch(changeGrid(0,1));
store.dispatch(changeGrid(4,2));
store.dispatch(changeGrid(7,1));
store.dispatch(setWinner(1));
store.dispatch(endGame());

unsubscribe()

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
