import { MAKE_NEW_LIST } from './types';

export const makeNewList = (data) => (dispatch) => {
  dispatch({
    type: MAKE_NEW_LIST,
    payload: data,
  });
};
