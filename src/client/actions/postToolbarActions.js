export const SET_RESULTS_PER_PAGE = 'SET_RESULTS_PER_PAGE';

/**
 * [Set a new results per page value]
 * @param {Number} value [Must be between 1-4. Later multiplied by 5 to get the actual amount per page]
 */
export function setResultsPerPage(event, index, value) {
  return {
    type: SET_RESULTS_PER_PAGE,
    value,
  };
}
