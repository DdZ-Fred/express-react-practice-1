import { PropTypes } from 'react';

/**
 * Represents the shape of the Tab object which is used to dynamically render
 * the set of Tab component inside the TopNavMenu component
 * @type {Object}
 */
export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
});
