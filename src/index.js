import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';

// action
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// reducer
const initState = 0;

const counterReducer = (state = initState, action ) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;

      case "DECREMENT":
      return state - 1;

      default:
      return state
  }
}

// store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
})

// dispatch
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


