import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { testAction } from './action';
import * as style from './test.scss';
import textSelector from './selector';

class Test extends Component {
  componentWillMount() {
    this.props.dispatch(testAction());
  }

  handleClick() {
    this.props.dispatch(push('/test1'));
  }

  render(){
    const { text } = this.props;
    const li = text.map(t => {
      return (<li key={t.id}>{t.text}</li>)
    })

    return (
      <div className={style.test}>
        <ul>
          {li}
        </ul>
        <button onClick={this.handleClick.bind(this)}>Click</button>
      </div>


    )
  }
}

export default connect(
  state => {
    return {
      text: textSelector(state)
    }
  }
)(Test);
