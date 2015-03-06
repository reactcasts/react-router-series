'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import Header from './Header';

const App = React.createClass({
  render () {
    let style = {
      'width': '100%',
      'height': '100%'
    };

    let footerStyle = {
      'width': '100%',
      'height': '120',
      'background': 'black'
    }

    return (
      <div style={style}>
        <Header/>
        <RouteHandler/>
        <div style={footerStyle}></div>
      </div>
    );
  }
});

export default App;
