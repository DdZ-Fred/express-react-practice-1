import React, { PropTypes } from 'react';
import postShape from 'shapes/postShape';

const propTypes = {
  post: postShape.isRequired,
};

function Post({ post }) {
  return (
    <div className="col-sm-8 blog-main">
      <li>
        <h4>{`${post.title} - `}<small>{post.id}</small></h4>
        <h5>{post.subtitle}</h5>
        <br/><br/>
        <p>{post.body}</p>
        <hr/>
      </li>
    </div>
  );
}

Post.propTypes = propTypes;
export default Post;
