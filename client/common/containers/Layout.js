import React, { PropTypes } from 'react';
import avatar from '../asset/avatar.png';

const Layout = props => (
  <div>
    <header>
      header<img alt='' src={avatar} />
    </header>
    <section>{props.children}</section>
    <footer>footer</footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
