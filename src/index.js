import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux";
import {Provider} from "react-redux";

/*
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

*/

ReactDOM.render(
  <React.StrictMode>
  <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


