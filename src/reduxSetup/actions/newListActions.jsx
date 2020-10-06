import {
  MAKE_NEW_LIST,
  DELETE_LIST,
  ADD_TASK_TO_LIST,
  UPDATE_TASK_TO_LIST,
} from './types';

export const makeNewList = (data) => (dispatch) => {
  dispatch({
    type: MAKE_NEW_LIST,
    payload: data,
  });
};

export const deleteList = (id) => (dispatch) => {
  dispatch({
    type: DELETE_LIST,
    payload: id,
  });
};

export const addTaskToList = (data) => (dispatch) => {
  // console.log(data);
  dispatch({
    type: ADD_TASK_TO_LIST,
    payload: data,
  });
};

export const updateTaskToList = (data) => (dispatch) => {
  dispatch({
    type: UPDATE_TASK_TO_LIST,
    payload: data,
  });
};
