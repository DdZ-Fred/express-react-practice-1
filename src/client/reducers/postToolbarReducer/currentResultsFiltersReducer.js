import {
  TOGGLE_RESULTS_FILTER,
  SET_RESULTS_FILTER_VALUE,
} from 'actions/postToolbarActions';

const defaultState = {
  author: {
    active: false,
    value: '',
  },
  topic: {
    active: false,
    value: '',
  },
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_RESULTS_FILTER: {
      return Object.assign({}, state, {
        [action.filterName]: Object.assign({}, state[action.filterName], {
          active: !state[action.filterName].active,
        }),
      });
    }
    case SET_RESULTS_FILTER_VALUE: {
      return Object.assign({}, state, {
        [action.filterName]: Object.assign({}, state[action.filterName], {
          value: action.value,
        }),
      });
    }
    default: {
      return state;
    }
  }
}
