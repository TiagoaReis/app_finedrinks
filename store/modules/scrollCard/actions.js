/* eslint-disable prettier/prettier */
import axios from 'axios';
import API_URL from '../../../services/api.service';

//special Random
export function getScrollCard() {
  return (dispatch) => {
    return axios.get(`${API_URL}/filter.php?a=Alcoholic`).then((response) => {
      console.log(response.data);
      dispatch(getItemScrollCard(response.data));
    });
  };
}

export function getItemScrollCard(data) {
  return {
    type: 'GET_ITEM_SCROLLCARD',
    item: data,
  };
}
