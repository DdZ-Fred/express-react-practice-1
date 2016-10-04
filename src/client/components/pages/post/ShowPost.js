import React, { PropTypes, PureComponent } from 'react';
import postShape from 'shapes/postShape';

const propTypes = {
  post: postShape.isRequired,
};

class ShowPost extends PureComponent {
  render() {
    return (
      <div className="col-sm-8 blog-main">

      </div>
    );
  }
}
ShowPost.propTypes = propTypes;

export default ShowPost;
