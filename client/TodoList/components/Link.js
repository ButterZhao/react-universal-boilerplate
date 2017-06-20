import React, { PropTypes } from 'react';

const Link = (a) => {
  // console.log(a);
  if (a.active) {
    return <span>{a.children}</span>;
  }

  return (
    <a
      href=''
      onClick={(e) => {
        e.preventDefault();
        a.onClick();
      }}
    >
      {a.children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
