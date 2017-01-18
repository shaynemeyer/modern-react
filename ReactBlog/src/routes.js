import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';

export default (
  <Route path="/" component={App}>
    <IndexRoute components={PostsIndex}/>
    <Route path="posts/new" component={PostsNew} />
  </Route>
);