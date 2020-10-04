import { FETCH_PROFILE_IMG } from './types';
import axios from 'axios';

export const fetchProfileImg = () => (dispatch) => {
  const img_number = Math.floor(Math.random() * 1000);
  axios
    .get(`https://picsum.photos/id/${img_number}/info`)
    .then((res) => {
      dispatch({
        type: FETCH_PROFILE_IMG,
        payload: res.data,
      });
    })
    .catch((e) => {
      console.log(e);
    });
};
