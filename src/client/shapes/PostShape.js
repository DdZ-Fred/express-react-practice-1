import { PropTypes } from 'react';

const PostShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
});

export default PostShape;
