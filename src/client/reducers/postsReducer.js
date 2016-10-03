import {
  CREATE_POST,
  GET_POST,
  GET_POSTS,
  UPDATE_POST,
  PATCH_POST,
  DELETE_POST,
} from 'actions/postActions';


function getPostIndexById(id, posts) {
  let i = 0;
  while (posts[i].id !== id) {
    i++;
  }
  return i;
}

export default function (state = [], action) {
  let postIndex;
  switch (action.type) {
    case CREATE_POST: {
      console.log('CREATE_POST RECEIVED!', action);
      return [action.payload.data, ...state];
    }
    case GET_POSTS: {
      console.log('GET_POSTS RECEIVED!', action);
      return action.payload.data;
    }

    case UPDATE_POST: {
      console.log('UPDATE_POST RECEIVED!', action);
      postIndex = getPostIndexById(action.payload.data.id, state);
      return [
        state.slice(0, postIndex),
        action.payload.data,
        state.slice(postIndex),
      ];
    }
    case PATCH_POST: {
      console.log('PATCH_POST RECEIVED', action);
      postIndex = getPostIndexById(action.payload.data.id, state);
      return [
        state.slice(0, postIndex),
        action.payload.data,
        state.slice(postIndex),
      ];
    }
    case DELETE_POST: {
      console.log('DELETE_POST RECEIVED', action);
      return state.filter((post) => {
        return post.id !== action.payload.data.id;
      });
    }
    default: {
      return state;
    }

  }
}
