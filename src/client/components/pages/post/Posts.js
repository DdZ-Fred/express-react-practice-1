import React, { PropTypes } from 'react';
import PostShape from 'shapes/PostShape';
import Post from 'components/pages/post/Post';

const propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};

function Posts({ posts }) {
  return (
    <div>
      <h3>ALL POSTS</h3>
      <ul>
      {
        posts.map(post => (
          <Post key={post.id} post={post}/>
        ))
      }
      </ul>
    </div>
  );
}

Posts.propTypes = propTypes;
export default Posts;
