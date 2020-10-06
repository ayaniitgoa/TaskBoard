import {
  MAKE_NEW_LIST,
  DELETE_LIST,
  ADD_TASK_TO_LIST,
  UPDATE_TASK_TO_LIST,
} from '../actions/types';

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

    case DELETE_LIST:
      return {
        ...state,
        AllLists: state.AllLists.filter((item) => item.id !== action.payload),
      };

    case ADD_TASK_TO_LIST:
      for (var i = 0; i < state.AllLists.length; i++) {
        if (state.AllLists[i].id === action.payload.id) {
          state.AllLists[i].alltasks.push(action.payload.data);
        }
      }

      const updatedAllLists = state.AllLists;

      return {
        ...state,
        AllLists: updatedAllLists,
      };

    case UPDATE_TASK_TO_LIST:
      for (var j = 0; j < state.AllLists.length; j++) {
        if (state.AllLists[j].id === action.payload.id) {
          for (var k = 0; k < state.AllLists[j].alltasks.length; k++) {
            if (state.AllLists[j].alltasks[k].id === action.payload.data.id) {
              if (action.payload.data.description) {
                state.AllLists[j].alltasks[k].description =
                  action.payload.data.description;
              }

              if (action.payload.data.date) {
                state.AllLists[j].alltasks[k].date = action.payload.data.date;
              }
            }
          }
        }
      }
      const updatedLists = state.AllLists;

      // console.log(updatedLists);
      return {
        ...state,
        AllLists: updatedLists,
      };

    default:
      return state;
  }
}
