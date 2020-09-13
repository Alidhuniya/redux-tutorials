import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import { incrementn, increment, decrement, decrementn } from './redux/actions/counterAction';

class Counter extends Component {
    render() {
      return (
  <Fragment>
   <div>
      <h3>Counter: {this.props.counter}</h3>
      <br />
      <button onClick = {()=> {
        this.props.increment();
      }}>INCREMENT</button>
       <button onClick = {()=> {
        this.props.incrementn(10);
      }}>INCREMENTBYN</button>
      <button onClick = {()=> {
        this.props.decrement();
      }}>DECREMENT</button>
       <button onClick = {()=> {
        this.props.decrementn(10);
      }}>DECREMENTBYN</button>
    </div>
  </Fragment>
      );
    }
  }

  const mapStateToProps = (state) => {
      return {
        counter: state.counter,
      }
  };



  export default connect(mapStateToProps, {
    incrementn, increment, decrement, decrementn
  })(Counter);