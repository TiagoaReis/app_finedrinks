/* eslint-disable prettier/prettier */
import axios from 'axios';

export function getScrollCardMini() {
  return (dispatch) => {
    return axios
      .get(
        'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
      )
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
