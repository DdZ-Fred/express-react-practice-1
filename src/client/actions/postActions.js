import axios from 'axios';

export const CREATE_POST = 'CREATE_POST';
export const GET_POST = 'GET_POST';
export const GET_POSTS = 'GET_POSTS';
export const UPDATE_POST = 'UPDATE_POST';
export const PATCH_POST = 'PATCH_POST';
export const DELETE_POST = 'DELETE_POST';

const CONFIG = {
  baseURL: 'http://localhost:8080',
};

export function createPost({ data }) {
  return {
    type: CREATE_POST,
    payload: axios.post('/posts', data, CONFIG),
  };
}

export function getPost({ id }) {
  return {
    type: GET_POST,
    payload: axios.get(`/posts/${id}`, CONFIG),
  };
}

//
export function getPosts(options) {
  return {
    type: GET_POSTS,
    payload: axios.get('/posts', Object.assign({}, CONFIG, {
      params: options,
    })),
  };
}

export function update({ id, data }) {
  return {
    type: UPDATE_POST,
    payload: axios.put(`/posts/${id}`, data, CONFIG),
  };
}

export function patchPost({ id, data }) {
  return {
    type: PATCH_POST,
    payload: axios.patch(`/posts/${id}`, data, CONFIG),
  };
}

export function deletePost({ id }) {
  return {
    type: DELETE_POST,
    payload: axios.delete(`/posts/${id}`, CONFIG),
  };
}
