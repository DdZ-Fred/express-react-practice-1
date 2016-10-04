import React from 'react';

// import { Route, IndexRoute } from 'react-router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from 'components/App';
import Home from 'components/pages/Home';
import NotFound from 'components/pages/NotFound';

import postsRoutes from 'routes/postsRoutes';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    {postsRoutes}
    <Route path="*" component={NotFound} />
  </Route>
);
