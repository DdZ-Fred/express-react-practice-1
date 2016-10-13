import { combineReducers } from 'redux';
import postsReducer from 'reducers/postsReducer';
import postToolbarReducer from 'reducers/postToolbarReducer/';

const rootReducer = combineReducers({
  posts: postsReducer,
  postToolbar: postToolbarReducer,
});

export default rootReducer;
