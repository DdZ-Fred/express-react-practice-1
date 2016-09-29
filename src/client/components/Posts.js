import React, { PropTypes } from 'react';
import PostShape from 'shapes/PostShape';
import Post from 'components/Post';

const propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};

function Posts({ posts }) {
  return (
      <ul>
      {
        posts.map(post => (
            <Post key={post.id} post={post}/>
        ))
      }
      </ul>
    );
}

Posts.propTypes = propTypes;
export default Posts;
