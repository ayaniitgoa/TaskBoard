import { MAKE_NEW_LIST } from '../actions/types';

const initialState = {
  AllLists: [],
  currentList: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MAKE_NEW_LIST:
      return {
        ...state,
        currentList: action.payload,
        AllLists: [...state.AllLists, action.payload],
      };

    default:
      return state;
  }
}
