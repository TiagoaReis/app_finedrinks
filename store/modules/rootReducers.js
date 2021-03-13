import {combineReducers} from 'redux';

import random from './random/index';
import scrollCard from './scrollCard/index';
import scrollCardMini from './scrollCardMini/index';
import nonAlcoholic from './nonAlcoholic/index';

export default combineReducers({
  random,
  scrollCard,
  scrollCardMini,
  nonAlcoholic,
});
