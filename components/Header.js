'use strict';

import React from 'react';
import Navigation from './Navigation';

let headerStyles = {
  'background': '#F38630',
  'padding': '15'
};

let logoStyles = {
  'color': 'white',
  'fontFamily': 'Helvetica Neue',
  'fontWeight': 'lighter'
};

const Header = React.createClass({
  render () {
    let links = [
      { name: '/', text: 'Home' },
      { name: 'sectionOne', text: 'Section #1' },
      { name: 'sectionTwo', text: 'Section #2' }
    ];

    return (
      <header style={headerStyles}>
        <h1 style={logoStyles}>React Router Demo</h1>
        <Navigation links={links} />
      </header>
    );
  }
});

export default Header;
