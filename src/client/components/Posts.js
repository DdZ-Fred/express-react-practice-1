import React, { PropTypes } from 'react';
import PostShape from 'shapes/PostShape';

const propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};

class Posts extends React.Component {
  render() {
    return (
      <ul>
      {
        this.props.posts.map(post => (
            <Post key={post.id} post={post}/>
        ))
      }
      </ul>
    );
  }
}

Posts.propTypes = propTypes;
export default Posts;
