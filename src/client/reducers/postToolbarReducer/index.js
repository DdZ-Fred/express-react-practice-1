import { combineReducers } from 'redux';
import currentResultsPerPageReducer from 'reducers/postToolbarReducer/currentResultsPerPageReducer';
import currentResultsFiltersReducer from 'reducers/postToolbarReducer/currentResultsFiltersReducer';
import isFiltersDrawerOpenReducer from 'reducers/postToolbarReducer/isFiltersDrawerOpenReducer';

const postToolbarReducer = combineReducers({
  currentResultsPerPage: currentResultsPerPageReducer,
  currentResultsFilters: currentResultsFiltersReducer,
  isFiltersDrawerOpen: isFiltersDrawerOpenReducer,
});

export default postToolbarReducer;
