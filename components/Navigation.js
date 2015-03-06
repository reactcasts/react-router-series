'use strict';

import React from 'react';
import { Link } from 'react-router';

const Navigation = React.createClass({
  render () {
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

    return (
      <ul style={listStyles}>
        <li style={listItemStyles}>
          <Link to="/" style={linkStyles}>Home</Link>
        </li>
        <li style={listItemStyles}>
          <Link to="sectionOne" style={linkStyles}>Section #1</Link>
        </li>
        <li style={listItemStyles}>
          <Link to="sectionTwo" style={linkStyles}>Section #2</Link>
        </li>
      </ul>
    );
  }
});

export default Navigation;
