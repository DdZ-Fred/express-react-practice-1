import React, { PropTypes } from 'react';
import PostShape from 'shapes/PostShape';

const propTypes = {
  post: PostShape,
};

function Post({ post: { id, title, body, subtitle } }) {
  return (
    <li>
      <h4>{`${title} - `}<small>{id}</small></h4>
      <h5>{subtitle}</h5>
      <br/><br/>
      <p>{body}</p>
      <hr/>
    </li>
  );
}

Post.propTypes = propTypes;
export default Post;
