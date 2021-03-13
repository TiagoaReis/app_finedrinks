/* eslint-disable prettier/prettier */
const INITIAL_STATE = {
  drinks: [],
};

const scrollCardReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'GET_ITEM_SCROLLCARD') {
    return {
      drinks: action.item,
    };
  } else {
    return {
      ...state,
    };
  }
};

export default scrollCardReducer;
