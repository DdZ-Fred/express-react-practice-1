import { SET_RESULTS_PER_PAGE } from 'actions/postToolbarActions';

export default function (state = 1, action) {
  switch (action.type) {
    case SET_RESULTS_PER_PAGE: {
      console.log('SET_RESULTS_PER_PAGE received!', action);
      return action.value;
    }
    default: {
      return state;
    }
  }
}
