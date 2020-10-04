import { combineReducers } from 'redux';
import profileImgReducer from './profileImgReducer';

export default combineReducers({
  profileImg: profileImgReducer,
});
