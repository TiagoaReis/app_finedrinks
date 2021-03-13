/* eslint-disable prettier/prettier */
const INITIAL_STATE = {
  drinks: [],
};

const scrollCardMiniReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'GET_ITEM_SCROLLCARDMINI') {
    return {
      drinks: action.item,
    };
  } else {
    return {
      ...state,
    };
  }
};

export default scrollCardMiniReducer;
