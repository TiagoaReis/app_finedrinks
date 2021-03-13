import {combineReducers} from 'redux';

import random from './random/index';
import scrollCard from './scrollCard/index';

export default combineReducers({
  random,
  scrollCard,
});
