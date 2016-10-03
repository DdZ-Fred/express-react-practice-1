import React from 'react';
import { Route } from 'react-router';
import NewPost from 'components/pages/post/NewPost';
import Posts from 'components/pages/post/Posts';
import Post from 'components/pages/post/Post';

export default (
  <Route path="posts" component={Posts}>
    <Route path="new" component={NewPost} />
    <Route path=":id" component={Post} />
  </Route>
);
