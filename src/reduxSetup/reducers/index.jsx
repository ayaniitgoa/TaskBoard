import { combineReducers } from 'redux';
import profileImgReducer from './profileImgReducer';
import newListReducer from './newListReducer';

export default combineReducers({
  profileImg: profileImgReducer,
  allLists: newListReducer,
});
