import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';


class Layout extends Component {

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {

    return (
      <div>
        <header>header</header>
        <section>{this.props.children}</section>
        <footer>footer</footer>
      </div>
    )
  }
}

export default Layout;
