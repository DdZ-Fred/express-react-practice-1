import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'components/App';
import Home from 'components/pages/Home';

import NewPost from 'components/pages/post/NewPost';
import Posts from 'components/pages/post/Posts';
import Post from 'components/pages/post/Post';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="posts" components={Posts}>
      <Route path="new" component={NewPost} />
      <Route path=":id" component={Post} />
    </Route>
  </Route>
);
