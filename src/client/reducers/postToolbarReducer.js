import { SET_RESULTS_PER_PAGE } from 'actions/postToolbarActions';

const defaultState = {
  // Between 1-4 and later multiplied by 5 to get the actual results/posts per page
  currentResultsPerPage: 1,
  // Search options (by author, date, keyword...)
  currentResultsFilter: {},
};


// #TODO:0 Write postToolbar reducer which will allow to filter the post search
export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_RESULTS_PER_PAGE: {
      console.log('SET_RESULTS_PER_PAGE received!', action);
      return Object.assign({}, state, {
        currentResultsPerPage: action.value,
      });
    }
    default: {
      return state;
    }
  }
}
