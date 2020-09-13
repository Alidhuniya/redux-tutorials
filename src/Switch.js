import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import { disableSwitch, enableSwitch } from './redux/actions/switchAction';

class Switch extends Component {
    render() {
      return (
  <Fragment>
  <div>
   <h3>Counter: {this.props.switch.enabled ? "ENABLED" : "DISABLED"}</h3>
        <br />
       <button onClick = {()=> {
         this.props.enableSwitch();
        }}>Enable</button>
        <button onClick = {()=> {
          this.props.disableSwitch();
        }}>Disable</button>
      </div>
  </Fragment>
      );
    }
  }

  const mapStateToProps = (state) => {
      return {
        switch: state.switch,
      }
  };



  export default connect(mapStateToProps, {
    enableSwitch, disableSwitch,
  })(Switch);