import React, { PropTypes, Component } from 'react';
import PostToolbar from 'components/pages/post/PostToolbar';

class PostWrapper extends Component {
  render() {
    return (
      <div>
        <PostToolbar />
        {this.props.children}
      </div>
    );
  }
}

export default PostWrapper;
