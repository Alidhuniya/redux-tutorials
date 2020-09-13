import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment} from "./redux/actions/counterAction";
import { disableSwitch, enableSwitch } from './redux/actions/switchAction';

function App() {
  return (
    <div className="App">
     <h1>Redux Counter</h1>
     <br /> <br />
     <Counter />
     <br /> <br />
     <Switch />
    </div>
  );
}

function Counter () {
  const counter = useSelector((state) => state.counter);
const dispatch = useDispatch();
  return(
    <div>
      <h3>Counter: {counter}</h3>
      <br />
      <button onClick = {()=> {
        dispatch(increment());
      }}>INCREMENT</button>
      <button onClick = {()=> {
        dispatch(decrement());
      }}>DECREMENT</button>
    </div>
  );
}

function Switch () {
  const switchx = useSelector((state) => state.switch);
const dispatch = useDispatch();
  return(
    <div>
      <h3>Counter: {switchx.enabled ? "ENABLED" : "DISABLED"}</h3>
      <br />
      <button onClick = {()=> {
        dispatch(enableSwitch());
      }}>Enable</button>
      <button onClick = {()=> {
        dispatch(disableSwitch());
      }}>Disable</button>
    </div>
  );
}


export default App;
