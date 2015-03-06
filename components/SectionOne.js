'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import Navigation from './Navigation';

let style = {
  'background': '#69D2E7',
  'width': '100%',
  'height': '75%',
  'padding': '25'
};

const SectionOne = React.createClass({
  render () {
    let links = [
      { name: 'subsectionOne', text: 'Subsection #1' },
      { name: 'subsectionTwo', text: 'Subsection #2' }
    ];

    return (
      <div style={style}>
        <Navigation links={links}/>
        <RouteHandler/>
      </div>
    );
  }
});

export default SectionOne;
