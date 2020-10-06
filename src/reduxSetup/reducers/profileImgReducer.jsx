import { FETCH_PROFILE_IMG } from '../actions/types';

const initialState = {
  imgData: {},
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PROFILE_IMG:
      return {
        ...state,
        imgData: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
