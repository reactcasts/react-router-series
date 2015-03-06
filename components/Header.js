'use strict';

import React from 'react';
import Navigation from './Navigation';

const Header = React.createClass({

  render () {
    let headerStyles = {
      'background': '#F38630',
      'padding': '15'
    };

    let logoStyles = {
      'color': 'white',
      'fontFamily': 'Helvetica Neue',
      'fontWeight': 'lighter'
    };

    return (
      <header style={headerStyles}>
        <h1 style={logoStyles}>React Router Demo</h1>
        <Navigation/>
      </header>
    );
  }
});

export default Header;
