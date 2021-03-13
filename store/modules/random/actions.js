/* eslint-disable prettier/prettier */
import axios from 'axios';
import API_URL from '../../../services/api.service';

//special Random
export function loadItem() {
  console.log('load');
  return (dispatch) => {
    return axios.get(`${API_URL}/random.php`).then((response) => {
      dispatch(getItemRandom(response.data));
    });
  };
}

export function getItemRandom(item) {
  return {
    type: 'GET_ITEM_RANDOM',
    item: item,
  };
}
