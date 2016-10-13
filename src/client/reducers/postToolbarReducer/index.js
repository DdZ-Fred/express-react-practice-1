import { combineReducers } from 'redux';
import currentResultsPerPageReducer from 'reducers/postToolbarReducer/currentResultsPerPageReducer';
import currentResultsFilterReducer from 'reducers/postToolbarReducer/currentResultsFilterReducer';

const postToolbarReducer = combineReducers({
  currentResultsPerPage: currentResultsPerPageReducer,
  currentResultsFilter: currentResultsFilterReducer,
});

export default postToolbarReducer;
