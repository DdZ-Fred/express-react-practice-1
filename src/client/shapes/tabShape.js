import { PropTypes } from 'react';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
});
