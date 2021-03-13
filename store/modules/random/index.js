/* eslint-disable prettier/prettier */
const INITIAL_STATE = {
  drinks: {
    drinks: [
      {
        idDrink: '11007',
        strDrink: 'Margarita special',
        strCategory: 'Ordinary Drink',
        strDrinkThumb:
          'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
      },
    ],
  },
};

const randomReducer = (state = INITIAL_STATE, action) => {
  console.log('reducer');
  console.log(action.item);
  if (action.type === 'GET_ITEM_RANDOM') {
    return {
      drinks: action.item,
    };
  } else {
    return {
      ...state,
    };
  }
};

export default randomReducer;
