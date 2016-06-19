import React from 'react';
import { Router, Route, Link, hashHistory, IndexRoute, IndexRedirect, Redirect } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './containers/App.js';

//media
export default function AppRouter(store) {
  const history = syncHistoryWithStore(hashHistory, store);
  return (
    <Router history={ history }>
      <Route path='/' component={App} breadcrumbName='首页'>
      </Route>
    </Router>
  );
}