/* eslint-disable prettier/prettier */
import axios from 'axios';
import API_URL from '../../../services/api.service';

export function getNonAlcoholicList() {
  return (dispatch) => {
    return axios
      .get(`${API_URL}/filter.php?a=Non_Alcoholic`)
      .then((response) => {
        console.log(response.data);
        dispatch(getNonAlcoholicListItem(response.data));
      });
  };
}

export function getNonAlcoholicListItem(data) {
  return {
    type: 'GET_LIST_NONALCOHOLIC',
    item: data,
  };
}
