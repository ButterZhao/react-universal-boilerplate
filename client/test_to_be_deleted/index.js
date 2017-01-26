import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { testAction } from './action.js';
import * as style from './test.scss';

class Test extends Component {
  componentWillMount() {
    this.props.dispatch(testAction());
  }

  handleClick() {
    this.props.dispatch(push('/test1'));
  }

  render(){
    return (
      <div className={style.test}>
        <h1>{this.props.text}</h1>
        <button onClick={this.handleClick.bind(this)}>Click</button>
      </div>


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
