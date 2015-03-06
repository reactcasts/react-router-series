'use strict';

import React from 'react';

const Default = React.createClass({
  render () {
    let style = {
      'background': '#E0E4CC',
      'width': '100%',
      'height': '75%'
    };

    return (
      <div style={style}></div>
    );
  }
});

export default Default;
