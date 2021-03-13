/* eslint-disable prettier/prettier */
import axios from 'axios';

//special Random
export function getScrollCard() {
  return (dispatch) => {
    return axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .then((response) => {
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
