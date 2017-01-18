import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Posts from './components/Posts';

export default (
  <Route path="/" component={App}>
    <IndexRoute components={Posts}/>

  </Route>
);