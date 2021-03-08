/* eslint-disable prettier/prettier */
import axios from 'axios';

//special Random
export function loadItem() {
  console.log('load');
  return (dispatch) => {
    return axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((response) => {
        //console.log(response.data));
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
