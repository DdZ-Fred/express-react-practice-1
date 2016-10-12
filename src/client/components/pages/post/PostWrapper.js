import React, { PropTypes, Component } from 'react';
import PostToolbar from 'components/pages/post/PostToolbar';
import resultsPerPageMenuItems from 'data/resultsPerPageMenuItems';

class PostWrapper extends Component {
  render() {
    return (
      <div>
        <PostToolbar resultsPerPageMenuItems={resultsPerPageMenuItems}/>
        {this.props.children}
      </div>
    );
  }
}

export default PostWrapper;
