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
 *      RESULTS FILTERS
 * **************************
 * ************************ */

export const TOGGLE_RESULTS_FILTER = 'TOGGLE_RESULTS_FILTER';
export const SET_RESULTS_FILTER_VALUE = 'SET_RESULTS_FILTER_VALUE';

export function toggleResultsFilter(filterName) {
  return {
    type: TOGGLE_RESULTS_FILTER,
    filterName,
  };
}

export function setResultsFilterValue(filterName, value) {
  return {
    type: SET_RESULTS_FILTER_VALUE,
    filterName,
    value,
  };
}


/* ******************************
 * ******************************
 *      IS FILTERS DRAWER OPEN
 * ******************************
 * *************************** */

export const TOGGLE_FILTERS_DRAWER = 'TOGGLE_FILTERS_DRAWER';

export function toggleFiltersDrawer() {
  return {
    type: TOGGLE_FILTERS_DRAWER,
  };
}
