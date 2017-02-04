import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import avatar from '../asset/avatar.png';

class Layout extends Component {

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {

    return (
      <div>
        <header>header<img src={avatar}/></header>
        <section>{this.props.children}</section>
        <footer>footer</footer>
      </div>
    )
  }
}

export default Layout;
