import { PropTypes } from 'react';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.instanceOf(Date).isRequired,
});
