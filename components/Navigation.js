'use strict';

import React from 'react';
import { Link } from 'react-router';

let listStyles = {
  'padding': '0'
};

let listItemStyles = {
  'display': 'inline-block',
  'listStyle': 'none',
  'marginRight': '10'
};

let linkStyles = {
  'background': 'none',
  'color': 'white',
  'fontFamily': 'Helvetica Neue',
  'fontWeight': 'lighter',
  'textDecoration': 'none',
  'padding': '10px 15px',
  'borderRadius': '3',
  'border': '1px solid rgba(255, 255, 255, 0.5)'
}

const Navigation = React.createClass({
  render () {
    let links = this.props.links.map((link) => {
      return (
        <li key={link.name} style={listItemStyles}>
          <Link to={link.name} style={linkStyles}>{link.text}</Link>
        </li>
      );
    });

    return (
      <ul style={listStyles}>{links}</ul>
    );
  }
});

export default Navigation;
