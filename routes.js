'use strict';

import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

// Handlers
import App from './components/App';
import Default from './components/Default';
import NotFound from './components/NotFound';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SubSectionOne from './components/SubSectionOne';
import SubSectionTwo from './components/SubSectionTwo';

// Everytime you have a nested route, make sure to put in a RouteHandler to respond accordingly
// Should try and think about how to put that component in, where, and why. How do we control
// what gets output?
// Is there anyway to specify callbacks or other control flows between parent of RouteHandler?
export default (
  <Route path="/" handler={App}>
    <Route name="sectionOne" handler={SectionOne}>
      <Route name="subsectionOne" handler={SubSectionOne}/>
      <Route name="subsectionTwo" handler={SubSectionTwo}/>
    </Route>
    <Route name="sectionTwo" handler={SectionTwo}/>
    <DefaultRoute handler={Default}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);
