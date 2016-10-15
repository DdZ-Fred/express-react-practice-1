import { TOGGLE_FILTERS_DRAWER } from 'actions/postToolbarActions';

export default function(state = false, action) {
  switch (action.type) {
    case TOGGLE_FILTERS_DRAWER: {
      return !state;
    }
    default: {
      return  state;
    }
  }
}
