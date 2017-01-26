import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { testAction } from './action.js';

class Test extends Component {
  componentWillMount() {
    this.props.dispatch(testAction());
  }

  render(){
    return (
      <h1>Hello Kathy</h1>
    )
  }
}

export default connect(
  state => {
    return {
      text: state.test.text
    }
  }
)(Test);
