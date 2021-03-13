/* eslint-disable prettier/prettier */
import axios from 'axios';
import API_URL from '../../../services/api.service';

export function getScrollCardMini() {
  return (dispatch) => {
    return axios
      .get(`${API_URL}/filter.php?a=Non_Alcoholic`)
      .then((response) => {
        console.log(response.data);
        dispatch(getItemScrollCardMini(response.data));
      });
  };
}

export function getItemScrollCardMini(data) {
  return {
    type: 'GET_ITEM_SCROLLCARDMINI',
    item: data,
  };
}
