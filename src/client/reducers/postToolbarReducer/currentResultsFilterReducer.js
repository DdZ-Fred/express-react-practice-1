import {
  SET_RESULTS_FILTER_AUTHOR,
  SET_RESULTS_FILTER_TOPIC,
} from 'actions/postToolbarActions';

const defaultState = {
  author: null,
  topic: null,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case SET_RESULTS_FILTER_AUTHOR: {
      return Object.assign({}, state, {
        author: action.author,
      });
    }
    case SET_RESULTS_FILTER_TOPIC: {
      return Object.assign({}, state, {
        topic: action.topic,
      });
    }
    default: {
      return state;
    }
  }
}
