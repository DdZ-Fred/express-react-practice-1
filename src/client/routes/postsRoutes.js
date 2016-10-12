import React from 'react';

// import { Route } from 'react-router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import PostWrapper from 'components/pages/post/PostWrapper';
import NewPost from 'components/pages/post/NewPost';
import Posts from 'components/pages/post/Posts';
import Post from 'components/pages/post/Post';

export default (
  <Route path="posts" component={PostWrapper}>
    <IndexRoute component={Posts} />
    <Route path="new" component={NewPost} />
    <Route path=":id" component={Post} />
  </Route>
);
