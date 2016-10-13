/* **************************
 * **************************
 *      RESULTS PER PAGE
 * **************************
 * ************************ */

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


/* **************************
 * **************************
 *      RESULTS FILTER
 * **************************
 * ************************ */

export const SET_RESULTS_FILTER_AUTHOR = 'SET_RESULTS_FILTER_AUTHOR';
export const SET_RESULTS_FILTER_TOPIC = 'SET_RESULTS_FILTER_TOPIC';

export function setResultsFilterAuthor(author) {
  return {
    type: SET_RESULTS_FILTER_AUTHOR,
    author,
  };
}

export function setResultsFilterTopic(topic) {
  return {
    type: SET_RESULTS_FILTER_TOPIC,
    topic,
  };
}
