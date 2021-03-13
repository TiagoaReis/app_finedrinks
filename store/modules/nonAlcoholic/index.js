/* eslint-disable prettier/prettier */
const INITIAL_STATE = {
  drinks: [],
};

const nonAlcoholicReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'GET_LIST_NONALCOHOLIC') {
    return {
      drinks: action.item,
    };
  } else {
    return {
      ...state,
    };
  }
};

export default nonAlcoholicReducer;
