import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import postShape from 'shapes/postShape';
import Post from 'components/pages/post/Post';
import { getPosts } from 'actions/postActions';


const propTypes = {
  posts: PropTypes.arrayOf(postShape).isRequired,
};

class Posts extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getPosts({
      limit: 3,
      details: true,
      other: 'A String',
    });
  }

  render() {
    return (
      <div className="col-sm-8 blog-main">
        <h3>ALL POSTS</h3>
        <ul>
        {
          this.props.posts.map(post => (
            <Post key={post.id} post={post}/>
          ))
        }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

Posts.propTypes = propTypes;
export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
